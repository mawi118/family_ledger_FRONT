import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthClient as _FL_v1_AuthClient, AuthDefinition as _FL_v1_AuthDefinition } from './FL/v1/Auth';
import type { EmailExistsRequest as _FL_v1_EmailExistsRequest, EmailExistsRequest__Output as _FL_v1_EmailExistsRequest__Output } from './FL/v1/EmailExistsRequest';
import type { EmailExistsResponse as _FL_v1_EmailExistsResponse, EmailExistsResponse__Output as _FL_v1_EmailExistsResponse__Output } from './FL/v1/EmailExistsResponse';
import type { LoginRequest as _FL_v1_LoginRequest, LoginRequest__Output as _FL_v1_LoginRequest__Output } from './FL/v1/LoginRequest';
import type { LoginResponse as _FL_v1_LoginResponse, LoginResponse__Output as _FL_v1_LoginResponse__Output } from './FL/v1/LoginResponse';
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
      RegisterRequest: MessageTypeDefinition<_FL_v1_RegisterRequest, _FL_v1_RegisterRequest__Output>
      RegisterResponse: MessageTypeDefinition<_FL_v1_RegisterResponse, _FL_v1_RegisterResponse__Output>
      User: MessageTypeDefinition<_FL_v1_User, _FL_v1_User__Output>
    }
  }
}

