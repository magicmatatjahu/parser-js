import { testRule, DiagnosticSeverity } from '../../tester';

testRule('asyncapi3-server-host-no-trailing-slash', [
  {
    name: 'valid',
    document: {
      asyncapi: '2.0.0',
      servers: {
        production: {
          host: 'asyncapi.io',
          protocol: 'https',
        },
      },
    },
    errors: [],
  },

  {
    name: '{server}.host property ends with a trailing slash',
    document: {
      asyncapi: '3.0.0',
      servers: {
        production: {
          host: 'asyncapi.io/',
          protocol: 'https',
        },
      },
    },
    errors: [
      {
        message: 'Server HOST should not end with slash.',
        path: ['servers', 'production', 'host'],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
]);