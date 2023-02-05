import { createRulesetFunction } from '@stoplight/spectral-core';

import type { IFunctionResult } from '@stoplight/spectral-core';
import type { v3 } from '../../../spec-types';

export const channelServers = createRulesetFunction<v3.AsyncAPIObject, null>(
  {
    input: {
      type: 'object',
      properties: {
        servers: {
          type: 'object',
        },
        channels: {
          type: 'object',
          additionalProperties: {
            type: 'object',
            properties: {
              servers: {
                type: 'array',
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
    if (!targetVal.channels) {
      return results;
    }

    const servers = Object.values(targetVal.servers ?? {});
    Object.entries(targetVal.channels ?? {}).forEach(([channelId, channel]) => {
      const _channel = channel as v3.ChannelObject;
      if (!_channel.servers) {
        return;
      }

      _channel.servers.forEach((server, index) => {
        if (!servers.includes(server)) {
          results.push({
            message: 'Channel contains server that are not defined on the "servers" object.',
            path: ['channels', channelId, 'servers', index],
          });
        }
      });
    });

    return results;
  },
);
