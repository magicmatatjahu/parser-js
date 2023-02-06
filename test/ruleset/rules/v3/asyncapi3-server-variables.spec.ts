import { testRule, DiagnosticSeverity } from '../../tester';

testRule('asyncapi3-server-variables', [
  {
    name: 'valid case',
    document: {
      asyncapi: '3.0.0',
      servers: {
        production: {
          host: '{sub}.asyncapi.io',
          protocol: 'https',
          variables: {
            sub: {},
          },
        },
      },
    },
    errors: [],
  },

  {
    name: 'server has not defined definition for one of the host variables (host case)',
    document: {
      asyncapi: '3.0.0',
      servers: {
        production: {
          host: '{sub}.{anotherParam}.asyncapi.io',
          protocol: 'https',
          variables: {
            sub: {},
          },
        },
      },
    },
    errors: [
      {
        message: 'Not all server\'s variables are described with "variables" object. Missed: anotherParam.',
        path: ['servers', 'production', 'variables'],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },

  {
    name: 'server has not defined definition for one of the host variables (pathname case)',
    document: {
      asyncapi: '3.0.0',
      servers: {
        production: {
          host: 'asyncapi.io',
          pathname: '/{sub}.{anotherParam}',
          protocol: 'https',
          variables: {
            sub: {},
          },
        },
      },
    },
    errors: [
      {
        message: 'Not all server\'s variables are described with "variables" object. Missed: anotherParam.',
        path: ['servers', 'production', 'variables'],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },

  {
    name: 'server has not defined definition for two of the host variables',
    document: {
      asyncapi: '3.0.0',
      servers: {
        production: {
          host: '{sub}.{anotherParam1}.{anotherParam2}.asyncapi.io',
          protocol: 'https',
          variables: {
            sub: {},
          },
        },
      },
    },
    errors: [
      {
        message:
          'Not all server\'s variables are described with "variables" object. Missed: anotherParam1, anotherParam2.',
        path: ['servers', 'production', 'variables'],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },

  {
    name: 'server has not defined definition for one of the host variables (in the components.servers)',
    document: {
      asyncapi: '3.0.0',
      components: {
        servers: {
          production: {
            host: '{sub}.{anotherParam}.asyncapi.io',
            protocol: 'https',
            variables: {
              sub: {},
            },
          },
        },
      },
    },
    errors: [
      {
        message: 'Not all server\'s variables are described with "variables" object. Missed: anotherParam.',
        path: ['components', 'servers', 'production', 'variables'],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },

  {
    name: 'server has redundant variables (host case)',
    document: {
      asyncapi: '3.0.0',
      servers: {
        production: {
          host: '{sub}.asyncapi.io',
          protocol: 'https',
          variables: {
            sub: {},
            anotherParam1: {},
            anotherParam2: {},
          },
        },
      },
    },
    errors: [
      {
        message: 'Server\'s "variables" object has redundant defined "anotherParam1" host/pathname variable.',
        path: ['servers', 'production', 'variables', 'anotherParam1'],
        severity: DiagnosticSeverity.Error,
      },
      {
        message: 'Server\'s "variables" object has redundant defined "anotherParam2" host/pathname variable.',
        path: ['servers', 'production', 'variables', 'anotherParam2'],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },

  {
    name: 'server has redundant variables (pathname case)',
    document: {
      asyncapi: '3.0.0',
      servers: {
        production: {
          host: 'asyncapi.io',
          pathname: '/{sub}',
          protocol: 'https',
          variables: {
            sub: {},
            anotherParam1: {},
            anotherParam2: {},
          },
        },
      },
    },
    errors: [
      {
        message: 'Server\'s "variables" object has redundant defined "anotherParam1" host/pathname variable.',
        path: ['servers', 'production', 'variables', 'anotherParam1'],
        severity: DiagnosticSeverity.Error,
      },
      {
        message: 'Server\'s "variables" object has redundant defined "anotherParam2" host/pathname variable.',
        path: ['servers', 'production', 'variables', 'anotherParam2'],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },

  {
    name: 'server has redundant host variables (in the components.servers)',
    document: {
      asyncapi: '3.0.0',
      components: {
        servers: {
          production: {
            host: '{sub}.asyncapi.io',
            protocol: 'https',
            variables: {
              sub: {},
              anotherParam1: {},
              anotherParam2: {},
            },
          },
        },
      },
    },
    errors: [
      {
        message: 'Server\'s "variables" object has redundant defined "anotherParam1" host/pathname variable.',
        path: ['components', 'servers', 'production', 'variables', 'anotherParam1'],
        severity: DiagnosticSeverity.Error,
      },
      {
        message: 'Server\'s "variables" object has redundant defined "anotherParam2" host/pathname variable.',
        path: ['components', 'servers', 'production', 'variables', 'anotherParam2'],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },
]);