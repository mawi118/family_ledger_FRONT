// Original file: proto/group.proto

import type { Long } from '@grpc/proto-loader';

export interface SetMyIncomeRequest {
  'group_id'?: (string);
  'income'?: (number | string | Long);
}

export interface SetMyIncomeRequest__Output {
  'group_id': (string);
  'income': (string);
}
