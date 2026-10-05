import * as grpc from '@grpc/grpc-js';
import { Router, Request, Response } from 'express';
import { CONFIG } from '../../config/constants';
import { groupsClient } from './groupsClient';
import { promisifyGrpc } from '../shared/grpcPromisify';
import { grpcErrorToHttp } from '../shared/grpcErrors';

import type { Group__Output } from '../../generated/FL/v1/Group';
import type { ListMyGroupsResponse__Output } from '../../generated/FL/v1/ListMyGroupsResponse';
import type { RenameGroupResponse__Output } from '../../generated/FL/v1/RenameGroupResponse';
import type { ListMembersResponse__Output } from '../../generated/FL/v1/ListMembersResponse';
import type { IncomeResponse__Output } from '../../generated/FL/v1/IncomeResponse';
import type { InviteResponse__Output } from '../../generated/FL/v1/InviteResponse';
import type { AcceptInviteResponse__Output } from '../../generated/FL/v1/AcceptInviteResponse';

const router = Router();

function fail(res: Response, statusCode: number, error: string): void {
  res.status(statusCode).json({ success: false, error, statusCode });
}

function sendGrpcError(res: Response, err: unknown): void {
  const { statusCode, error } = grpcErrorToHttp(err);
  fail(res, statusCode, error);
}

/**
 * Достаёт access-токен из HttpOnly-куки и превращает его в gRPC-метаданные.
 * Пользователя определяет бэкенд по токену; BFF его id никуда не подставляет.
 * Возвращает null (и сам отвечает 401), если куки нет.
 */
function authMetadata(req: Request, res: Response): grpc.Metadata | null {
  const accessToken = req.cookies?.[CONFIG.ACCESS_TOKEN_COOKIE_NAME];
  if (!accessToken) {
    fail(res, 401, 'Не авторизован');
    return null;
  }
  const md = new grpc.Metadata();
  md.set('authorization', `Bearer ${accessToken}`);
  return md;
}

// Express 5 типизирует params как string, но на всякий случай приводим явно.
function groupIdOf(req: Request): string {
  return String(req.params.groupId ?? '');
}

function mapGroup(g: Group__Output) {
  return { id: g.group_id, name: g.name, creatorId: g.creator_id };
}

// Доход хранится в копейках; на бэкенде ограничен 10^12, это безопасно помещается в number.
function toNumber(v: string | number): number {
  return typeof v === 'number' ? v : Number(v);
}

// POST /groups — name необязателен: без него бэкенд назовёт группу «Группа {X+1}»
router.post('/groups', async (req: Request, res: Response): Promise<void> => {
  const md = authMetadata(req, res);
  if (!md) return;

  const name = req.body?.name;
  if (name !== undefined && name !== null && typeof name !== 'string') {
    fail(res, 400, 'Название группы должно быть строкой');
    return;
  }

  try {
    const g = await promisifyGrpc<{ name: string }, Group__Output>(
      groupsClient, 'CreateGroup', { name: name ?? '' }, md);
    res.status(201).json(mapGroup(g));
  } catch (err) {
    sendGrpcError(res, err);
  }
});

// GET /groups — список групп текущего пользователя (нужен боковой панели; в первоначальном swagger не было)
router.get('/groups', async (req: Request, res: Response): Promise<void> => {
  const md = authMetadata(req, res);
  if (!md) return;
  try {
    const r = await promisifyGrpc<Record<string, never>, ListMyGroupsResponse__Output>(
      groupsClient, 'ListMyGroups', {}, md);
    res.json(r.groups.map(mapGroup));
  } catch (err) {
    sendGrpcError(res, err);
  }
});

router.get('/groups/:groupId', async (req: Request, res: Response): Promise<void> => {
  const md = authMetadata(req, res);
  if (!md) return;
  try {
    const g = await promisifyGrpc<{ group_id: string }, Group__Output>(
      groupsClient, 'GetGroup', { group_id: groupIdOf(req) }, md);
    res.json(mapGroup(g));
  } catch (err) {
    sendGrpcError(res, err);
  }
});

router.patch('/groups/:groupId', async (req: Request, res: Response): Promise<void> => {
  const md = authMetadata(req, res);
  if (!md) return;

  const name = req.body?.name;
  if (typeof name !== 'string') {
    fail(res, 400, 'Название группы обязательно');
    return;
  }

  try {
    const r = await promisifyGrpc<{ group_id: string; name: string }, RenameGroupResponse__Output>(
      groupsClient, 'RenameGroup', { group_id: groupIdOf(req), name }, md);
    res.json({ name: r.name });
  } catch (err) {
    sendGrpcError(res, err);
  }
});

router.get('/groups/:groupId/members', async (req: Request, res: Response): Promise<void> => {
  const md = authMetadata(req, res);
  if (!md) return;
  try {
    const r = await promisifyGrpc<{ group_id: string }, ListMembersResponse__Output>(
      groupsClient, 'ListMembers', { group_id: groupIdOf(req) }, md);
    res.json(r.members.map((m) => ({
      id: m.user_id,
      firstName: m.first_name,
      lastName: m.last_name || null,
      middleName: m.middle_name || null,
      joinedAt: m.joined_at,
      income: toNumber(m.income),
      role: m.role,
    })));
  } catch (err) {
    sendGrpcError(res, err);
  }
});

router.get('/groups/:groupId/income', async (req: Request, res: Response): Promise<void> => {
  const md = authMetadata(req, res);
  if (!md) return;
  try {
    const r = await promisifyGrpc<{ group_id: string }, IncomeResponse__Output>(
      groupsClient, 'GetMyIncome', { group_id: groupIdOf(req) }, md);
    res.json({ income: toNumber(r.income) });
  } catch (err) {
    sendGrpcError(res, err);
  }
});

router.put('/groups/:groupId/income', async (req: Request, res: Response): Promise<void> => {
  const md = authMetadata(req, res);
  if (!md) return;

  const income = req.body?.income;
  if (typeof income !== 'number' || !Number.isSafeInteger(income)) {
    fail(res, 400, 'Доход должен быть целым числом копеек');
    return;
  }

  try {
    const r = await promisifyGrpc<{ group_id: string; income: number }, IncomeResponse__Output>(
      groupsClient, 'SetMyIncome', { group_id: groupIdOf(req), income }, md);
    res.json({ income: toNumber(r.income) });
  } catch (err) {
    sendGrpcError(res, err);
  }
});

// Только создатель группы; пока код жив, возвращается тот же
router.post('/groups/:groupId/invite', async (req: Request, res: Response): Promise<void> => {
  const md = authMetadata(req, res);
  if (!md) return;
  try {
    const r = await promisifyGrpc<{ group_id: string }, InviteResponse__Output>(
      groupsClient, 'CreateInvite', { group_id: groupIdOf(req) }, md);
    res.json({ code: r.code, expiresAt: r.expires_at });
  } catch (err) {
    sendGrpcError(res, err);
  }
});

router.post('/invitations/accept', async (req: Request, res: Response): Promise<void> => {
  const md = authMetadata(req, res);
  if (!md) return;

  const code = req.body?.code;
  if (typeof code !== 'string') {
    fail(res, 400, 'Код приглашения состоит из 4 цифр');
    return;
  }

  try {
    const r = await promisifyGrpc<{ code: string }, AcceptInviteResponse__Output>(
      groupsClient, 'AcceptInvite', { code }, md);
    res.json({ groupId: r.group_id });
  } catch (err) {
    sendGrpcError(res, err);
  }
});

export default router;
