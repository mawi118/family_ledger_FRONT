// Original file: ../backend/proto/auth.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { EmailExistsRequest as _FL_v1_EmailExistsRequest, EmailExistsRequest__Output as _FL_v1_EmailExistsRequest__Output } from '../../FL/v1/EmailExistsRequest';
import type { EmailExistsResponse as _FL_v1_EmailExistsResponse, EmailExistsResponse__Output as _FL_v1_EmailExistsResponse__Output } from '../../FL/v1/EmailExistsResponse';
import type { LoginRequest as _FL_v1_LoginRequest, LoginRequest__Output as _FL_v1_LoginRequest__Output } from '../../FL/v1/LoginRequest';
import type { LoginResponse as _FL_v1_LoginResponse, LoginResponse__Output as _FL_v1_LoginResponse__Output } from '../../FL/v1/LoginResponse';
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
  
  Register: grpc.handleUnaryCall<_FL_v1_RegisterRequest__Output, _FL_v1_RegisterResponse>;
  
}

export interface AuthDefinition extends grpc.ServiceDefinition {
  EmailExists: MethodDefinition<_FL_v1_EmailExistsRequest, _FL_v1_EmailExistsResponse, _FL_v1_EmailExistsRequest__Output, _FL_v1_EmailExistsResponse__Output>
  Login: MethodDefinition<_FL_v1_LoginRequest, _FL_v1_LoginResponse, _FL_v1_LoginRequest__Output, _FL_v1_LoginResponse__Output>
  Register: MethodDefinition<_FL_v1_RegisterRequest, _FL_v1_RegisterResponse, _FL_v1_RegisterRequest__Output, _FL_v1_RegisterResponse__Output>
}
