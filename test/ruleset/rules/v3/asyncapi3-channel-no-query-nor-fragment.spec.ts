import { testRule, DiagnosticSeverity } from '../../tester';

testRule('asyncapi3-channel-no-query-nor-fragment', [
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
    name: 'channels.{channel} contains a query delimiter',
    document: {
      asyncapi: '3.0.0',
      channels: {
        signedUp: {
          address: 'users/{userId}/signedUp',
        },
        signedOut: {
          address: 'users/{userId}/signedOut?byMistake={didFatFingerTheSignOutButton}'
        },
      },
    },
    errors: [
      {
        message: 'Channel address should not include query ("?") or fragment ("#") delimiter.',
        path: ['channels', 'signedOut', 'address'],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },

  {
    name: 'channels.{channel} contains a fragment delimiter',
    document: {
      asyncapi: '3.0.0',
      channels: {
        signedUp: {
          address: 'users/{userId}/signedUp',
        },
        signedOut: {
          address: 'users/{userId}/signedOut#onPurpose',
        },
      },
    },
    errors: [
      {
        message: 'Channel address should not include query ("?") or fragment ("#") delimiter.',
        path: ['channels', 'signedOut', 'address'],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },

  {
    name: 'channels.{channel} contains a query delimiter (in components)',
    document: {
      asyncapi: '3.0.0',
      components: {
        channels: {
          signedUp: {
            address: 'users/{userId}/signedUp',
          },
          signedOut: {
            address: 'users/{userId}/signedOut?byMistake={didFatFingerTheSignOutButton}'
          },
        },
      },
    },
    errors: [
      {
        message: 'Channel address should not include query ("?") or fragment ("#") delimiter.',
        path: ['components', 'channels', 'signedOut', 'address'],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },

  {
    name: 'channels.{channel} contains a fragment delimiter (in components)',
    document: {
      asyncapi: '3.0.0',
      components: {
        channels: {
          signedUp: {
            address: 'users/{userId}/signedUp',
          },
          signedOut: {
            address: 'users/{userId}/signedOut#onPurpose',
          },
        },
      },
    },
    errors: [
      {
        message: 'Channel address should not include query ("?") or fragment ("#") delimiter.',
        path: ['components', 'channels', 'signedOut', 'address'],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
]);