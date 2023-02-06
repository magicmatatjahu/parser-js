/* eslint-disable sonarjs/no-duplicate-string */

import { aas3All as aas3AllFormats } from '../formats';
import { pattern, truthy } from '@stoplight/spectral-functions';

import { channelParameters } from './functions/channelParameters';
import { channelServers } from './functions/channelServers';
import { messageIdUniqueness } from './functions/messageIdUniqueness';
import { operationChannel } from './functions/operationChannel';
import { operationMessages } from './functions/operationMessages';
import { replyChannel } from './functions/replyChannel';
import { security } from './functions/security';
import { serverVariables } from './functions/serverVariables';
import { checkId } from '../functions/checkId';
import { messageExamples } from '../functions/messageExamples';
import { schemaValidation } from '../functions/schemaValidation';
import { uniquenessTags } from '../functions/uniquenessTags';
import { asyncApi3SchemaParserRule } from '../../schema-parser/spectral-rule';

import type { Parser } from '../../parser';

export const v3CoreRuleset = {
  description: 'Core AsyncAPI 3.x.x ruleset.',
  formats: [...aas3AllFormats],
  rules: {
    /**
     * Server Object rules
     */
    'asyncapi3-server-security': {
      description: 'Server have to reference a defined security schemes.',
      message: '{{error}}',
      severity: 'error',
      recommended: true,
      given: [
        '$.servers.*.security',
        '$.components.servers.*.security',
      ],
      then: {
        function: security,
      },
    },
    'asyncapi3-server-variables': {
      description: 'Server variables must be defined and there must be no redundant variables.',
      message: '{{error}}',
      severity: 'error',
      recommended: true,
      given: ['$.servers.*', '$.components.servers.*'],
      then: {
        function: serverVariables,
      },
    },

    /**
     * Channel Object rules
     */
    'asyncapi3-channel-parameters': {
      description: 'Channel parameters must be defined and there must be no redundant parameters.',
      message: '{{error}}',
      severity: 'error',
      recommended: true,
      given: [
        '$.channels.*',
        '$.components.channels.*',
      ],
      then: {
        function: channelParameters,
      },
    },
    'asyncapi3-channel-servers': {
      description: 'Channel servers must be defined in the "servers" object.',
      message: '{{error}}',
      severity: 'error',
      recommended: true,
      given: '$',
      then: {
        function: channelServers,
      },
    },

    /**
     * Operation Object rules
     */
    'asyncapi3-operation-channel': {
      description: 'Operation have to reference a defined channel.',
      severity: 'error',
      recommended: true,
      given: '$',
      then: {
        function: operationChannel,
      },
    },
    'asyncapi3-operation-messages': {
      description: 'Operation have to reference a defined messages in a corresponding channel.',
      severity: 'error',
      recommended: true,
      given: '$',
      then: {
        function: operationMessages,
      },
    },
    'asyncapi3-operation-security': {
      description: 'Operation have to reference a defined security schemes.',
      message: '{{error}}',
      severity: 'error',
      recommended: true,
      given: [
        '$.operations.*.security',
        '$.components.operations.*.security',
      ],
      then: {
        function: security,
      },
    },
    'asyncapi3-operation-reply-channel': {
      description: 'Operation Reply have to reference a defined channel.',
      message: '{{error}}',
      severity: 'error',
      recommended: true,
      given: '$',
      then: {
        function: replyChannel,
      },
    },

    /**
     * Message Object rules
     */
    'asyncapi3-message-examples': {
      description: 'Examples of message object should follow by "payload" and "headers" schemas.',
      message: '{{error}}',
      severity: 'error',
      recommended: true,
      given: [
        // messages
        '$.channels.*.messages.*',
        '$.operations.*.messages.*',
        '$.components.channels.*.messages.*',
        '$.components.operations.*.messages.*',
        '$.components.messages.*',
        // message traits
        '$.channels.*.messages.*.traits.*',
        '$.operations.*.messages.*.traits.*',
        '$.components.channels.*.messages.*.traits.*',
        '$.components.operations.*.messages.*.traits.*',
        '$.components.messages.*.traits.*',
        '$.components.messageTraits.*',
      ],
      then: {
        function: messageExamples,
      },
    },
    'asyncapi3-message-messageId-uniqueness': {
      description: '"messageId" must be unique across all the messages.',
      severity: 'error',
      recommended: true,
      given: '$',
      then: {
        function: messageIdUniqueness,
      },
    },

    /**
     * Misc rules
     */
    'asyncapi3-tags-uniqueness': {
      description: 'Each tag must have a unique name.',
      message: '{{error}}',
      severity: 'error',
      recommended: true,
      given: [
        // info
        '$.info.tags',
        // servers
        '$.servers.*.tags',
        '$.components.servers.*.tags',
        // channels
        '$.channels.*.tags',
        '$.components.channels.*.tags',
        // operations
        '$.operations.*.tags',
        '$.components.operations.*.tags',
        // operation traits
        '$.operations.*.traits.*.tags',
        '$.components.operations.*.traits.*.tags',
        '$.components.operationTraits.*.tags',
        // messages
        '$.channels.*.messages.*.tags',
        '$.components.channels.*.messages.*.tags',
        '$.operations.*.messages.*.tags',
        '$.components.operations.*.messages.*.tags',
        '$.components.messages.*.tags',
        // message traits
        '$.channels.*.messages.*.traits.*.tags',
        '$.components.channels.*.messages.*.traits.*.tags',
        '$.operations.*.messages.*.traits.*.tags',
        '$.components.operations.*.messages.*.traits.*.tags',
        '$.components.messages.*.traits.*.tags',
        '$.components.messageTraits.*.tags',
      ],
      then: {
        function: uniquenessTags,
      },
    },
  }
};

export const v3SchemasRuleset = (parser: Parser) => {
  return {
    description: 'Schemas AsyncAPI 3.x.x ruleset.',
    formats: [...aas3AllFormats],
    rules: {
      'asyncapi3-schemas': asyncApi3SchemaParserRule(parser),
      'asyncapi3-schema-default': {
        description: 'Default must be valid against its defined schema.',
        message: '{{error}}',
        severity: 'error',
        recommended: true,
        given: [
          '$.channels[*][publish,subscribe][?(@property === \'message\' && @.schemaFormat === void 0)].payload.default^',
          '$.channels.*.parameters.*.schema.default^',
          '$.components.channels[*][publish,subscribe][?(@property === \'message\' && @.schemaFormat === void 0)].payload.default^',
          '$.components.channels.*.parameters.*.schema.default^',
          '$.components.schemas.*.default^',
          '$.components.parameters.*.schema.default^',
          '$.components.messages[?(@.schemaFormat === void 0)].payload.default^',
          '$.components.messageTraits[?(@.schemaFormat === void 0)].payload.default^',
        ],
        then: {
          function: schemaValidation,
          functionOptions: {
            type: 'default',
          },
        },
      },
      'asyncapi3-schema-examples': {
        description: 'Examples must be valid against their defined schema.',
        message: '{{error}}',
        severity: 'error',
        recommended: true,
        given: [
          '$.channels[*][publish,subscribe][?(@property === \'message\' && @.schemaFormat === void 0)].payload.examples^',
          '$.channels.*.parameters.*.schema.examples^',
          '$.components.channels[*][publish,subscribe][?(@property === \'message\' && @.schemaFormat === void 0)].payload.examples^',
          '$.components.channels.*.parameters.*.schema.examples^',
          '$.components.schemas.*.examples^',
          '$.components.parameters.*.schema.examples^',
          '$.components.messages[?(@.schemaFormat === void 0)].payload.examples^',
          '$.components.messageTraits[?(@.schemaFormat === void 0)].payload.examples^',
        ],
        then: {
          function: schemaValidation,
          functionOptions: {
            type: 'examples',
          },
        },
      },
    }
  };
};

export const v3RecommendedRuleset = {
  description: 'Recommended AsyncAPI 3.x.x ruleset.',
  formats: [...aas3AllFormats],
  rules: {
    /**
     * Root Object rules
     */
    'asyncapi3-tags': {
      description: 'Info object should have non-empty "tags" array.',
      recommended: true,
      given: '$.info',
      then: {
        field: 'tags',
        function: truthy,
      },
    },

    /**
     * Server Object rules
     */
    'asyncapi3-server-no-empty-variable': {
      description: 'Server URL should not have empty variable substitution pattern.',
      recommended: true,
      given: [
        '$.servers.*.host',
        '$.servers.*.pathname',
        '$.components.servers.*.host',
        '$.components.servers.*.pathname',
      ],
      then: {
        function: pattern,
        functionOptions: {
          notMatch: '{}',
        },
      },
    },
    'asyncapi3-server-host-no-trailing-slash': {
      description: 'Server HOST should not end with slash.',
      recommended: true,
      given: [
        '$.servers.*.host',
        '$.components.servers.*.host',
      ],
      then: {
        function: pattern,
        functionOptions: {
          notMatch: '/$',
        },
      },
    },
    'asyncapi3-server-pathname-trailing-slash': {
      description: 'Server PATHNAME should start with slash.',
      recommended: true,
      given: [
        '$.servers.*.pathname',
        '$.components.servers.*.pathname',
      ],
      then: {
        function: pattern,
        functionOptions: {
          match: '^/',
        },
      },
    },

    /**
     * Channel Object rules
     */
    'asyncapi3-channel-no-empty-parameter': {
      description: 'Channel address should not have empty parameter substitution pattern.',
      recommended: true,
      given: [
        '$.channels.*.address',
        '$.components.channels.*.address',
      ],
      then: {
        function: pattern,
        functionOptions: {
          notMatch: '{}',
        },
      },
    },
    'asyncapi3-channel-no-query-nor-fragment': {
      description: 'Channel address should not include query ("?") or fragment ("#") delimiter.',
      recommended: true,
      given: [
        '$.channels.*.address',
        '$.components.channels.*.address',
      ],
      then: {
        function: pattern,
        functionOptions: {
          notMatch: '[\\?#]',
        },
      },
    },
    'asyncapi3-channel-no-trailing-slash': {
      description: 'Channel address should not end with slash.',
      recommended: true,
      given: [
        '$.channels.*.address',
        '$.components.channels.*.address',
      ],
      then: {
        function: pattern,
        functionOptions: {
          notMatch: '.+\\/$',
        },
      },
    },

    /**
     * Message Object rules
     */
    'asyncapi3-message-messageId': {
      description: 'Message should have a "messageId" field defined.',
      recommended: true,
      given: [
        '$.channels.*.messages.*',
        '$.components.channels.*.messages.*',
        '$.operations.*.messages.*',
        '$.components.operations.*.messages.*',
        '$.components.messages.*',
      ],
      then: {
        function: checkId,
        functionOptions: {
          idField: 'messageId',
        },
      },
    },
  }
};
