import { createRulesetFunction } from '@stoplight/spectral-core';
import { isObject } from '../../../utils';

import type { IFunctionResult } from '@stoplight/spectral-core';
import type { v3 } from 'spec-types';

const oAuth2Keys = ['implicit', 'password', 'clientCredentials', 'authorizationCode'] as const;
function getAllScopes(oauth2: v3.OAuthFlowsObject): string[] {
  const scopes: string[] = [];
  oAuth2Keys.forEach(key => {
    const flow = oauth2[key] as v3.OAuthFlowObjectBase;
    if (isObject(flow)) {
      scopes.push(...Object.keys(flow.availableScopes));
    }
  });
  return Array.from(new Set(scopes));
}

export const security = createRulesetFunction<Array<v3.SecuritySchemeObject>, null>(
  {
    input: {
      type: 'array',
    },
    options: null,
  },
  (targetVal = [], _, ctx) => {
    const results: IFunctionResult[] = [];

    targetVal.forEach((securityScheme, index) => {
      if (securityScheme?.type === 'oauth2') {
        const availableScopes = getAllScopes(securityScheme.flows ?? {});
        (securityScheme.scopes || []).forEach((scope, scopeIndex) => {
          if (!availableScopes.includes(scope)) {
            results.push({
              message: `Non-existing security scope for the specified security scheme. Available: [${availableScopes.join(
                ', ',
              )}]`,
              path: [...ctx.path, index, 'scopes', scopeIndex],
            });
          }
        });
      }
    });

    return results;
  },
);
