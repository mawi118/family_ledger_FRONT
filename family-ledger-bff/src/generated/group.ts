import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AcceptInviteRequest as _FL_v1_AcceptInviteRequest, AcceptInviteRequest__Output as _FL_v1_AcceptInviteRequest__Output } from './FL/v1/AcceptInviteRequest';
import type { AcceptInviteResponse as _FL_v1_AcceptInviteResponse, AcceptInviteResponse__Output as _FL_v1_AcceptInviteResponse__Output } from './FL/v1/AcceptInviteResponse';
import type { CreateGroupRequest as _FL_v1_CreateGroupRequest, CreateGroupRequest__Output as _FL_v1_CreateGroupRequest__Output } from './FL/v1/CreateGroupRequest';
import type { Group as _FL_v1_Group, Group__Output as _FL_v1_Group__Output } from './FL/v1/Group';
import type { GroupIdRequest as _FL_v1_GroupIdRequest, GroupIdRequest__Output as _FL_v1_GroupIdRequest__Output } from './FL/v1/GroupIdRequest';
import type { GroupsClient as _FL_v1_GroupsClient, GroupsDefinition as _FL_v1_GroupsDefinition } from './FL/v1/Groups';
import type { IncomeResponse as _FL_v1_IncomeResponse, IncomeResponse__Output as _FL_v1_IncomeResponse__Output } from './FL/v1/IncomeResponse';
import type { InviteResponse as _FL_v1_InviteResponse, InviteResponse__Output as _FL_v1_InviteResponse__Output } from './FL/v1/InviteResponse';
import type { ListMembersResponse as _FL_v1_ListMembersResponse, ListMembersResponse__Output as _FL_v1_ListMembersResponse__Output } from './FL/v1/ListMembersResponse';
import type { ListMyGroupsRequest as _FL_v1_ListMyGroupsRequest, ListMyGroupsRequest__Output as _FL_v1_ListMyGroupsRequest__Output } from './FL/v1/ListMyGroupsRequest';
import type { ListMyGroupsResponse as _FL_v1_ListMyGroupsResponse, ListMyGroupsResponse__Output as _FL_v1_ListMyGroupsResponse__Output } from './FL/v1/ListMyGroupsResponse';
import type { Member as _FL_v1_Member, Member__Output as _FL_v1_Member__Output } from './FL/v1/Member';
import type { RenameGroupRequest as _FL_v1_RenameGroupRequest, RenameGroupRequest__Output as _FL_v1_RenameGroupRequest__Output } from './FL/v1/RenameGroupRequest';
import type { RenameGroupResponse as _FL_v1_RenameGroupResponse, RenameGroupResponse__Output as _FL_v1_RenameGroupResponse__Output } from './FL/v1/RenameGroupResponse';
import type { SetMyIncomeRequest as _FL_v1_SetMyIncomeRequest, SetMyIncomeRequest__Output as _FL_v1_SetMyIncomeRequest__Output } from './FL/v1/SetMyIncomeRequest';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  FL: {
    v1: {
      AcceptInviteRequest: MessageTypeDefinition<_FL_v1_AcceptInviteRequest, _FL_v1_AcceptInviteRequest__Output>
      AcceptInviteResponse: MessageTypeDefinition<_FL_v1_AcceptInviteResponse, _FL_v1_AcceptInviteResponse__Output>
      CreateGroupRequest: MessageTypeDefinition<_FL_v1_CreateGroupRequest, _FL_v1_CreateGroupRequest__Output>
      Group: MessageTypeDefinition<_FL_v1_Group, _FL_v1_Group__Output>
      GroupIdRequest: MessageTypeDefinition<_FL_v1_GroupIdRequest, _FL_v1_GroupIdRequest__Output>
      Groups: SubtypeConstructor<typeof grpc.Client, _FL_v1_GroupsClient> & { service: _FL_v1_GroupsDefinition }
      IncomeResponse: MessageTypeDefinition<_FL_v1_IncomeResponse, _FL_v1_IncomeResponse__Output>
      InviteResponse: MessageTypeDefinition<_FL_v1_InviteResponse, _FL_v1_InviteResponse__Output>
      ListMembersResponse: MessageTypeDefinition<_FL_v1_ListMembersResponse, _FL_v1_ListMembersResponse__Output>
      ListMyGroupsRequest: MessageTypeDefinition<_FL_v1_ListMyGroupsRequest, _FL_v1_ListMyGroupsRequest__Output>
      ListMyGroupsResponse: MessageTypeDefinition<_FL_v1_ListMyGroupsResponse, _FL_v1_ListMyGroupsResponse__Output>
      Member: MessageTypeDefinition<_FL_v1_Member, _FL_v1_Member__Output>
      RenameGroupRequest: MessageTypeDefinition<_FL_v1_RenameGroupRequest, _FL_v1_RenameGroupRequest__Output>
      RenameGroupResponse: MessageTypeDefinition<_FL_v1_RenameGroupResponse, _FL_v1_RenameGroupResponse__Output>
      SetMyIncomeRequest: MessageTypeDefinition<_FL_v1_SetMyIncomeRequest, _FL_v1_SetMyIncomeRequest__Output>
    }
  }
}

