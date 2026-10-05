// Original file: proto/group.proto

import type { Long } from '@grpc/proto-loader';

export interface Member {
  'user_id'?: (string);
  'first_name'?: (string);
  'last_name'?: (string);
  'middle_name'?: (string);
  'joined_at'?: (string);
  'income'?: (number | string | Long);
  'role'?: (string);
}

export interface Member__Output {
  'user_id': (string);
  'first_name': (string);
  'last_name': (string);
  'middle_name': (string);
  'joined_at': (string);
  'income': (string);
  'role': (string);
}
