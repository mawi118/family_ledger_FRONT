import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import { CONFIG } from '../../config/constants';
import type { ProtoGrpcType } from '../../generated/group';
import type { GroupsClient } from '../../generated/FL/v1/Groups';

const PROTO_PATH = path.resolve(__dirname, '../../../proto/group.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const protoDescriptor = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

export const groupsClient: GroupsClient = new protoDescriptor.FL.v1.Groups(
  CONFIG.CORE_GRPC_ADDR,
  grpc.credentials.createInsecure()
);
