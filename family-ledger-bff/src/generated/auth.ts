import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthClient as _FL_v1_AuthClient, AuthDefinition as _FL_v1_AuthDefinition } from './FL/v1/Auth';
import type { EmailExistsRequest as _FL_v1_EmailExistsRequest, EmailExistsRequest__Output as _FL_v1_EmailExistsRequest__Output } from './FL/v1/EmailExistsRequest';
import type { EmailExistsResponse as _FL_v1_EmailExistsResponse, EmailExistsResponse__Output as _FL_v1_EmailExistsResponse__Output } from './FL/v1/EmailExistsResponse';
import type { LoginRequest as _FL_v1_LoginRequest, LoginRequest__Output as _FL_v1_LoginRequest__Output } from './FL/v1/LoginRequest';
import type { LoginResponse as _FL_v1_LoginResponse, LoginResponse__Output as _FL_v1_LoginResponse__Output } from './FL/v1/LoginResponse';
import type { LogoutRequest as _FL_v1_LogoutRequest, LogoutRequest__Output as _FL_v1_LogoutRequest__Output } from './FL/v1/LogoutRequest';
import type { LogoutResponse as _FL_v1_LogoutResponse, LogoutResponse__Output as _FL_v1_LogoutResponse__Output } from './FL/v1/LogoutResponse';
import type { MeRequest as _FL_v1_MeRequest, MeRequest__Output as _FL_v1_MeRequest__Output } from './FL/v1/MeRequest';
import type { MeResponse as _FL_v1_MeResponse, MeResponse__Output as _FL_v1_MeResponse__Output } from './FL/v1/MeResponse';
import type { RefreshRequest as _FL_v1_RefreshRequest, RefreshRequest__Output as _FL_v1_RefreshRequest__Output } from './FL/v1/RefreshRequest';
import type { RefreshResponse as _FL_v1_RefreshResponse, RefreshResponse__Output as _FL_v1_RefreshResponse__Output } from './FL/v1/RefreshResponse';
import type { RegisterRequest as _FL_v1_RegisterRequest, RegisterRequest__Output as _FL_v1_RegisterRequest__Output } from './FL/v1/RegisterRequest';
import type { RegisterResponse as _FL_v1_RegisterResponse, RegisterResponse__Output as _FL_v1_RegisterResponse__Output } from './FL/v1/RegisterResponse';
import type { User as _FL_v1_User, User__Output as _FL_v1_User__Output } from './FL/v1/User';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  FL: {
    v1: {
      Auth: SubtypeConstructor<typeof grpc.Client, _FL_v1_AuthClient> & { service: _FL_v1_AuthDefinition }
      EmailExistsRequest: MessageTypeDefinition<_FL_v1_EmailExistsRequest, _FL_v1_EmailExistsRequest__Output>
      EmailExistsResponse: MessageTypeDefinition<_FL_v1_EmailExistsResponse, _FL_v1_EmailExistsResponse__Output>
      LoginRequest: MessageTypeDefinition<_FL_v1_LoginRequest, _FL_v1_LoginRequest__Output>
      LoginResponse: MessageTypeDefinition<_FL_v1_LoginResponse, _FL_v1_LoginResponse__Output>
      LogoutRequest: MessageTypeDefinition<_FL_v1_LogoutRequest, _FL_v1_LogoutRequest__Output>
      LogoutResponse: MessageTypeDefinition<_FL_v1_LogoutResponse, _FL_v1_LogoutResponse__Output>
      MeRequest: MessageTypeDefinition<_FL_v1_MeRequest, _FL_v1_MeRequest__Output>
      MeResponse: MessageTypeDefinition<_FL_v1_MeResponse, _FL_v1_MeResponse__Output>
      RefreshRequest: MessageTypeDefinition<_FL_v1_RefreshRequest, _FL_v1_RefreshRequest__Output>
      RefreshResponse: MessageTypeDefinition<_FL_v1_RefreshResponse, _FL_v1_RefreshResponse__Output>
      RegisterRequest: MessageTypeDefinition<_FL_v1_RegisterRequest, _FL_v1_RegisterRequest__Output>
      RegisterResponse: MessageTypeDefinition<_FL_v1_RegisterResponse, _FL_v1_RegisterResponse__Output>
      User: MessageTypeDefinition<_FL_v1_User, _FL_v1_User__Output>
    }
  }
}

