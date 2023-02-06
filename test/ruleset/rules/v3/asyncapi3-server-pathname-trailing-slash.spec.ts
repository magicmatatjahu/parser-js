import { testRule, DiagnosticSeverity } from '../../tester';

testRule('asyncapi3-server-pathname-trailing-slash', [
  {
    name: 'valid',
    document: {
      asyncapi: '2.0.0',
      servers: {
        production: {
          pathname: '/some/path',
          protocol: 'https',
        },
      },
    },
    errors: [],
  },

  {
    name: '{server}.pathname property not starts with a trailing slash',
    document: {
      asyncapi: '3.0.0',
      servers: {
        production: {
          pathname: 'some/path',
          protocol: 'https',
        },
      },
    },
    errors: [
      {
        message: 'Server PATHNAME should start with slash.',
        path: ['servers', 'production', 'pathname'],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
]);