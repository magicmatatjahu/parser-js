import { testRule, DiagnosticSeverity } from '../../tester';

testRule('asyncapi3-server-no-empty-variable', [
  {
    name: 'valid case',
    document: {
      asyncapi: '3.0.0',
      servers: {
        production: {
          host: '{sub}.stoplight.io',
          protocol: 'https',
        },
      },
    },
    errors: [],
  },

  {
    name: '{server}.host property contains empty variable substitution pattern',
    document: {
      asyncapi: '3.0.0',
      servers: {
        production: {
          host: '{}.asyncapi.io',
          protocol: 'https',
        },
      },
    },
    errors: [
      {
        message: 'Server URL should not have empty variable substitution pattern.',
        path: ['servers', 'production', 'host'],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },

  {
    name: '{server}.pathname property contains empty variable substitution pattern',
    document: {
      asyncapi: '3.0.0',
      servers: {
        production: {
          pathname: '/{}.asyncapi',
          protocol: 'https',
        },
      },
    },
    errors: [
      {
        message: 'Server URL should not have empty variable substitution pattern.',
        path: ['servers', 'production', 'pathname'],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
]);
