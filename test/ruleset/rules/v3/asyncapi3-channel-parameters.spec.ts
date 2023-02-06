import { testRule, DiagnosticSeverity } from '../../tester';

testRule('asyncapi3-channel-parameters', [
  {
    name: 'valid case',
    document: {
      asyncapi: '3.0.0',
      channels: {
        signedUp: {
          address: 'users/{userId}/signedUp',
          parameters: {
            userId: {},
          },
        },
      },
    },
    errors: [],
  },

  {
    name: 'channel has not defined definition for one of the parameters',
    document: {
      asyncapi: '3.0.0',
      channels: {
        signedUp: {
          address: 'users/{userId}/{anotherParam}/signedUp',
          parameters: {
            userId: {},
          },
        },
      },
    },
    errors: [
      {
        message: 'Not all channel\'s parameters are described with "parameters" object. Missed: anotherParam.',
        path: ['channels', 'signedUp', 'parameters'],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },

  {
    name: 'channel has not defined definition for two+ of the parameters',
    document: {
      asyncapi: '3.0.0',
      channels: {
        signedUp: {
          address: 'users/{userId}/{anotherParam1}/{anotherParam2}/signedUp',
          parameters: {
            userId: {},
          },
        },
      },
    },
    errors: [
      {
        message:
          'Not all channel\'s parameters are described with "parameters" object. Missed: anotherParam1, anotherParam2.',
        path: ['channels', 'signedUp', 'parameters'],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },

  {
    name: 'channel has redundant paramaters',
    document: {
      asyncapi: '3.0.0',
      channels: {
        signedUp: {
          address: 'users/{userId}/signedUp',
          parameters: {
            userId: {},
            anotherParam1: {},
            anotherParam2: {},
          },
        },
      },
    },
    errors: [
      {
        message: 'Channel\'s "parameters" object has redundant defined "anotherParam1" parameter.',
        path: ['channels', 'signedUp', 'parameters', 'anotherParam1'],
        severity: DiagnosticSeverity.Error,
      },
      {
        message: 'Channel\'s "parameters" object has redundant defined "anotherParam2" parameter.',
        path: ['channels', 'signedUp', 'parameters', 'anotherParam2'],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },

  {
    name: 'channel has not defined definition for two+ of the parameters (in components)',
    document: {
      asyncapi: '3.0.0',
      components: {
        channels: {
          signedUp: {
            address: 'users/{userId}/{anotherParam1}/{anotherParam2}/signedUp',
            parameters: {
              userId: {},
            },
          },
        }
      }
    },
    errors: [
      {
        message:
          'Not all channel\'s parameters are described with "parameters" object. Missed: anotherParam1, anotherParam2.',
        path: ['components', 'channels', 'signedUp', 'parameters'],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },
]);
