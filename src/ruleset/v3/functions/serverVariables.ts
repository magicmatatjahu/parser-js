import { createRulesetFunction } from '@stoplight/spectral-core';

import { getMissingProps, getRedundantProps, parseUrlVariables } from '../../utils';

import type { IFunctionResult } from '@stoplight/spectral-core';
import type { v3 } from '../../../spec-types';

export const serverVariables = createRulesetFunction<v3.ServerObject, null>(
  {
    input: {
      type: 'object',
      properties: {
        host: {
          type: 'string',
        },
        pathname: {
          type: 'string',
        },
        variables: {
          type: 'object',
        },
      },
      required: ['host', 'variables'],
    },
    options: null,
  },
  (targetVal, _, ctx) => {
    const results: IFunctionResult[] = [];

    const hostVariables = parseUrlVariables(targetVal.host);
    const pathnameVariables = parseUrlVariables(targetVal.pathname);
    const variables = Array.from(new Set([...hostVariables, ...pathnameVariables]));
    if (variables.length === 0) {
      return results;
    }

    const missingVariables = getMissingProps(variables, targetVal.variables);
    if (missingVariables.length) {
      results.push({
        message: `Not all server's variables are described with "variables" object. Missed: ${missingVariables.join(
          ', ',
        )}.`,
        path: [...ctx.path, 'variables'],
      });
    }

    const redundantVariables = getRedundantProps(variables, targetVal.variables);
    if (redundantVariables.length) {
      redundantVariables.forEach(variable => {
        results.push({
          message: `Server's "variables" object has redundant defined "${variable}" host/pathname variable.`,
          path: [...ctx.path, 'variables', variable],
        });
      });
    }

    return results;
  },
);