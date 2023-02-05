import { isObject } from '../../../utils';

import type { JsonPath } from '@stoplight/types';
import type { v3 } from '../../../spec-types';

export type GetAllMessageResult = { path: JsonPath; message: v3.MessageObject };

export function* getAllMessages(asyncapi: v3.AsyncAPIObject): IterableIterator<GetAllMessageResult> {
  for (const [channelId, channel] of Object.entries(asyncapi.channels || {})) {
    if (!isObject(channel)) {
      continue;
    }

    const maybeMessages = (channel as v3.ChannelObject).messages;
    if (!isObject(maybeMessages)) {
      continue;
    }

    for (const [id, message] of Object.entries(maybeMessages)) {
      if (isObject(message)) {
        yield {
          path: ['channels', channelId, 'messages', id],
          message: message as v3.MessageObject,
        };
      }
    }
  }

  for (const [operationId, operation] of Object.entries(asyncapi.operations || {})) {
    if (!isObject(operation)) {
      continue;
    }

    const maybeMessages = (operation as v3.OperationObject).messages;
    if (!isObject(maybeMessages)) {
      continue;
    }

    for (const [index, message] of maybeMessages.entries()) {
      if (isObject(message)) {
        yield {
          path: ['operations', operationId, 'messages', index],
          message: message as v3.MessageObject,
        };
      }
    }
  }
}
