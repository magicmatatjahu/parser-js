import { createRulesetFunction } from '@stoplight/spectral-core';

import { getMissingProps, getRedundantProps, parseUrlVariables } from '../../utils';

import type { IFunctionResult } from '@stoplight/spectral-core';
import type { v3 } from '../../../spec-types';

export const channelParameters = createRulesetFunction<v3.ChannelObject, null>(
  {
    input: {
      type: 'object',
      properties: {
        parameters: {
          type: 'object',
        },
      },
      required: ['parameters'],
    },
    options: null,
  },
  (targetVal, _, ctx) => {
    const results: IFunctionResult[] = [];

    const address = targetVal.address;
    if (!address) {
      return;
    }
    const parameters = parseUrlVariables(address);
    if (parameters.length === 0) {
      return;
    }

    const missingParameters = getMissingProps(parameters, targetVal.parameters);
    if (missingParameters.length) {
      results.push({
        message: `Not all channel's parameters are described with "parameters" object. Missed: ${missingParameters.join(
          ', ',
        )}.`,
        path: [...ctx.path, 'parameters'],
      });
    }

    const redundantParameters = getRedundantProps(parameters, targetVal.parameters);
    if (redundantParameters.length) {
      redundantParameters.forEach(param => {
        results.push({
          message: `Channel's "parameters" object has redundant defined "${param}" parameter.`,
          path: [...ctx.path, 'parameters', param],
        });
      });
    }

    return results;
  },
);