import { testRule, DiagnosticSeverity } from '../../tester';

testRule('asyncapi3-tags', [
  {
    name: 'valid case',
    document: {
      asyncapi: '3.0.0',
      info: {
        tags: [{ name: 'one' }, { name: 'another' }],
      }
    },
    errors: [],
  },

  {
    name: 'tags property is missing',
    document: {
      asyncapi: '3.0.0',
      info: {}
    },
    errors: [
      {
        message: 'Info object should have non-empty "tags" array.',
        path: ['info'],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
]);