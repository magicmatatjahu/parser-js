import { testRule, DiagnosticSeverity } from '../../tester';

testRule('asyncapi3-channel-no-empty-parameter', [
  {
    name: 'valid case',
    document: {
      asyncapi: '3.0.0',
      channels: {
        signeUp: {
          address: 'users/{userId}/signedUp',
        }
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
    name: 'channels.{channel} contains empty parameter substitution pattern',
    document: {
      asyncapi: '3.0.0',
      channels: {
        signedUp: {
          address: 'users/{userId}/signedUp',
        },
        signedOut: {
          address: 'users/{}/signedOut',
        },
      },
    },
    errors: [
      {
        message: 'Channel address should not have empty parameter substitution pattern.',
        path: ['channels', 'signedOut', 'address'],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },

  {
    name: 'channels.{channel} contains empty parameter substitution pattern (in components)',
    document: {
      asyncapi: '3.0.0',
      components: {
        channels: {
          signedUp: {
            address: 'users/{userId}/signedUp',
          },
          signedOut: {
            address: 'users/{}/signedOut',
          },
        },
      },
    },
    errors: [
      {
        message: 'Channel address should not have empty parameter substitution pattern.',
        path: ['components', 'channels', 'signedOut', 'address'],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
]);
