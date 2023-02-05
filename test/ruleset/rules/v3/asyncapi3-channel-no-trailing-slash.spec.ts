import { testRule, DiagnosticSeverity } from '../../tester';

testRule('asyncapi3-channel-no-trailing-slash', [
  {
    name: 'valid case',
    document: {
      asyncapi: '3.0.0',
      channels: {
        signedUp: {
          address: 'users/{userId}/signedUp',
        },
      },
    },
    errors: [],
  },

  {
    name: 'valid case (without channels)',
    document: {
      asyncapi: '3.0.0',
      channels: {},
    },
    errors: [],
  },

  {
    name: 'valid case (address as null)',
    document: {
      asyncapi: '3.0.0',
      channels: {
        someChannel: {
          address: null,
        }
      },
    },
    errors: [],
  },

  {
    name: 'channels.{channel} ends with a trailing slash',
    document: {
      asyncapi: '3.0.0',
      channels: {
        signedUp: {
          address: 'users/{userId}/signedUp',
        },
        signedOut: {
          address: 'users/{userId}/signedOut/',
        },
      },
    },
    errors: [
      {
        message: 'Channel address should not end with slash.',
        path: ['channels', 'signedOut', 'address'],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },

  {
    name: 'channels.{channel} ends with a trailing slash (in components)',
    document: {
      asyncapi: '3.0.0',
      components: {
        channels: {
          signedUp: {
            address: 'users/{userId}/signedUp',
          },
          signedOut: {
            address: 'users/{userId}/signedOut/',
          },
        },
      },
    },
    errors: [
      {
        message: 'Channel address should not end with slash.',
        path: ['components', 'channels', 'signedOut', 'address'],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
]);