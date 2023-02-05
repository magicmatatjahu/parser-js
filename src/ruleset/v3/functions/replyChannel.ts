import { createRulesetFunction } from '@stoplight/spectral-core';
import { isObject } from '../../../utils';

import type { IFunctionResult } from '@stoplight/spectral-core';
import type { v3 } from '../../../spec-types';

export const replyChannel = createRulesetFunction<v3.AsyncAPIObject, null>(
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
              reply: {
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
      const reply = (operation as v3.OperationObject).reply as v3.OperationReplyObject;
      if (!isObject(reply) || !reply.channel) {
        return;
      }

      if (!channels.includes(reply.channel)) {
        results.push({
          message: 'Operation Reply points to the channel that is not defined on the "channels" object.',
          path: ['operations', operationId, 'reply', 'channel'],
        });
      }
    });

    return results;
  },
);
