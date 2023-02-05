import { createRulesetFunction } from '@stoplight/spectral-core';

import type { IFunctionResult } from '@stoplight/spectral-core';
import type { v3 } from '../../../spec-types';

export const operationChannel = createRulesetFunction<v3.AsyncAPIObject, null>(
  {
    input: {
      type: 'object',
      properties: {
        channels: {
          type: 'object',
        },
        operations: {
          type: 'object',
          additionalProperties: {
            type: 'object',
            properties: {
              channel: {
                type: 'object',
              },
            },
          },
        },
      },
    },
    options: null,
  },
  (targetVal) => {
    const results: IFunctionResult[] = [];
    if (!targetVal.operations) {
      return results;
    }
    
    const channels = Object.values(targetVal.channels ?? {});
    Object.entries(targetVal.operations ?? {}).forEach(([operationId, operation]) => {
      if (!channels.includes((operation as v3.OperationObject).channel as v3.ChannelObject)) {
        results.push({
          message: 'Operation points to the channel that is not defined on the "channels" object.',
          path: ['operations', operationId, 'channel'],
        });
      }
    });

    return results;
  },
);
