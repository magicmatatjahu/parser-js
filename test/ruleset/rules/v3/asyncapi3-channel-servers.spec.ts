import { testRule, DiagnosticSeverity } from '../../tester';

testRule('asyncapi3-channel-servers', [
  {
    name: 'valid case',
    document: {
      asyncapi: '3.0.0',
      servers: {
        development: {},
        production: {},
      },
      channels: {
        channel: {
          servers: [
            {
              $ref: '#/servers/development'
            }
          ],
        },
      },
    },
    errors: [],
  },

  {
    name: 'valid case - without defined servers',
    document: {
      asyncapi: '3.0.0',
      servers: {
        development: {},
        production: {},
      },
      channels: {
        channel: {},
      },
    },
    errors: [],
  },

  {
    name: 'valid case - without defined servers in the root',
    document: {
      asyncapi: '3.0.0',
      channels: {
        channel: {},
      },
    },
    errors: [],
  },

  {
    name: 'valid case - without defined channels in the root',
    document: {
      asyncapi: '3.0.0',
      servers: {
        development: {},
        production: {},
      },
    },
    errors: [],
  },

  {
    name: 'valid case - with empty array',
    document: {
      asyncapi: '3.0.0',
      servers: {
        development: {},
        production: {},
      },
      channels: {
        channel: {
          servers: [],
        },
      },
    },
    errors: [],
  },

  {
    name: 'invalid case',
    document: {
      asyncapi: '3.0.0',
      servers: {
        development: {},
        production: {},
      },
      channels: {
        channel: {
          servers: [
            {
              host: '...'
            }
          ],
        },
      },
    },
    errors: [
      {
        message: 'Channel contains server that are not defined on the "servers" object.',
        path: ['channels', 'channel', 'servers', '0'],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },

  {
    name: 'invalid case - one server is defined, another one not',
    document: {
      asyncapi: '3.0.0',
      servers: {
        development: {},
        production: {},
      },
      channels: {
        channel: {
          servers: [
            {
              $ref: '#/servers/development'
            },
            {
              host: '...'
            }
          ],
        },
      },
    },
    errors: [
      {
        message: 'Channel contains server that are not defined on the "servers" object.',
        path: ['channels', 'channel', 'servers', '1'],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },

  {
    name: 'invalid case - without defined servers',
    document: {
      asyncapi: '3.0.0',
      channels: {
        channel: {
          servers: [
            {
              host: '...'
            }
          ],
        },
      },
    },
    errors: [
      {
        message: 'Channel contains server that are not defined on the "servers" object.',
        path: ['channels', 'channel', 'servers', '0'],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },

  {
    name: 'unknown case - channel defined in components',
    document: {
      asyncapi: '3.0.0',
      components: {
        channels: {
          channel: {
            servers: [
              {
                host: '...'
              }
            ],
          },
        },
      }
    },
    errors: [],
  },
]);
