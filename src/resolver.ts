import { Resolver } from '@stoplight/json-ref-resolver';

import type { Agent } from 'http';

export interface IHttpAndFileResolverOptions {
  agent?: Agent;
}

// // resolves files, http and https $refs, and internal $refs
// export function createHttpAndFileResolver(opts?: IHttpAndFileResolverOptions): Resolver {
//   const resolveHttp = createResolveHttp({ ...DEFAULT_REQUEST_OPTIONS, ...opts });

//   return new Resolver({
//     resolvers: {
//       https: { resolve: resolveHttp },
//       http: { resolve: resolveHttp },
//       file: { resolve: resolveFile },
//     },
//   });
// }