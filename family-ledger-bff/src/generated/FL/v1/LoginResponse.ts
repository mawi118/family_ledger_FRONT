// Original file: proto/auth.proto

import type { User as _FL_v1_User, User__Output as _FL_v1_User__Output } from '../../FL/v1/User';

export interface LoginResponse {
  'access_token'?: (string);
  'user'?: (_FL_v1_User | null);
  'refresh_token'?: (string);
}

export interface LoginResponse__Output {
  'access_token': (string);
  'user': (_FL_v1_User__Output | null);
  'refresh_token': (string);
}
