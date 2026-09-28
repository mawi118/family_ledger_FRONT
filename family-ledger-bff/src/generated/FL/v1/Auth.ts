// Original file: proto/auth.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { EmailExistsRequest as _FL_v1_EmailExistsRequest, EmailExistsRequest__Output as _FL_v1_EmailExistsRequest__Output } from '../../FL/v1/EmailExistsRequest';
import type { EmailExistsResponse as _FL_v1_EmailExistsResponse, EmailExistsResponse__Output as _FL_v1_EmailExistsResponse__Output } from '../../FL/v1/EmailExistsResponse';
import type { LoginRequest as _FL_v1_LoginRequest, LoginRequest__Output as _FL_v1_LoginRequest__Output } from '../../FL/v1/LoginRequest';
import type { LoginResponse as _FL_v1_LoginResponse, LoginResponse__Output as _FL_v1_LoginResponse__Output } from '../../FL/v1/LoginResponse';
import type { LogoutRequest as _FL_v1_LogoutRequest, LogoutRequest__Output as _FL_v1_LogoutRequest__Output } from '../../FL/v1/LogoutRequest';
import type { LogoutResponse as _FL_v1_LogoutResponse, LogoutResponse__Output as _FL_v1_LogoutResponse__Output } from '../../FL/v1/LogoutResponse';
import type { MeRequest as _FL_v1_MeRequest, MeRequest__Output as _FL_v1_MeRequest__Output } from '../../FL/v1/MeRequest';
import type { MeResponse as _FL_v1_MeResponse, MeResponse__Output as _FL_v1_MeResponse__Output } from '../../FL/v1/MeResponse';
import type { RefreshRequest as _FL_v1_RefreshRequest, RefreshRequest__Output as _FL_v1_RefreshRequest__Output } from '../../FL/v1/RefreshRequest';
import type { RefreshResponse as _FL_v1_RefreshResponse, RefreshResponse__Output as _FL_v1_RefreshResponse__Output } from '../../FL/v1/RefreshResponse';
import type { RegisterRequest as _FL_v1_RegisterRequest, RegisterRequest__Output as _FL_v1_RegisterRequest__Output } from '../../FL/v1/RegisterRequest';
import type { RegisterResponse as _FL_v1_RegisterResponse, RegisterResponse__Output as _FL_v1_RegisterResponse__Output } from '../../FL/v1/RegisterResponse';

export interface AuthClient extends grpc.Client {
  EmailExists(argument: _FL_v1_EmailExistsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_EmailExistsResponse__Output>): grpc.ClientUnaryCall;
  EmailExists(argument: _FL_v1_EmailExistsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_FL_v1_EmailExistsResponse__Output>): grpc.ClientUnaryCall;
  EmailExists(argument: _FL_v1_EmailExistsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_EmailExistsResponse__Output>): grpc.ClientUnaryCall;
  EmailExists(argument: _FL_v1_EmailExistsRequest, callback: grpc.requestCallback<_FL_v1_EmailExistsResponse__Output>): grpc.ClientUnaryCall;
  emailExists(argument: _FL_v1_EmailExistsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_EmailExistsResponse__Output>): grpc.ClientUnaryCall;
  emailExists(argument: _FL_v1_EmailExistsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_FL_v1_EmailExistsResponse__Output>): grpc.ClientUnaryCall;
  emailExists(argument: _FL_v1_EmailExistsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_EmailExistsResponse__Output>): grpc.ClientUnaryCall;
  emailExists(argument: _FL_v1_EmailExistsRequest, callback: grpc.requestCallback<_FL_v1_EmailExistsResponse__Output>): grpc.ClientUnaryCall;
  
  Login(argument: _FL_v1_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _FL_v1_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_FL_v1_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _FL_v1_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _FL_v1_LoginRequest, callback: grpc.requestCallback<_FL_v1_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _FL_v1_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _FL_v1_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_FL_v1_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _FL_v1_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _FL_v1_LoginRequest, callback: grpc.requestCallback<_FL_v1_LoginResponse__Output>): grpc.ClientUnaryCall;
  
  Logout(argument: _FL_v1_LogoutRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_LogoutResponse__Output>): grpc.ClientUnaryCall;
  Logout(argument: _FL_v1_LogoutRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_FL_v1_LogoutResponse__Output>): grpc.ClientUnaryCall;
  Logout(argument: _FL_v1_LogoutRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_LogoutResponse__Output>): grpc.ClientUnaryCall;
  Logout(argument: _FL_v1_LogoutRequest, callback: grpc.requestCallback<_FL_v1_LogoutResponse__Output>): grpc.ClientUnaryCall;
  logout(argument: _FL_v1_LogoutRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_LogoutResponse__Output>): grpc.ClientUnaryCall;
  logout(argument: _FL_v1_LogoutRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_FL_v1_LogoutResponse__Output>): grpc.ClientUnaryCall;
  logout(argument: _FL_v1_LogoutRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_LogoutResponse__Output>): grpc.ClientUnaryCall;
  logout(argument: _FL_v1_LogoutRequest, callback: grpc.requestCallback<_FL_v1_LogoutResponse__Output>): grpc.ClientUnaryCall;
  
  Me(argument: _FL_v1_MeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_MeResponse__Output>): grpc.ClientUnaryCall;
  Me(argument: _FL_v1_MeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_FL_v1_MeResponse__Output>): grpc.ClientUnaryCall;
  Me(argument: _FL_v1_MeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_MeResponse__Output>): grpc.ClientUnaryCall;
  Me(argument: _FL_v1_MeRequest, callback: grpc.requestCallback<_FL_v1_MeResponse__Output>): grpc.ClientUnaryCall;
  me(argument: _FL_v1_MeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_MeResponse__Output>): grpc.ClientUnaryCall;
  me(argument: _FL_v1_MeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_FL_v1_MeResponse__Output>): grpc.ClientUnaryCall;
  me(argument: _FL_v1_MeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_MeResponse__Output>): grpc.ClientUnaryCall;
  me(argument: _FL_v1_MeRequest, callback: grpc.requestCallback<_FL_v1_MeResponse__Output>): grpc.ClientUnaryCall;
  
  Refresh(argument: _FL_v1_RefreshRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_RefreshResponse__Output>): grpc.ClientUnaryCall;
  Refresh(argument: _FL_v1_RefreshRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_FL_v1_RefreshResponse__Output>): grpc.ClientUnaryCall;
  Refresh(argument: _FL_v1_RefreshRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_RefreshResponse__Output>): grpc.ClientUnaryCall;
  Refresh(argument: _FL_v1_RefreshRequest, callback: grpc.requestCallback<_FL_v1_RefreshResponse__Output>): grpc.ClientUnaryCall;
  refresh(argument: _FL_v1_RefreshRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_RefreshResponse__Output>): grpc.ClientUnaryCall;
  refresh(argument: _FL_v1_RefreshRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_FL_v1_RefreshResponse__Output>): grpc.ClientUnaryCall;
  refresh(argument: _FL_v1_RefreshRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_RefreshResponse__Output>): grpc.ClientUnaryCall;
  refresh(argument: _FL_v1_RefreshRequest, callback: grpc.requestCallback<_FL_v1_RefreshResponse__Output>): grpc.ClientUnaryCall;
  
  Register(argument: _FL_v1_RegisterRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_RegisterResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _FL_v1_RegisterRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_FL_v1_RegisterResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _FL_v1_RegisterRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_RegisterResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _FL_v1_RegisterRequest, callback: grpc.requestCallback<_FL_v1_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _FL_v1_RegisterRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _FL_v1_RegisterRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_FL_v1_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _FL_v1_RegisterRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_FL_v1_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _FL_v1_RegisterRequest, callback: grpc.requestCallback<_FL_v1_RegisterResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthHandlers extends grpc.UntypedServiceImplementation {
  EmailExists: grpc.handleUnaryCall<_FL_v1_EmailExistsRequest__Output, _FL_v1_EmailExistsResponse>;
  
  Login: grpc.handleUnaryCall<_FL_v1_LoginRequest__Output, _FL_v1_LoginResponse>;
  
  Logout: grpc.handleUnaryCall<_FL_v1_LogoutRequest__Output, _FL_v1_LogoutResponse>;
  
  Me: grpc.handleUnaryCall<_FL_v1_MeRequest__Output, _FL_v1_MeResponse>;
  
  Refresh: grpc.handleUnaryCall<_FL_v1_RefreshRequest__Output, _FL_v1_RefreshResponse>;
  
  Register: grpc.handleUnaryCall<_FL_v1_RegisterRequest__Output, _FL_v1_RegisterResponse>;
  
}

export interface AuthDefinition extends grpc.ServiceDefinition {
  EmailExists: MethodDefinition<_FL_v1_EmailExistsRequest, _FL_v1_EmailExistsResponse, _FL_v1_EmailExistsRequest__Output, _FL_v1_EmailExistsResponse__Output>
  Login: MethodDefinition<_FL_v1_LoginRequest, _FL_v1_LoginResponse, _FL_v1_LoginRequest__Output, _FL_v1_LoginResponse__Output>
  Logout: MethodDefinition<_FL_v1_LogoutRequest, _FL_v1_LogoutResponse, _FL_v1_LogoutRequest__Output, _FL_v1_LogoutResponse__Output>
  Me: MethodDefinition<_FL_v1_MeRequest, _FL_v1_MeResponse, _FL_v1_MeRequest__Output, _FL_v1_MeResponse__Output>
  Refresh: MethodDefinition<_FL_v1_RefreshRequest, _FL_v1_RefreshResponse, _FL_v1_RefreshRequest__Output, _FL_v1_RefreshResponse__Output>
  Register: MethodDefinition<_FL_v1_RegisterRequest, _FL_v1_RegisterResponse, _FL_v1_RegisterRequest__Output, _FL_v1_RegisterResponse__Output>
}
