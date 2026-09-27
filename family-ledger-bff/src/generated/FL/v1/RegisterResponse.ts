// Original file: ../backend/proto/auth.proto

import type { User as _FL_v1_User, User__Output as _FL_v1_User__Output } from '../../FL/v1/User';

export interface RegisterResponse {
  'token'?: (string);
  'user'?: (_FL_v1_User | null);
}

export interface RegisterResponse__Output {
  'token': (string);
  'user': (_FL_v1_User__Output | null);
}
