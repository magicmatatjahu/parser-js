import { JSONSchema7 } from "json-schema";

export type AsyncAPIVersion = '2.0.0' | '2.1.0' | '2.2.0' | '2.3.0';
export type Identifier = string;
export type DefaultContentType = string;

export interface AsyncAPIObject extends SpecificationExtensionsObject {
  asyncapi: AsyncAPIVersion;
  id?: Identifier;
  info: InfoObject;
  defaultContentType?: DefaultContentType;
  servers?: ServersObject;
  channels: ChannelsObject;
  components?: ComponentsObject;
  tags?: TagsObject;
  externalDocs?: ExternalDocumentationObject;
}

export interface InfoObject extends SpecificationExtensionsObject {
  title: string;
  version: string;
  description?: string;
  termsOfService?: string;
  contact?: ContactObject;
  licenseObject?: LicenseObject;
}

export interface ContactObject extends SpecificationExtensionsObject {
  name?: string;
  url?: string;
  email?: string;
}

export interface LicenseObject extends SpecificationExtensionsObject {
  name: string;
  url?: string;
}

export type ServersObject = Record<string, ServerObject>;

export interface ServerObject extends SpecificationExtensionsObject {
  url: string;
  protocol: string;
  protocolVersion?: string;
  description?: string;
  variables?: Record<string, ServerVariableObject>;
  security?: Array<SecurityRequirementObject>;
  bindings?: BindingsObject;
}

export interface ServerVariableObject extends SpecificationExtensionsObject {
  enum?: Array<string>;
  default?: string;
  description?: string;
  examples?: Array<string>;
}

export type SecurityRequirementObject = Record<string, Array<string>>;

export type ChannelsObject = Record<string, ChannelObject>;

export interface ChannelObject extends SpecificationExtensionsObject {
  description?: string;
  servers?: Array<string>;
  subscribe?: OperationObject;
  publish?: OperationObject;
  parameters?: ParametersObject;
  bindings?: BindingsObject;
}

export interface OperationObject extends OperationTraitObject, SpecificationExtensionsObject {
  traits?: Array<OperationTraitObject>;
  message?: MessageObject | { oneOf: Array<MessageObject> };
}

export interface OperationTraitObject extends SpecificationExtensionsObject {
  operationId?: string;
  summary?: string;
  description?: string;
  tags?: TagsObject;
  externalDocs?: ExternalDocumentationObject;
  bindings?: BindingsObject;
}

export interface ComponentsObject extends SpecificationExtensionsObject {
  schemas?: Record<string, SchemaObject>;
  servers?: Record<string, ServerObject>;
  channels?: Record<string, ChannelObject>;
  messages?: Record<string, MessageObject>;
  securitySchemes?: Record<string, SecuritySchemeObject>;
  parameters?: Record<string, ParameterObject>;
  correlationIds?: Record<string, CorrelationIDObject>;
  operationTraits?: Record<string, OperationTraitObject>;
  messageTraits?: Record<string, MessageTraitObject>;
  serverBindings?: Record<string, BindingsObject>;
  channelBindings?: Record<string, BindingsObject>;
  operationBindings?: Record<string, BindingsObject>;
  messageBindings?: Record<string, BindingsObject>;
}

export type SecuritySchemeType =
  | 'userPassword'
  | 'apiKey'
  | 'X509'
  | 'symmetricEncryption'
  | 'asymmetricEncryption'
  | 'httpApiKey'
  | 'http'
  | 'oauth2'
  | 'openIdConnect'
  | 'plain'
  | 'scramSha256'
  | 'scramSha512'
  | 'gssapi';

export interface SecuritySchemeObject extends SpecificationExtensionsObject {
  type: SecuritySchemeType;
  description?: string;
  in?: 'user' | 'password' | 'query' | 'header' | 'cookie';
  name?: string;
  scheme?: string;
  bearerFormat?: string;
  flows?: OAuthFlowsObject;
  openIdConnectUrl?: string;
}

export interface OAuthFlowsObject extends SpecificationExtensionsObject {
  implicit?: OAuthFlowObjectImplicit;
  password?: OAuthFlowObjectPassword;
  clientCredentials?: OAuthFlowObjectClientCredentials;
  authorizationCode?: OAuthFlowObjectAuthorizationCode;
}

export interface OAuthFlowObjectBase extends SpecificationExtensionsObject {
  refreshUrl?: string;
  scopes: Record<string, string>;
}

export interface OAuthFlowObjectImplicit extends OAuthFlowObjectBase {
  authorizationUrl: string;
}

export interface OAuthFlowObjectPassword extends OAuthFlowObjectBase {
  tokenUrl: string;
}

export interface OAuthFlowObjectClientCredentials extends OAuthFlowObjectBase {
  tokenUrl: string;
}

export interface OAuthFlowObjectAuthorizationCode extends OAuthFlowObjectBase {
  authorizationUrl: string;
  tokenUrl: string;
}

export type ParametersObject = Record<string, ParameterObject>;

export interface ParameterObject extends SpecificationExtensionsObject {
  description?: string;
  schema?: SchemaObject;
  location?: string;
}

export interface MessageObject extends MessageTraitObject {
  payload?: SchemaObject;
  traits?: Array<MessageTraitObject>;
}

export interface MessageTraitObject extends SpecificationExtensionsObject {
  headers?: SchemaObject;
  correlationId?: CorrelationIDObject;
  schemaFormat?: string;
  contentType?: string;
  name?: string;
  title?: string;
  summary?: string;
  description?: string;
  tags?: TagsObject;
  externalDocs?: ExternalDocumentationObject;
  bindings?: BindingsObject;
  examples?: Array<MessageExampleObject>;
}

export interface MessageExampleObject extends SpecificationExtensionsObject {
  name?: string;
  summary?: string;
  headers?: SchemaObject;
  payload?: SchemaObject;
}

export interface SchemaObject extends JSONSchema7, SpecificationExtensionsObject {
  discriminator?: string;
  externalDocs?: ExternalDocumentationObject;
  deprecated?: boolean;
}

export interface CorrelationIDObject extends SpecificationExtensionsObject {
  location: string;
  description?: string;
}

export type TagsObject = Array<TagObject>;

export interface TagObject extends SpecificationExtensionsObject {
  name: string;
  description?: string;
  externalDocs?: ExternalDocumentationObject;
}

export interface ExternalDocumentationObject extends SpecificationExtensionsObject {
  url: string;
  description?: string;
}

export interface ReferenceObject {
  '$ref': string;
}

export interface BindingsObject {
  [protocol: string]: unknown;
}

export interface SpecificationExtensionsObject {
  [extension: `x-${string}`]: unknown;
}