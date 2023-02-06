import { testRule, DiagnosticSeverity } from '../../tester';

testRule('asyncapi3-server-security', [
  {
    name: 'valid case',
    document: {
      asyncapi: '3.0.0',
      servers: {
        production: {
          security: [
            {
              type: 'apiKey',
            },
          ],
        },
      },
    },
    errors: [],
  },

  {
    name: 'valid case (without security field)',
    document: {
      asyncapi: '3.0.0',
      servers: {
        production: {},
      },
    },
    errors: [],
  },

  {
    name: 'valid case (oauth2)',
    document: {
      asyncapi: '3.0.0',
      servers: {
        production: {
          security: [
            {
              $ref: '#/components/securitySchemes/petstore_auth'
            },
          ],
        },
      },
      components: {
        securitySchemes: {
          petstore_auth: {
            type: 'oauth2',
            flows: {
              implicit: {
                availableScopes: {
                  'write:pets': '...',
                  'read:pets': '...',
                },
              },
            },
          },
        },
      },
    },
    errors: [],
  },

  {
    name: 'invalid case (oauth2)',
    document: {
      asyncapi: '3.0.0',
      servers: {
        production: {
          security: [
            {
              $ref: '#/components/securitySchemes/petstore_auth'
            },
          ],
        },
      },
      components: {
        securitySchemes: {
          petstore_auth: {
            type: 'oauth2',
            flows: {
              implicit: {
                availableScopes: {
                  'write:pets': '...',
                  'read:pets': '...',
                },
              },
            },
            scopes: ['write:pets', 'not:defined'],
          },
        },
      },
    },
    errors: [
      {
        message: 'Non-existing security scope for the specified security scheme. Available: [write:pets, read:pets]',
        path: ['servers', 'production', 'security', '0', 'scopes', '1'],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },

  {
    name: 'invalid case (oauth2) - multiple flows and not defined scopes',
    document: {
      asyncapi: '3.0.0',
      servers: {
        production: {
          security: [
            {
              $ref: '#/components/securitySchemes/petstore_auth'
            },
          ],
        },
      },
      components: {
        securitySchemes: {
          petstore_auth: {
            type: 'oauth2',
            flows: {
              implicit: {
                availableScopes: {
                  'write:pets': '...',
                  'read:pets': '...',
                },
              },
              password: {
                availableScopes: {
                  'write:dogs': '...',
                  'read:dogs': '...',
                },
              },
              clientCredentials: {
                availableScopes: {
                  'write:cats': '...',
                  'read:cats': '...',
                },
              },
            },
            scopes: ['write:pets', 'not:defined1', 'not:defined2'],
          },
        },
      },
    },
    errors: [
      {
        message:
          'Non-existing security scope for the specified security scheme. Available: [write:pets, read:pets, write:dogs, read:dogs, write:cats, read:cats]',
        path: ['servers', 'production', 'security', '0', 'scopes', '1'],
        severity: DiagnosticSeverity.Error,
      },
      {
        message:
          'Non-existing security scope for the specified security scheme. Available: [write:pets, read:pets, write:dogs, read:dogs, write:cats, read:cats]',
        path: ['servers', 'production', 'security', '0', 'scopes', '2'],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },

  {
    name: 'invalid case (oauth2) - not valid flow',
    document: {
      asyncapi: '3.0.0',
      servers: {
        production: {
          security: [
            {
              $ref: '#/components/securitySchemes/petstore_auth'
            },
          ],
        },
      },
      components: {
        securitySchemes: {
          petstore_auth: {
            type: 'oauth2',
            flows: {
              implicit: {
                availableScopes: {
                  'write:pets': '...',
                  'read:pets': '...',
                },
              },
              notDefinedFlow: {
                availableScopes: {
                  'write:dogs': '...',
                  'read:dogs': '...',
                },
              },
            },
            scopes: ['write:pets', 'not:defined'],
          },
        },
      },
    },
    errors: [
      {
        message: 'Non-existing security scope for the specified security scheme. Available: [write:pets, read:pets]',
        path: ['servers', 'production', 'security', '0', 'scopes', '1'],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },

  {
    name: 'invalid case (multiple securities)',
    document: {
      asyncapi: '3.0.0',
      servers: {
        production: {
          security: [
            {
              type: 'apiKey'
            },
            {
              $ref: '#/components/securitySchemes/petstore_auth'
            },
          ],
        },
      },
      components: {
        securitySchemes: {
          petstore_auth: {
            type: 'oauth2',
            flows: {
              implicit: {
                availableScopes: {
                  'write:pets': '...',
                  'read:pets': '...',
                },
              },
              notDefinedFlow: {
                availableScopes: {
                  'write:dogs': '...',
                  'read:dogs': '...',
                },
              },
            },
            scopes: ['write:pets', 'not:defined'],
          },
        },
      },
    },
    errors: [
      {
        message: 'Non-existing security scope for the specified security scheme. Available: [write:pets, read:pets]',
        path: ['servers', 'production', 'security', '1', 'scopes', '1'],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },
]);
