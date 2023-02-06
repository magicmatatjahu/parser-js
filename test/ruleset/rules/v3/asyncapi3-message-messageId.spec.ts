import { testRule, DiagnosticSeverity } from '../../tester';

testRule('asyncapi3-message-messageId', [
  {
    name: 'valid case',
    document: {
      asyncapi: '3.0.0',
      channels: {
        someChannel: {
          messages: {
            someMessage1: {
              messageId: 'firstId',
            },
            someMessage2: {
              messageId: 'secondId',
            }
          }
        },
      },
    },
    errors: [],
  },

  {
    name: 'valid case (with traits)',
    document: {
      asyncapi: '3.0.0',
      channels: {
        someChannel: {
          messages: {
            someMessage1: {
              traits: [
                {},
                {
                  messageId: 'firstId',
                }
              ]
            },
            someMessage2: {
              messageId: 'secondId',
            }
          }
        },
      },
    },
    errors: [],
  },

  {
    name: 'invalid case',
    document: {
      asyncapi: '3.0.0',
      channels: {
        someChannel: {
          messages: {
            someMessage1: {},
            someMessage2: {}
          }
        },
      },
    },
    errors: [
      {
        message: 'Message should have a "messageId" field defined.',
        path: ['channels', 'someChannel', 'messages', 'someMessage1'],
        severity: DiagnosticSeverity.Warning,
      },
      {
        message: 'Message should have a "messageId" field defined.',
        path: ['channels', 'someChannel', 'messages', 'someMessage2'],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },

  {
    name: 'invalid case (with traits)',
    document: {
      asyncapi: '3.0.0',
      channels: {
        someChannel: {
          messages: {
            someMessage1: {
              traits: [
                {},
                {}
              ]
            },
            someMessage2: {
              messageId: 'secondId',
            }
          }
        },
      },
    },
    errors: [
      {
        message: 'Message should have a "messageId" field defined.',
        path: ['channels', 'someChannel', 'messages', 'someMessage1'],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
]);