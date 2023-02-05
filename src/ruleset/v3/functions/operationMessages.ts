import { createRulesetFunction } from '@stoplight/spectral-core';

import type { IFunctionResult } from '@stoplight/spectral-core';
import type { v3 } from '../../../spec-types';

export const operationMessages = createRulesetFunction<v3.AsyncAPIObject, null>(
  {
    input: {
      type: 'object',
      properties: {
        operations: {
          type: 'object',
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

    Object.entries(targetVal.operations ?? {}).forEach(([operationId, operation]) => {
      const _operation = operation as v3.OperationObject;
      if (!Array.isArray(_operation.messages)) {
        return;
      }

      const channelMessages = Object.values((_operation.channel as v3.ChannelObject).messages ?? {});
      _operation.messages.forEach((message, index) => {
        if (!channelMessages.includes(message as v3.MessageObject)) {
          results.push({
            message: 'Operation uses message that is not defined on the corresponding channel object.',
            path: ['operations', operationId, 'messages', index],
          });
        }
      });
    });

    return results;
  },
);
