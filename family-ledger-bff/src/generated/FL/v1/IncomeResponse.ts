// Original file: proto/group.proto

import type { Long } from '@grpc/proto-loader';

export interface IncomeResponse {
  'income'?: (number | string | Long);
}

export interface IncomeResponse__Output {
  'income': (string);
}
