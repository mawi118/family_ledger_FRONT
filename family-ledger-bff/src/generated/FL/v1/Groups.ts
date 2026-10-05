// Original file: proto/group.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AcceptInviteRequest as _FL_v1_AcceptInviteRequest, AcceptInviteRequest__Output as _FL_v1_AcceptInviteRequest__Output } from '../../FL/v1/AcceptInviteRequest';
import type { AcceptInviteResponse as _FL_v1_AcceptInviteResponse, AcceptInviteResponse__Output as _FL_v1_AcceptInviteResponse__Output } from '../../FL/v1/AcceptInviteResponse';
import type { CreateGroupRequest as _FL_v1_CreateGroupRequest, CreateGroupRequest__Output as _FL_v1_CreateGroupRequest__Output } from '../../FL/v1/CreateGroupRequest';
import type { Group as _FL_v1_Group, Group__Output as _FL_v1_Group__Output } from '../../FL/v1/Group';
import type { GroupIdRequest as _FL_v1_GroupIdRequest, GroupIdRequest__Output as _FL_v1_GroupIdRequest__Output } from '../../FL/v1/GroupIdRequest';
import type { IncomeResponse as _FL_v1_IncomeResponse, IncomeResponse__Output as _FL_v1_IncomeResponse__Output } from '../../FL/v1/IncomeResponse';
import type { InviteResponse as _FL_v1_InviteResponse, InviteResponse__Output as _FL_v1_InviteResponse__Output } from '../../FL/v1/InviteResponse';
import type { ListMembersResponse as _FL_v1_ListMembersResponse, ListMembersResponse__Output as _FL_v1_ListMembersResponse__Output } from '../../FL/v1/ListMembersResponse';
import type { ListMyGroupsRequest as _FL_v1_ListMyGroupsRequest, ListMyGroupsRequest__Output as _FL_v1_ListMyGroupsRequest__Output } from '../../FL/v1/ListMyGroupsRequest';
import type { ListMyGroupsResponse as _FL_v1_ListMyGroupsResponse, ListMyGroupsResponse__Output as _FL_v1_ListMyGroupsResponse__Output } from '../../FL/v1/ListMyGroupsResponse';
import type { RenameGroupRequest as _FL_v1_RenameGroupRequest, RenameGroupRequest__Output as _FL_v1_RenameGroupRequest__Output } from '../../FL/v1/RenameGroupRequest';
import type { RenameGroupResponse as _FL_v1_RenameGroupResponse, RenameGroupResponse__Output as _FL_v1_RenameGroupResponse__Output } from '../../FL/v1/RenameGroupResponse';
import type { SetMyIncomeRequest as _FL_v1_SetMyIncomeRequest, SetMyIncomeRequest__Output as _FL_v1_SetMyIncomeRequest__Output } from '../../FL/v1/SetMyIncomeRequest';

export interface GroupsClient extends grpc.Client {
  AcceptInvite(argument: _FL_v1_AcceptInviteRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_AcceptInviteResponse__Output>): grpc.ClientUnaryCall;
  AcceptInvite(argument: _FL_v1_AcceptInviteRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_FL_v1_AcceptInviteResponse__Output>): grpc.ClientUnaryCall;
  AcceptInvite(argument: _FL_v1_AcceptInviteRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_AcceptInviteResponse__Output>): grpc.ClientUnaryCall;
  AcceptInvite(argument: _FL_v1_AcceptInviteRequest, callback: grpc.requestCallback<_FL_v1_AcceptInviteResponse__Output>): grpc.ClientUnaryCall;
  acceptInvite(argument: _FL_v1_AcceptInviteRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_AcceptInviteResponse__Output>): grpc.ClientUnaryCall;
  acceptInvite(argument: _FL_v1_AcceptInviteRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_FL_v1_AcceptInviteResponse__Output>): grpc.ClientUnaryCall;
  acceptInvite(argument: _FL_v1_AcceptInviteRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_AcceptInviteResponse__Output>): grpc.ClientUnaryCall;
  acceptInvite(argument: _FL_v1_AcceptInviteRequest, callback: grpc.requestCallback<_FL_v1_AcceptInviteResponse__Output>): grpc.ClientUnaryCall;
  
  CreateGroup(argument: _FL_v1_CreateGroupRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_Group__Output>): grpc.ClientUnaryCall;
  CreateGroup(argument: _FL_v1_CreateGroupRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_FL_v1_Group__Output>): grpc.ClientUnaryCall;
  CreateGroup(argument: _FL_v1_CreateGroupRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_Group__Output>): grpc.ClientUnaryCall;
  CreateGroup(argument: _FL_v1_CreateGroupRequest, callback: grpc.requestCallback<_FL_v1_Group__Output>): grpc.ClientUnaryCall;
  createGroup(argument: _FL_v1_CreateGroupRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_Group__Output>): grpc.ClientUnaryCall;
  createGroup(argument: _FL_v1_CreateGroupRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_FL_v1_Group__Output>): grpc.ClientUnaryCall;
  createGroup(argument: _FL_v1_CreateGroupRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_Group__Output>): grpc.ClientUnaryCall;
  createGroup(argument: _FL_v1_CreateGroupRequest, callback: grpc.requestCallback<_FL_v1_Group__Output>): grpc.ClientUnaryCall;
  
  CreateInvite(argument: _FL_v1_GroupIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_InviteResponse__Output>): grpc.ClientUnaryCall;
  CreateInvite(argument: _FL_v1_GroupIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_FL_v1_InviteResponse__Output>): grpc.ClientUnaryCall;
  CreateInvite(argument: _FL_v1_GroupIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_InviteResponse__Output>): grpc.ClientUnaryCall;
  CreateInvite(argument: _FL_v1_GroupIdRequest, callback: grpc.requestCallback<_FL_v1_InviteResponse__Output>): grpc.ClientUnaryCall;
  createInvite(argument: _FL_v1_GroupIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_InviteResponse__Output>): grpc.ClientUnaryCall;
  createInvite(argument: _FL_v1_GroupIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_FL_v1_InviteResponse__Output>): grpc.ClientUnaryCall;
  createInvite(argument: _FL_v1_GroupIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_InviteResponse__Output>): grpc.ClientUnaryCall;
  createInvite(argument: _FL_v1_GroupIdRequest, callback: grpc.requestCallback<_FL_v1_InviteResponse__Output>): grpc.ClientUnaryCall;
  
  GetGroup(argument: _FL_v1_GroupIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_Group__Output>): grpc.ClientUnaryCall;
  GetGroup(argument: _FL_v1_GroupIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_FL_v1_Group__Output>): grpc.ClientUnaryCall;
  GetGroup(argument: _FL_v1_GroupIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_Group__Output>): grpc.ClientUnaryCall;
  GetGroup(argument: _FL_v1_GroupIdRequest, callback: grpc.requestCallback<_FL_v1_Group__Output>): grpc.ClientUnaryCall;
  getGroup(argument: _FL_v1_GroupIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_Group__Output>): grpc.ClientUnaryCall;
  getGroup(argument: _FL_v1_GroupIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_FL_v1_Group__Output>): grpc.ClientUnaryCall;
  getGroup(argument: _FL_v1_GroupIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_Group__Output>): grpc.ClientUnaryCall;
  getGroup(argument: _FL_v1_GroupIdRequest, callback: grpc.requestCallback<_FL_v1_Group__Output>): grpc.ClientUnaryCall;
  
  GetMyIncome(argument: _FL_v1_GroupIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_IncomeResponse__Output>): grpc.ClientUnaryCall;
  GetMyIncome(argument: _FL_v1_GroupIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_FL_v1_IncomeResponse__Output>): grpc.ClientUnaryCall;
  GetMyIncome(argument: _FL_v1_GroupIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_IncomeResponse__Output>): grpc.ClientUnaryCall;
  GetMyIncome(argument: _FL_v1_GroupIdRequest, callback: grpc.requestCallback<_FL_v1_IncomeResponse__Output>): grpc.ClientUnaryCall;
  getMyIncome(argument: _FL_v1_GroupIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_IncomeResponse__Output>): grpc.ClientUnaryCall;
  getMyIncome(argument: _FL_v1_GroupIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_FL_v1_IncomeResponse__Output>): grpc.ClientUnaryCall;
  getMyIncome(argument: _FL_v1_GroupIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_IncomeResponse__Output>): grpc.ClientUnaryCall;
  getMyIncome(argument: _FL_v1_GroupIdRequest, callback: grpc.requestCallback<_FL_v1_IncomeResponse__Output>): grpc.ClientUnaryCall;
  
  ListMembers(argument: _FL_v1_GroupIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_ListMembersResponse__Output>): grpc.ClientUnaryCall;
  ListMembers(argument: _FL_v1_GroupIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_FL_v1_ListMembersResponse__Output>): grpc.ClientUnaryCall;
  ListMembers(argument: _FL_v1_GroupIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_ListMembersResponse__Output>): grpc.ClientUnaryCall;
  ListMembers(argument: _FL_v1_GroupIdRequest, callback: grpc.requestCallback<_FL_v1_ListMembersResponse__Output>): grpc.ClientUnaryCall;
  listMembers(argument: _FL_v1_GroupIdRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_ListMembersResponse__Output>): grpc.ClientUnaryCall;
  listMembers(argument: _FL_v1_GroupIdRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_FL_v1_ListMembersResponse__Output>): grpc.ClientUnaryCall;
  listMembers(argument: _FL_v1_GroupIdRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_ListMembersResponse__Output>): grpc.ClientUnaryCall;
  listMembers(argument: _FL_v1_GroupIdRequest, callback: grpc.requestCallback<_FL_v1_ListMembersResponse__Output>): grpc.ClientUnaryCall;
  
  ListMyGroups(argument: _FL_v1_ListMyGroupsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_ListMyGroupsResponse__Output>): grpc.ClientUnaryCall;
  ListMyGroups(argument: _FL_v1_ListMyGroupsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_FL_v1_ListMyGroupsResponse__Output>): grpc.ClientUnaryCall;
  ListMyGroups(argument: _FL_v1_ListMyGroupsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_ListMyGroupsResponse__Output>): grpc.ClientUnaryCall;
  ListMyGroups(argument: _FL_v1_ListMyGroupsRequest, callback: grpc.requestCallback<_FL_v1_ListMyGroupsResponse__Output>): grpc.ClientUnaryCall;
  listMyGroups(argument: _FL_v1_ListMyGroupsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_ListMyGroupsResponse__Output>): grpc.ClientUnaryCall;
  listMyGroups(argument: _FL_v1_ListMyGroupsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_FL_v1_ListMyGroupsResponse__Output>): grpc.ClientUnaryCall;
  listMyGroups(argument: _FL_v1_ListMyGroupsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_ListMyGroupsResponse__Output>): grpc.ClientUnaryCall;
  listMyGroups(argument: _FL_v1_ListMyGroupsRequest, callback: grpc.requestCallback<_FL_v1_ListMyGroupsResponse__Output>): grpc.ClientUnaryCall;
  
  RenameGroup(argument: _FL_v1_RenameGroupRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_RenameGroupResponse__Output>): grpc.ClientUnaryCall;
  RenameGroup(argument: _FL_v1_RenameGroupRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_FL_v1_RenameGroupResponse__Output>): grpc.ClientUnaryCall;
  RenameGroup(argument: _FL_v1_RenameGroupRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_RenameGroupResponse__Output>): grpc.ClientUnaryCall;
  RenameGroup(argument: _FL_v1_RenameGroupRequest, callback: grpc.requestCallback<_FL_v1_RenameGroupResponse__Output>): grpc.ClientUnaryCall;
  renameGroup(argument: _FL_v1_RenameGroupRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_RenameGroupResponse__Output>): grpc.ClientUnaryCall;
  renameGroup(argument: _FL_v1_RenameGroupRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_FL_v1_RenameGroupResponse__Output>): grpc.ClientUnaryCall;
  renameGroup(argument: _FL_v1_RenameGroupRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_RenameGroupResponse__Output>): grpc.ClientUnaryCall;
  renameGroup(argument: _FL_v1_RenameGroupRequest, callback: grpc.requestCallback<_FL_v1_RenameGroupResponse__Output>): grpc.ClientUnaryCall;
  
  SetMyIncome(argument: _FL_v1_SetMyIncomeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_IncomeResponse__Output>): grpc.ClientUnaryCall;
  SetMyIncome(argument: _FL_v1_SetMyIncomeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_FL_v1_IncomeResponse__Output>): grpc.ClientUnaryCall;
  SetMyIncome(argument: _FL_v1_SetMyIncomeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_IncomeResponse__Output>): grpc.ClientUnaryCall;
  SetMyIncome(argument: _FL_v1_SetMyIncomeRequest, callback: grpc.requestCallback<_FL_v1_IncomeResponse__Output>): grpc.ClientUnaryCall;
  setMyIncome(argument: _FL_v1_SetMyIncomeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_IncomeResponse__Output>): grpc.ClientUnaryCall;
  setMyIncome(argument: _FL_v1_SetMyIncomeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_FL_v1_IncomeResponse__Output>): grpc.ClientUnaryCall;
  setMyIncome(argument: _FL_v1_SetMyIncomeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_IncomeResponse__Output>): grpc.ClientUnaryCall;
  setMyIncome(argument: _FL_v1_SetMyIncomeRequest, callback: grpc.requestCallback<_FL_v1_IncomeResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface GroupsHandlers extends grpc.UntypedServiceImplementation {
  AcceptInvite: grpc.handleUnaryCall<_FL_v1_AcceptInviteRequest__Output, _FL_v1_AcceptInviteResponse>;
  
  CreateGroup: grpc.handleUnaryCall<_FL_v1_CreateGroupRequest__Output, _FL_v1_Group>;
  
  CreateInvite: grpc.handleUnaryCall<_FL_v1_GroupIdRequest__Output, _FL_v1_InviteResponse>;
  
  GetGroup: grpc.handleUnaryCall<_FL_v1_GroupIdRequest__Output, _FL_v1_Group>;
  
  GetMyIncome: grpc.handleUnaryCall<_FL_v1_GroupIdRequest__Output, _FL_v1_IncomeResponse>;
  
  ListMembers: grpc.handleUnaryCall<_FL_v1_GroupIdRequest__Output, _FL_v1_ListMembersResponse>;
  
  ListMyGroups: grpc.handleUnaryCall<_FL_v1_ListMyGroupsRequest__Output, _FL_v1_ListMyGroupsResponse>;
  
  RenameGroup: grpc.handleUnaryCall<_FL_v1_RenameGroupRequest__Output, _FL_v1_RenameGroupResponse>;
  
  SetMyIncome: grpc.handleUnaryCall<_FL_v1_SetMyIncomeRequest__Output, _FL_v1_IncomeResponse>;
  
}

export interface GroupsDefinition extends grpc.ServiceDefinition {
  AcceptInvite: MethodDefinition<_FL_v1_AcceptInviteRequest, _FL_v1_AcceptInviteResponse, _FL_v1_AcceptInviteRequest__Output, _FL_v1_AcceptInviteResponse__Output>
  CreateGroup: MethodDefinition<_FL_v1_CreateGroupRequest, _FL_v1_Group, _FL_v1_CreateGroupRequest__Output, _FL_v1_Group__Output>
  CreateInvite: MethodDefinition<_FL_v1_GroupIdRequest, _FL_v1_InviteResponse, _FL_v1_GroupIdRequest__Output, _FL_v1_InviteResponse__Output>
  GetGroup: MethodDefinition<_FL_v1_GroupIdRequest, _FL_v1_Group, _FL_v1_GroupIdRequest__Output, _FL_v1_Group__Output>
  GetMyIncome: MethodDefinition<_FL_v1_GroupIdRequest, _FL_v1_IncomeResponse, _FL_v1_GroupIdRequest__Output, _FL_v1_IncomeResponse__Output>
  ListMembers: MethodDefinition<_FL_v1_GroupIdRequest, _FL_v1_ListMembersResponse, _FL_v1_GroupIdRequest__Output, _FL_v1_ListMembersResponse__Output>
  ListMyGroups: MethodDefinition<_FL_v1_ListMyGroupsRequest, _FL_v1_ListMyGroupsResponse, _FL_v1_ListMyGroupsRequest__Output, _FL_v1_ListMyGroupsResponse__Output>
  RenameGroup: MethodDefinition<_FL_v1_RenameGroupRequest, _FL_v1_RenameGroupResponse, _FL_v1_RenameGroupRequest__Output, _FL_v1_RenameGroupResponse__Output>
  SetMyIncome: MethodDefinition<_FL_v1_SetMyIncomeRequest, _FL_v1_IncomeResponse, _FL_v1_SetMyIncomeRequest__Output, _FL_v1_IncomeResponse__Output>
}
