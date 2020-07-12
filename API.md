## Modules

<dl>
<dt><a href="#module_Parser">Parser</a></dt>
<dd></dd>
</dl>

## Classes

<dl>
<dt><a href="#ParserError">ParserError</a></dt>
<dd><p>Represents an error while trying to parse an AsyncAPI document.</p>
</dd>
<dt><a href="#AsyncAPIDocument">AsyncAPIDocument</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd></dd>
<dt><a href="#Base">Base</a></dt>
<dd></dd>
<dt><a href="#ChannelParameter">ChannelParameter</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd></dd>
<dt><a href="#Channel">Channel</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd></dd>
<dt><a href="#Components">Components</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd><p>Implements functions to deal with a Components object.</p>
</dd>
<dt><a href="#Contact">Contact</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd></dd>
<dt><a href="#CorrelationId">CorrelationId</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd></dd>
<dt><a href="#ExternalDocs">ExternalDocs</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd></dd>
<dt><a href="#Info">Info</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd></dd>
<dt><a href="#License">License</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd></dd>
<dt><a href="#MessageTrait">MessageTrait</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd></dd>
<dt><a href="#MessageTraitable">MessageTraitable</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd><p>Implements functions to deal with a the common properties that Message and MessageTrait objects have.</p>
</dd>
<dt><a href="#Message">Message</a> ⇐ <code><a href="#MessageTraitable">MessageTraitable</a></code></dt>
<dd><p>Implements functions to deal with a Message object.</p>
</dd>
<dt><a href="#OAuthFlow">OAuthFlow</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd><p>Implements functions to deal with a OAuthFlow object.</p>
</dd>
<dt><a href="#OperationTrait">OperationTrait</a> ⇐ <code><a href="#OperationTraitable">OperationTraitable</a></code></dt>
<dd></dd>
<dt><a href="#OperationTraitable">OperationTraitable</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd></dd>
<dt><a href="#Operation">Operation</a> ⇐ <code><a href="#OperationTraitable">OperationTraitable</a></code></dt>
<dd></dd>
<dt><a href="#PublishOperation">PublishOperation</a> ⇐ <code><a href="#Operation">Operation</a></code></dt>
<dd></dd>
<dt><a href="#Schema">Schema</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd><p>Implements functions to deal with a Schema object.</p>
</dd>
<dt><a href="#SecurityScheme">SecurityScheme</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd><p>Implements functions to deal with a SecurityScheme object.</p>
</dd>
<dt><a href="#ServerSecurityRequirement">ServerSecurityRequirement</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd><p>Implements functions to deal with a ServerSecurityRequirement object.</p>
</dd>
<dt><a href="#ServerVariable">ServerVariable</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd></dd>
<dt><a href="#Server">Server</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd></dd>
<dt><a href="#SubscribeOperation">SubscribeOperation</a> ⇐ <code><a href="#Operation">Operation</a></code></dt>
<dd></dd>
<dt><a href="#Tag">Tag</a> ⇐ <code><a href="#Base">Base</a></code></dt>
<dd></dd>
</dl>

## Mixins

<dl>
<dt><a href="#MixinBindings">MixinBindings</a></dt>
<dd><p>Implements functions to deal with the Bindings object.</p>
</dd>
<dt><a href="#MixinDescription">MixinDescription</a></dt>
<dd><p>Implements functions to deal with the description field.</p>
</dd>
<dt><a href="#MixinExternalDocs">MixinExternalDocs</a></dt>
<dd><p>Implements functions to deal with the ExternalDocs object.</p>
</dd>
<dt><a href="#MixinSpecificationExtensions">MixinSpecificationExtensions</a></dt>
<dd><p>Implements functions to deal with the SpecificationExtensions object.</p>
</dd>
<dt><a href="#MixinTags">MixinTags</a></dt>
<dd><p>Implements functions to deal with the Tags object.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#assignUidToParameterSchemas">assignUidToParameterSchemas(doc)</a></dt>
<dd><p>Assign parameter keys as uid for the parameter schema.</p>
</dd>
<dt><a href="#assignUidToComponentSchemas">assignUidToComponentSchemas(doc)</a></dt>
<dd><p>Assign uid to component schemas.</p>
</dd>
<dt><a href="#assignNameToAnonymousMessages">assignNameToAnonymousMessages(doc)</a></dt>
<dd><p>Assign anonymous names to nameless messages.</p>
</dd>
<dt><a href="#addNameToKey">addNameToKey(map)</a></dt>
<dd><p>Add anonymous name to key if no name provided.</p>
</dd>
<dt><a href="#recursiveSchema">recursiveSchema(schema, callback(schema))</a></dt>
<dd><p>Recursively go through each schema and execute callback.</p>
</dd>
<dt><a href="#schemaDocument">schemaDocument(doc, callback(schema))</a></dt>
<dd><p>Go through each channel and for each parameter, and message payload and headers recursively call the callback for each schema.</p>
</dd>
<dt><a href="#assignIdToAnonymousSchemas">assignIdToAnonymousSchemas(doc)</a></dt>
<dd><p>Gives schemas id to all anonymous schemas.</p>
</dd>
</dl>

<a name="module_Parser"></a>

## Parser

* [Parser](#module_Parser)
    * [.parse](#module_Parser+parse) ⇒ [<code>Promise.&lt;AsyncAPIDocument&gt;</code>](#AsyncAPIDocument)
    * [.parseFromUrl](#module_Parser+parseFromUrl) ⇒ [<code>Promise.&lt;AsyncAPIDocument&gt;</code>](#AsyncAPIDocument)
    * [.registerSchemaParser](#module_Parser+registerSchemaParser)

<a name="module_Parser+parse"></a>

### parser.parse ⇒ [<code>Promise.&lt;AsyncAPIDocument&gt;</code>](#AsyncAPIDocument)
Parses and validate an AsyncAPI document from YAML or JSON.

**Kind**: instance property of [<code>Parser</code>](#module_Parser)  
**Returns**: [<code>Promise.&lt;AsyncAPIDocument&gt;</code>](#AsyncAPIDocument) - The parsed AsyncAPI document.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| asyncapiYAMLorJSON | <code>String</code> |  | An AsyncAPI document in JSON or YAML format. |
| [options] | <code>Object</code> |  | Configuration options. |
| [options.path] | <code>String</code> |  | Path to the AsyncAPI document. It will be used to resolve relative references. Defaults to current working dir. |
| [options.parse] | <code>Object</code> |  | Options object to pass to [json-schema-ref-parser](https://apidevtools.org/json-schema-ref-parser/docs/options.html). |
| [options.resolve] | <code>Object</code> |  | Options object to pass to [json-schema-ref-parser](https://apidevtools.org/json-schema-ref-parser/docs/options.html). |
| [options.dereference] | <code>Object</code> |  | Options object to pass to [json-schema-ref-parser](https://apidevtools.org/json-schema-ref-parser/docs/options.html). |
| [options.applyTraits] | <code>Object</code> | <code>true</code> | Whether to resolve and apply traits or not. |

<a name="module_Parser+parseFromUrl"></a>

### parser.parseFromUrl ⇒ [<code>Promise.&lt;AsyncAPIDocument&gt;</code>](#AsyncAPIDocument)
Fetches an AsyncAPI document from the given URL and passes its content to the `parse` method.

**Kind**: instance property of [<code>Parser</code>](#module_Parser)  
**Returns**: [<code>Promise.&lt;AsyncAPIDocument&gt;</code>](#AsyncAPIDocument) - The parsed AsyncAPI document.  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | URL where the AsyncAPI document is located. |
| [fetchOptions] | <code>Object</code> | Configuration to pass to the [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Request) call. |
| [options] | <code>Object</code> | Configuration to pass to the [parse](#module_Parser+parse) method. |

<a name="module_Parser+registerSchemaParser"></a>

### parser.registerSchemaParser
Registers a new schema parser. Schema parsers are in charge of parsing and transforming payloads to AsyncAPI Schema format.

**Kind**: instance property of [<code>Parser</code>](#module_Parser)  

| Param | Type | Description |
| --- | --- | --- |
| schemaFormats | <code>Array.&lt;string&gt;</code> | An array of schema formats the given schema parser is able to recognize and transform. |
| parserModule | <code>Object</code> | The schema parser module containing parse() and getMimeTypes() functions. |

<a name="ParserError"></a>

## ParserError
Represents an error while trying to parse an AsyncAPI document.

**Kind**: global class  

* [ParserError](#ParserError)
    * [new ParserError(definition)](#new_ParserError_new)
    * [.toJS()](#ParserError+toJS)

<a name="new_ParserError_new"></a>

### new ParserError(definition)
Instantiates an error


| Param | Type | Description |
| --- | --- | --- |
| definition | <code>Object</code> |  |
| definition.type | <code>String</code> | The type of the error. |
| definition.title | <code>String</code> | The message of the error. |
| [definition.detail] | <code>String</code> | A string containing more detailed information about the error. |
| [definition.parsedJSON] | <code>Object</code> | The resulting JSON after YAML transformation. Or the JSON object if the this was the initial format. |
| [definition.validationErrors] | <code>Array.&lt;Object&gt;</code> | The errors resulting from the validation. For more information, see https://www.npmjs.com/package/better-ajv-errors. |
| definition.validationErrors.title | <code>String</code> | A validation error message. |
| definition.validationErrors.jsonPointer | <code>String</code> | The path to the field that contains the error. Uses JSON Pointer format. |
| definition.validationErrors.startLine | <code>Number</code> | The line where the error starts in the AsyncAPI document. |
| definition.validationErrors.startColumn | <code>Number</code> | The column where the error starts in the AsyncAPI document. |
| definition.validationErrors.startOffset | <code>Number</code> | The offset (starting from the beginning of the document) where the error starts in the AsyncAPI document. |
| definition.validationErrors.endLine | <code>Number</code> | The line where the error ends in the AsyncAPI document. |
| definition.validationErrors.endColumn | <code>Number</code> | The column where the error ends in the AsyncAPI document. |
| definition.validationErrors.endOffset | <code>Number</code> | The offset (starting from the beginning of the document) where the error ends in the AsyncAPI document. |
| [definition.location] | <code>Object</code> | Error location details after trying to parse an invalid JSON or YAML document. |
| definition.location.startLine | <code>Number</code> | The line of the YAML/JSON document where the error starts. |
| definition.location.startColumn | <code>Number</code> | The column of the YAML/JSON document where the error starts. |
| definition.location.startOffset | <code>Number</code> | The offset (starting from the beginning of the document) where the error starts in the YAML/JSON AsyncAPI document. |
| [definition.refs] | <code>Array.&lt;Object&gt;</code> | Error details after trying to resolve $ref's. |
| definition.refs.title | <code>String</code> | A validation error message. |
| definition.refs.jsonPointer | <code>String</code> | The path to the field that contains the error. Uses JSON Pointer format. |
| definition.refs.startLine | <code>Number</code> | The line where the error starts in the AsyncAPI document. |
| definition.refs.startColumn | <code>Number</code> | The column where the error starts in the AsyncAPI document. |
| definition.refs.startOffset | <code>Number</code> | The offset (starting from the beginning of the document) where the error starts in the AsyncAPI document. |
| definition.refs.endLine | <code>Number</code> | The line where the error ends in the AsyncAPI document. |
| definition.refs.endColumn | <code>Number</code> | The column where the error ends in the AsyncAPI document. |
| definition.refs.endOffset | <code>Number</code> | The offset (starting from the beginning of the document) where the error ends in the AsyncAPI document. |

<a name="ParserError+toJS"></a>

### parserError.toJS()
Returns a JS object representation of the error.

**Kind**: instance method of [<code>ParserError</code>](#ParserError)  
<a name="AsyncAPIDocument"></a>

## AsyncAPIDocument ⇐ [<code>Base</code>](#Base)
**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  
**Mixes**: [<code>MixinTags</code>](#MixinTags), [<code>MixinExternalDocs</code>](#MixinExternalDocs), [<code>MixinSpecificationExtensions</code>](#MixinSpecificationExtensions)  

* [AsyncAPIDocument](#AsyncAPIDocument) ⇐ [<code>Base</code>](#Base)
    * [new AsyncAPIDocument()](#new_AsyncAPIDocument_new)
    * [.version()](#AsyncAPIDocument+version) ⇒ <code>string</code>
    * [.hasId()](#AsyncAPIDocument+hasId) ⇒ <code>boolean</code>
    * [.id()](#AsyncAPIDocument+id) ⇒ <code>string</code> \| <code>null</code>
    * [.info()](#AsyncAPIDocument+info) ⇒ [<code>Info</code>](#Info)
    * [.hasServers()](#AsyncAPIDocument+hasServers) ⇒ <code>boolean</code>
    * [.servers()](#AsyncAPIDocument+servers) ⇒ <code>Object.&lt;string, Server&gt;</code> \| <code>null</code>
    * [.serverNames()](#AsyncAPIDocument+serverNames) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasServer(name)](#AsyncAPIDocument+hasServer) ⇒ <code>boolean</code>
    * [.server(name)](#AsyncAPIDocument+server) ⇒ [<code>Server</code>](#Server) \| <code>null</code>
    * [.hasChannels()](#AsyncAPIDocument+hasChannels) ⇒ <code>boolean</code>
    * [.channels()](#AsyncAPIDocument+channels) ⇒ <code>Object.&lt;string, Channel&gt;</code> \| <code>null</code>
    * [.channelNames()](#AsyncAPIDocument+channelNames) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasChannel(name)](#AsyncAPIDocument+hasChannel) ⇒ <code>boolean</code>
    * [.channel(name)](#AsyncAPIDocument+channel) ⇒ [<code>Channel</code>](#Channel) \| <code>null</code>
    * [.hasDefaultContentType()](#AsyncAPIDocument+hasDefaultContentType) ⇒ <code>boolean</code>
    * [.defaultContentType()](#AsyncAPIDocument+defaultContentType) ⇒ <code>string</code> \| <code>null</code>
    * [.hasComponents()](#AsyncAPIDocument+hasComponents) ⇒ <code>boolean</code>
    * [.components()](#AsyncAPIDocument+components) ⇒ [<code>Components</code>](#Components) \| <code>null</code>
    * [.hasMessages()](#AsyncAPIDocument+hasMessages) ⇒ <code>boolean</code>
    * [.allMessages()](#AsyncAPIDocument+allMessages) ⇒ [<code>Map.&lt;Message&gt;</code>](#Message)
    * [.hasSchemas()](#AsyncAPIDocument+hasSchemas) ⇒ <code>boolean</code>
    * [.allSchemas()](#AsyncAPIDocument+allSchemas) ⇒ [<code>Map.&lt;Schema&gt;</code>](#Schema)
    * [.hasTags()](#AsyncAPIDocument+hasTags) ⇒ <code>boolean</code>
    * [.tags()](#AsyncAPIDocument+tags) ⇒ [<code>Array.&lt;Tag&gt;</code>](#Tag) \| <code>null</code>
    * [.tagNames()](#AsyncAPIDocument+tagNames) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasTag(name)](#AsyncAPIDocument+hasTag) ⇒ <code>boolean</code>
    * [.tag(name)](#AsyncAPIDocument+tag) ⇒ [<code>Tag</code>](#Tag) \| <code>null</code>
    * [.hasExternalDocs()](#AsyncAPIDocument+hasExternalDocs) ⇒ <code>boolean</code>
    * [.externalDocs()](#AsyncAPIDocument+externalDocs) ⇒ [<code>ExternalDocs</code>](#ExternalDocs) \| <code>null</code>
    * [.hasExtensions()](#AsyncAPIDocument+hasExtensions) ⇒ <code>boolean</code>
    * [.extensions()](#AsyncAPIDocument+extensions) ⇒ <code>Object.&lt;string, Any&gt;</code> \| <code>null</code>
    * [.extensionKeys()](#AsyncAPIDocument+extensionKeys) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.extKeys()](#AsyncAPIDocument+extKeys) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasExtension(key)](#AsyncAPIDocument+hasExtension) ⇒ <code>boolean</code>
    * [.extension(key)](#AsyncAPIDocument+extension) ⇒ <code>Any</code>
    * [.hasExt(key)](#AsyncAPIDocument+hasExt) ⇒ <code>boolean</code>
    * [.ext(key)](#AsyncAPIDocument+ext) ⇒ <code>Any</code>
    * [.json()](#Base+json) ⇒ <code>Any</code>

<a name="new_AsyncAPIDocument_new"></a>

### new AsyncAPIDocument()
Implements functions to deal with the AsyncAPI document.

<a name="AsyncAPIDocument+version"></a>

### asyncAPIDocument.version() ⇒ <code>string</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
<a name="AsyncAPIDocument+hasId"></a>

### asyncAPIDocument.hasId() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
<a name="AsyncAPIDocument+id"></a>

### asyncAPIDocument.id() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
<a name="AsyncAPIDocument+info"></a>

### asyncAPIDocument.info() ⇒ [<code>Info</code>](#Info)
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
<a name="AsyncAPIDocument+hasServers"></a>

### asyncAPIDocument.hasServers() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
<a name="AsyncAPIDocument+servers"></a>

### asyncAPIDocument.servers() ⇒ <code>Object.&lt;string, Server&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
<a name="AsyncAPIDocument+serverNames"></a>

### asyncAPIDocument.serverNames() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
<a name="AsyncAPIDocument+hasServer"></a>

### asyncAPIDocument.hasServer(name) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the server. |

<a name="AsyncAPIDocument+server"></a>

### asyncAPIDocument.server(name) ⇒ [<code>Server</code>](#Server) \| <code>null</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the server. |

<a name="AsyncAPIDocument+hasChannels"></a>

### asyncAPIDocument.hasChannels() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
<a name="AsyncAPIDocument+channels"></a>

### asyncAPIDocument.channels() ⇒ <code>Object.&lt;string, Channel&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
<a name="AsyncAPIDocument+channelNames"></a>

### asyncAPIDocument.channelNames() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
<a name="AsyncAPIDocument+hasChannel"></a>

### asyncAPIDocument.hasChannel(name) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the channel. |

<a name="AsyncAPIDocument+channel"></a>

### asyncAPIDocument.channel(name) ⇒ [<code>Channel</code>](#Channel) \| <code>null</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the channel. |

<a name="AsyncAPIDocument+hasDefaultContentType"></a>

### asyncAPIDocument.hasDefaultContentType() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
<a name="AsyncAPIDocument+defaultContentType"></a>

### asyncAPIDocument.defaultContentType() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
<a name="AsyncAPIDocument+hasComponents"></a>

### asyncAPIDocument.hasComponents() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
<a name="AsyncAPIDocument+components"></a>

### asyncAPIDocument.components() ⇒ [<code>Components</code>](#Components) \| <code>null</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
<a name="AsyncAPIDocument+hasMessages"></a>

### asyncAPIDocument.hasMessages() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
<a name="AsyncAPIDocument+allMessages"></a>

### asyncAPIDocument.allMessages() ⇒ [<code>Map.&lt;Message&gt;</code>](#Message)
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
<a name="AsyncAPIDocument+hasSchemas"></a>

### asyncAPIDocument.hasSchemas() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
<a name="AsyncAPIDocument+allSchemas"></a>

### asyncAPIDocument.allSchemas() ⇒ [<code>Map.&lt;Schema&gt;</code>](#Schema)
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
<a name="AsyncAPIDocument+hasTags"></a>

### asyncAPIDocument.hasTags() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
**Mixes**: [<code>hasTags</code>](#MixinTags.hasTags)  
<a name="AsyncAPIDocument+tags"></a>

### asyncAPIDocument.tags() ⇒ [<code>Array.&lt;Tag&gt;</code>](#Tag) \| <code>null</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
**Mixes**: [<code>tags</code>](#MixinTags.tags)  
<a name="AsyncAPIDocument+tagNames"></a>

### asyncAPIDocument.tagNames() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
**Mixes**: [<code>tagNames</code>](#MixinTags.tagNames)  
<a name="AsyncAPIDocument+hasTag"></a>

### asyncAPIDocument.hasTag(name) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
**Mixes**: [<code>hasTag</code>](#MixinTags.hasTag)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the tag. |

<a name="AsyncAPIDocument+tag"></a>

### asyncAPIDocument.tag(name) ⇒ [<code>Tag</code>](#Tag) \| <code>null</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
**Mixes**: [<code>tag</code>](#MixinTags.tag)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the tag. |

<a name="AsyncAPIDocument+hasExternalDocs"></a>

### asyncAPIDocument.hasExternalDocs() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
**Mixes**: [<code>hasExternalDocs</code>](#MixinExternalDocs.hasExternalDocs)  
<a name="AsyncAPIDocument+externalDocs"></a>

### asyncAPIDocument.externalDocs() ⇒ [<code>ExternalDocs</code>](#ExternalDocs) \| <code>null</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
**Mixes**: [<code>externalDocs</code>](#MixinExternalDocs.externalDocs)  
<a name="AsyncAPIDocument+hasExtensions"></a>

### asyncAPIDocument.hasExtensions() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
**Mixes**: [<code>hasExtensions</code>](#MixinSpecificationExtensions.hasExtensions)  
<a name="AsyncAPIDocument+extensions"></a>

### asyncAPIDocument.extensions() ⇒ <code>Object.&lt;string, Any&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
**Mixes**: [<code>extensions</code>](#MixinSpecificationExtensions.extensions)  
<a name="AsyncAPIDocument+extensionKeys"></a>

### asyncAPIDocument.extensionKeys() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
**Mixes**: [<code>extensionKeys</code>](#MixinSpecificationExtensions.extensionKeys)  
<a name="AsyncAPIDocument+extKeys"></a>

### asyncAPIDocument.extKeys() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
**Mixes**: [<code>extKeys</code>](#MixinSpecificationExtensions.extKeys)  
<a name="AsyncAPIDocument+hasExtension"></a>

### asyncAPIDocument.hasExtension(key) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
**Mixes**: [<code>hasExtension</code>](#MixinSpecificationExtensions.hasExtension)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="AsyncAPIDocument+extension"></a>

### asyncAPIDocument.extension(key) ⇒ <code>Any</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
**Mixes**: [<code>extension</code>](#MixinSpecificationExtensions.extension)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="AsyncAPIDocument+hasExt"></a>

### asyncAPIDocument.hasExt(key) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
**Mixes**: [<code>hasExt</code>](#MixinSpecificationExtensions.hasExt)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="AsyncAPIDocument+ext"></a>

### asyncAPIDocument.ext(key) ⇒ <code>Any</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
**Mixes**: [<code>ext</code>](#MixinSpecificationExtensions.ext)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise throw an error. |

<a name="Base+json"></a>

### asyncAPIDocument.json() ⇒ <code>Any</code>
**Kind**: instance method of [<code>AsyncAPIDocument</code>](#AsyncAPIDocument)  
<a name="Base"></a>

## Base
**Kind**: global class  

* [Base](#Base)
    * [new Base()](#new_Base_new)
    * [.json()](#Base+json) ⇒ <code>Any</code>

<a name="new_Base_new"></a>

### new Base()
Implements common functionality for all the models.

<a name="Base+json"></a>

### base.json() ⇒ <code>Any</code>
**Kind**: instance method of [<code>Base</code>](#Base)  
<a name="ChannelParameter"></a>

## ChannelParameter ⇐ [<code>Base</code>](#Base)
**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  
**Mixes**: [<code>MixinDescription</code>](#MixinDescription), [<code>MixinSpecificationExtensions</code>](#MixinSpecificationExtensions)  

* [ChannelParameter](#ChannelParameter) ⇐ [<code>Base</code>](#Base)
    * [new ChannelParameter()](#new_ChannelParameter_new)
    * [.hasLocation()](#ChannelParameter+hasLocation) ⇒ <code>boolean</code>
    * [.location()](#ChannelParameter+location) ⇒ <code>string</code> \| <code>null</code>
    * [.hasSchema()](#ChannelParameter+hasSchema) ⇒ <code>boolean</code>
    * [.schema()](#ChannelParameter+schema) ⇒ [<code>Schema</code>](#Schema) \| <code>null</code>
    * [.hasDescription()](#ChannelParameter+hasDescription) ⇒ <code>boolean</code>
    * [.description()](#ChannelParameter+description) ⇒ <code>string</code> \| <code>null</code>
    * [.hasExtensions()](#ChannelParameter+hasExtensions) ⇒ <code>boolean</code>
    * [.extensions()](#ChannelParameter+extensions) ⇒ <code>Object.&lt;string, Any&gt;</code> \| <code>null</code>
    * [.extensionKeys()](#ChannelParameter+extensionKeys) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.extKeys()](#ChannelParameter+extKeys) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasExtension(key)](#ChannelParameter+hasExtension) ⇒ <code>boolean</code>
    * [.extension(key)](#ChannelParameter+extension) ⇒ <code>Any</code>
    * [.hasExt(key)](#ChannelParameter+hasExt) ⇒ <code>boolean</code>
    * [.ext(key)](#ChannelParameter+ext) ⇒ <code>Any</code>
    * [.json()](#Base+json) ⇒ <code>Any</code>

<a name="new_ChannelParameter_new"></a>

### new ChannelParameter()
Implements functions to deal with a ChannelParameter object.

<a name="ChannelParameter+hasLocation"></a>

### channelParameter.hasLocation() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>ChannelParameter</code>](#ChannelParameter)  
<a name="ChannelParameter+location"></a>

### channelParameter.location() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>ChannelParameter</code>](#ChannelParameter)  
<a name="ChannelParameter+hasSchema"></a>

### channelParameter.hasSchema() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>ChannelParameter</code>](#ChannelParameter)  
<a name="ChannelParameter+schema"></a>

### channelParameter.schema() ⇒ [<code>Schema</code>](#Schema) \| <code>null</code>
**Kind**: instance method of [<code>ChannelParameter</code>](#ChannelParameter)  
<a name="ChannelParameter+hasDescription"></a>

### channelParameter.hasDescription() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>ChannelParameter</code>](#ChannelParameter)  
**Mixes**: [<code>hasDescription</code>](#MixinDescription.hasDescription)  
<a name="ChannelParameter+description"></a>

### channelParameter.description() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>ChannelParameter</code>](#ChannelParameter)  
**Mixes**: [<code>description</code>](#MixinDescription.description)  
<a name="ChannelParameter+hasExtensions"></a>

### channelParameter.hasExtensions() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>ChannelParameter</code>](#ChannelParameter)  
**Mixes**: [<code>hasExtensions</code>](#MixinSpecificationExtensions.hasExtensions)  
<a name="ChannelParameter+extensions"></a>

### channelParameter.extensions() ⇒ <code>Object.&lt;string, Any&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>ChannelParameter</code>](#ChannelParameter)  
**Mixes**: [<code>extensions</code>](#MixinSpecificationExtensions.extensions)  
<a name="ChannelParameter+extensionKeys"></a>

### channelParameter.extensionKeys() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>ChannelParameter</code>](#ChannelParameter)  
**Mixes**: [<code>extensionKeys</code>](#MixinSpecificationExtensions.extensionKeys)  
<a name="ChannelParameter+extKeys"></a>

### channelParameter.extKeys() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>ChannelParameter</code>](#ChannelParameter)  
**Mixes**: [<code>extKeys</code>](#MixinSpecificationExtensions.extKeys)  
<a name="ChannelParameter+hasExtension"></a>

### channelParameter.hasExtension(key) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>ChannelParameter</code>](#ChannelParameter)  
**Mixes**: [<code>hasExtension</code>](#MixinSpecificationExtensions.hasExtension)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="ChannelParameter+extension"></a>

### channelParameter.extension(key) ⇒ <code>Any</code>
**Kind**: instance method of [<code>ChannelParameter</code>](#ChannelParameter)  
**Mixes**: [<code>extension</code>](#MixinSpecificationExtensions.extension)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="ChannelParameter+hasExt"></a>

### channelParameter.hasExt(key) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>ChannelParameter</code>](#ChannelParameter)  
**Mixes**: [<code>hasExt</code>](#MixinSpecificationExtensions.hasExt)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="ChannelParameter+ext"></a>

### channelParameter.ext(key) ⇒ <code>Any</code>
**Kind**: instance method of [<code>ChannelParameter</code>](#ChannelParameter)  
**Mixes**: [<code>ext</code>](#MixinSpecificationExtensions.ext)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise throw an error. |

<a name="Base+json"></a>

### channelParameter.json() ⇒ <code>Any</code>
**Kind**: instance method of [<code>ChannelParameter</code>](#ChannelParameter)  
<a name="Channel"></a>

## Channel ⇐ [<code>Base</code>](#Base)
**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  
**Mixes**: [<code>MixinDescription</code>](#MixinDescription), [<code>MixinBindings</code>](#MixinBindings), [<code>MixinSpecificationExtensions</code>](#MixinSpecificationExtensions)  

* [Channel](#Channel) ⇐ [<code>Base</code>](#Base)
    * [new Channel()](#new_Channel_new)
    * [.hasParameters()](#Channel+hasParameters) ⇒ <code>boolean</code>
    * [.parameters()](#Channel+parameters) ⇒ <code>Object.&lt;string, ChannelParameter&gt;</code> \| <code>null</code>
    * [.hasParameter(name)](#Channel+hasParameter) ⇒ <code>boolean</code>
    * [.parameter(name)](#Channel+parameter) ⇒ [<code>ChannelParameter</code>](#ChannelParameter) \| <code>null</code>
    * [.hasPublish()](#Channel+hasPublish) ⇒ <code>boolean</code>
    * [.publish()](#Channel+publish) ⇒ [<code>PublishOperation</code>](#PublishOperation) \| <code>null</code>
    * [.hasSubscribe()](#Channel+hasSubscribe) ⇒ <code>boolean</code>
    * [.subscribe()](#Channel+subscribe) ⇒ [<code>SubscribeOperation</code>](#SubscribeOperation) \| <code>null</code>
    * [.hasDescription()](#Channel+hasDescription) ⇒ <code>boolean</code>
    * [.description()](#Channel+description) ⇒ <code>string</code> \| <code>null</code>
    * [.hasBindings()](#Channel+hasBindings) ⇒ <code>boolean</code>
    * [.bindings()](#Channel+bindings) ⇒ <code>Object</code> \| <code>null</code>
    * [.bindingProtocols()](#Channel+bindingProtocols) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasBinding(name)](#Channel+hasBinding) ⇒ <code>boolean</code>
    * [.binding(name)](#Channel+binding) ⇒ <code>Object</code> \| <code>null</code>
    * [.hasExtensions()](#Channel+hasExtensions) ⇒ <code>boolean</code>
    * [.extensions()](#Channel+extensions) ⇒ <code>Object.&lt;string, Any&gt;</code> \| <code>null</code>
    * [.extensionKeys()](#Channel+extensionKeys) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.extKeys()](#Channel+extKeys) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasExtension(key)](#Channel+hasExtension) ⇒ <code>boolean</code>
    * [.extension(key)](#Channel+extension) ⇒ <code>Any</code>
    * [.hasExt(key)](#Channel+hasExt) ⇒ <code>boolean</code>
    * [.ext(key)](#Channel+ext) ⇒ <code>Any</code>
    * [.json()](#Base+json) ⇒ <code>Any</code>

<a name="new_Channel_new"></a>

### new Channel()
Implements functions to deal with a Channel object.

<a name="Channel+hasParameters"></a>

### channel.hasParameters() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Channel</code>](#Channel)  
<a name="Channel+parameters"></a>

### channel.parameters() ⇒ <code>Object.&lt;string, ChannelParameter&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>Channel</code>](#Channel)  
<a name="Channel+hasParameter"></a>

### channel.hasParameter(name) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Channel</code>](#Channel)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the parameter. |

<a name="Channel+parameter"></a>

### channel.parameter(name) ⇒ [<code>ChannelParameter</code>](#ChannelParameter) \| <code>null</code>
**Kind**: instance method of [<code>Channel</code>](#Channel)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the parameter. |

<a name="Channel+hasPublish"></a>

### channel.hasPublish() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Channel</code>](#Channel)  
<a name="Channel+publish"></a>

### channel.publish() ⇒ [<code>PublishOperation</code>](#PublishOperation) \| <code>null</code>
**Kind**: instance method of [<code>Channel</code>](#Channel)  
<a name="Channel+hasSubscribe"></a>

### channel.hasSubscribe() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Channel</code>](#Channel)  
<a name="Channel+subscribe"></a>

### channel.subscribe() ⇒ [<code>SubscribeOperation</code>](#SubscribeOperation) \| <code>null</code>
**Kind**: instance method of [<code>Channel</code>](#Channel)  
<a name="Channel+hasDescription"></a>

### channel.hasDescription() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Mixes**: [<code>hasDescription</code>](#MixinDescription.hasDescription)  
<a name="Channel+description"></a>

### channel.description() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Mixes**: [<code>description</code>](#MixinDescription.description)  
<a name="Channel+hasBindings"></a>

### channel.hasBindings() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Mixes**: [<code>hasBindings</code>](#MixinBindings.hasBindings)  
<a name="Channel+bindings"></a>

### channel.bindings() ⇒ <code>Object</code> \| <code>null</code>
**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Mixes**: [<code>bindings</code>](#MixinBindings.bindings)  
<a name="Channel+bindingProtocols"></a>

### channel.bindingProtocols() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Mixes**: [<code>bindingProtocols</code>](#MixinBindings.bindingProtocols)  
<a name="Channel+hasBinding"></a>

### channel.hasBinding(name) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Mixes**: [<code>hasBinding</code>](#MixinBindings.hasBinding)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the binding. |

<a name="Channel+binding"></a>

### channel.binding(name) ⇒ <code>Object</code> \| <code>null</code>
**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Mixes**: [<code>binding</code>](#MixinBindings.binding)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the binding. |

<a name="Channel+hasExtensions"></a>

### channel.hasExtensions() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Mixes**: [<code>hasExtensions</code>](#MixinSpecificationExtensions.hasExtensions)  
<a name="Channel+extensions"></a>

### channel.extensions() ⇒ <code>Object.&lt;string, Any&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Mixes**: [<code>extensions</code>](#MixinSpecificationExtensions.extensions)  
<a name="Channel+extensionKeys"></a>

### channel.extensionKeys() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Mixes**: [<code>extensionKeys</code>](#MixinSpecificationExtensions.extensionKeys)  
<a name="Channel+extKeys"></a>

### channel.extKeys() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Mixes**: [<code>extKeys</code>](#MixinSpecificationExtensions.extKeys)  
<a name="Channel+hasExtension"></a>

### channel.hasExtension(key) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Mixes**: [<code>hasExtension</code>](#MixinSpecificationExtensions.hasExtension)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="Channel+extension"></a>

### channel.extension(key) ⇒ <code>Any</code>
**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Mixes**: [<code>extension</code>](#MixinSpecificationExtensions.extension)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="Channel+hasExt"></a>

### channel.hasExt(key) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Mixes**: [<code>hasExt</code>](#MixinSpecificationExtensions.hasExt)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="Channel+ext"></a>

### channel.ext(key) ⇒ <code>Any</code>
**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Mixes**: [<code>ext</code>](#MixinSpecificationExtensions.ext)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise throw an error. |

<a name="Base+json"></a>

### channel.json() ⇒ <code>Any</code>
**Kind**: instance method of [<code>Channel</code>](#Channel)  
<a name="Components"></a>

## Components ⇐ [<code>Base</code>](#Base)
Implements functions to deal with a Components object.

**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  

* [Components](#Components) ⇐ [<code>Base</code>](#Base)
    * [.messages()](#Components+messages) ⇒ <code>Object.&lt;string, Message&gt;</code>
    * [.message()](#Components+message) ⇒ [<code>Message</code>](#Message)
    * [.schemas()](#Components+schemas) ⇒ <code>Object.&lt;string, Schema&gt;</code>
    * [.schema()](#Components+schema) ⇒ [<code>Schema</code>](#Schema)
    * [.securitySchemes()](#Components+securitySchemes) ⇒ <code>Object.&lt;string, SecurityScheme&gt;</code>
    * [.securityScheme()](#Components+securityScheme) ⇒ [<code>SecurityScheme</code>](#SecurityScheme)
    * [.parameters()](#Components+parameters) ⇒ <code>Object.&lt;string, ChannelParameter&gt;</code>
    * [.parameter()](#Components+parameter) ⇒ [<code>ChannelParameter</code>](#ChannelParameter)
    * [.correlationIds()](#Components+correlationIds) ⇒ <code>Object.&lt;string, CorrelationId&gt;</code>
    * [.correlationId()](#Components+correlationId) ⇒ [<code>CorrelationId</code>](#CorrelationId)
    * [.operationTraits()](#Components+operationTraits) ⇒ <code>Object.&lt;string, OperationTrait&gt;</code>
    * [.operationTrait()](#Components+operationTrait) ⇒ [<code>OperationTrait</code>](#OperationTrait)
    * [.messageTraits()](#Components+messageTraits) ⇒ <code>Object.&lt;string, MessageTrait&gt;</code>
    * [.messageTrait()](#Components+messageTrait) ⇒ [<code>MessageTrait</code>](#MessageTrait)
    * [.json()](#Base+json) ⇒ <code>Any</code>

<a name="Components+messages"></a>

### components.messages() ⇒ <code>Object.&lt;string, Message&gt;</code>
**Kind**: instance method of [<code>Components</code>](#Components)  
<a name="Components+message"></a>

### components.message() ⇒ [<code>Message</code>](#Message)
**Kind**: instance method of [<code>Components</code>](#Components)  
<a name="Components+schemas"></a>

### components.schemas() ⇒ <code>Object.&lt;string, Schema&gt;</code>
**Kind**: instance method of [<code>Components</code>](#Components)  
<a name="Components+schema"></a>

### components.schema() ⇒ [<code>Schema</code>](#Schema)
**Kind**: instance method of [<code>Components</code>](#Components)  
<a name="Components+securitySchemes"></a>

### components.securitySchemes() ⇒ <code>Object.&lt;string, SecurityScheme&gt;</code>
**Kind**: instance method of [<code>Components</code>](#Components)  
<a name="Components+securityScheme"></a>

### components.securityScheme() ⇒ [<code>SecurityScheme</code>](#SecurityScheme)
**Kind**: instance method of [<code>Components</code>](#Components)  
<a name="Components+parameters"></a>

### components.parameters() ⇒ <code>Object.&lt;string, ChannelParameter&gt;</code>
**Kind**: instance method of [<code>Components</code>](#Components)  
<a name="Components+parameter"></a>

### components.parameter() ⇒ [<code>ChannelParameter</code>](#ChannelParameter)
**Kind**: instance method of [<code>Components</code>](#Components)  
<a name="Components+correlationIds"></a>

### components.correlationIds() ⇒ <code>Object.&lt;string, CorrelationId&gt;</code>
**Kind**: instance method of [<code>Components</code>](#Components)  
<a name="Components+correlationId"></a>

### components.correlationId() ⇒ [<code>CorrelationId</code>](#CorrelationId)
**Kind**: instance method of [<code>Components</code>](#Components)  
<a name="Components+operationTraits"></a>

### components.operationTraits() ⇒ <code>Object.&lt;string, OperationTrait&gt;</code>
**Kind**: instance method of [<code>Components</code>](#Components)  
<a name="Components+operationTrait"></a>

### components.operationTrait() ⇒ [<code>OperationTrait</code>](#OperationTrait)
**Kind**: instance method of [<code>Components</code>](#Components)  
<a name="Components+messageTraits"></a>

### components.messageTraits() ⇒ <code>Object.&lt;string, MessageTrait&gt;</code>
**Kind**: instance method of [<code>Components</code>](#Components)  
<a name="Components+messageTrait"></a>

### components.messageTrait() ⇒ [<code>MessageTrait</code>](#MessageTrait)
**Kind**: instance method of [<code>Components</code>](#Components)  
<a name="Base+json"></a>

### components.json() ⇒ <code>Any</code>
**Kind**: instance method of [<code>Components</code>](#Components)  
<a name="Contact"></a>

## Contact ⇐ [<code>Base</code>](#Base)
**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  
**Mixes**: [<code>MixinSpecificationExtensions</code>](#MixinSpecificationExtensions)  

* [Contact](#Contact) ⇐ [<code>Base</code>](#Base)
    * [new Contact()](#new_Contact_new)
    * [.hasName()](#Contact+hasName) ⇒ <code>boolean</code>
    * [.name()](#Contact+name) ⇒ <code>string</code> \| <code>null</code>
    * [.hasUrl()](#Contact+hasUrl) ⇒ <code>boolean</code>
    * [.url()](#Contact+url) ⇒ <code>string</code> \| <code>null</code>
    * [.hasEmail()](#Contact+hasEmail) ⇒ <code>boolean</code>
    * [.email()](#Contact+email) ⇒ <code>string</code> \| <code>null</code>
    * [.hasExtensions()](#Contact+hasExtensions) ⇒ <code>boolean</code>
    * [.extensions()](#Contact+extensions) ⇒ <code>Object.&lt;string, Any&gt;</code> \| <code>null</code>
    * [.extensionKeys()](#Contact+extensionKeys) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.extKeys()](#Contact+extKeys) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasExtension(key)](#Contact+hasExtension) ⇒ <code>boolean</code>
    * [.extension(key)](#Contact+extension) ⇒ <code>Any</code>
    * [.hasExt(key)](#Contact+hasExt) ⇒ <code>boolean</code>
    * [.ext(key)](#Contact+ext) ⇒ <code>Any</code>
    * [.json()](#Base+json) ⇒ <code>Any</code>

<a name="new_Contact_new"></a>

### new Contact()
Implements functions to deal with the Contact object.

<a name="Contact+hasName"></a>

### contact.hasName() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Contact</code>](#Contact)  
<a name="Contact+name"></a>

### contact.name() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>Contact</code>](#Contact)  
<a name="Contact+hasUrl"></a>

### contact.hasUrl() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Contact</code>](#Contact)  
<a name="Contact+url"></a>

### contact.url() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>Contact</code>](#Contact)  
<a name="Contact+hasEmail"></a>

### contact.hasEmail() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Contact</code>](#Contact)  
<a name="Contact+email"></a>

### contact.email() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>Contact</code>](#Contact)  
<a name="Contact+hasExtensions"></a>

### contact.hasExtensions() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Contact</code>](#Contact)  
**Mixes**: [<code>hasExtensions</code>](#MixinSpecificationExtensions.hasExtensions)  
<a name="Contact+extensions"></a>

### contact.extensions() ⇒ <code>Object.&lt;string, Any&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>Contact</code>](#Contact)  
**Mixes**: [<code>extensions</code>](#MixinSpecificationExtensions.extensions)  
<a name="Contact+extensionKeys"></a>

### contact.extensionKeys() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>Contact</code>](#Contact)  
**Mixes**: [<code>extensionKeys</code>](#MixinSpecificationExtensions.extensionKeys)  
<a name="Contact+extKeys"></a>

### contact.extKeys() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>Contact</code>](#Contact)  
**Mixes**: [<code>extKeys</code>](#MixinSpecificationExtensions.extKeys)  
<a name="Contact+hasExtension"></a>

### contact.hasExtension(key) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Contact</code>](#Contact)  
**Mixes**: [<code>hasExtension</code>](#MixinSpecificationExtensions.hasExtension)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="Contact+extension"></a>

### contact.extension(key) ⇒ <code>Any</code>
**Kind**: instance method of [<code>Contact</code>](#Contact)  
**Mixes**: [<code>extension</code>](#MixinSpecificationExtensions.extension)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="Contact+hasExt"></a>

### contact.hasExt(key) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Contact</code>](#Contact)  
**Mixes**: [<code>hasExt</code>](#MixinSpecificationExtensions.hasExt)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="Contact+ext"></a>

### contact.ext(key) ⇒ <code>Any</code>
**Kind**: instance method of [<code>Contact</code>](#Contact)  
**Mixes**: [<code>ext</code>](#MixinSpecificationExtensions.ext)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise throw an error. |

<a name="Base+json"></a>

### contact.json() ⇒ <code>Any</code>
**Kind**: instance method of [<code>Contact</code>](#Contact)  
<a name="CorrelationId"></a>

## CorrelationId ⇐ [<code>Base</code>](#Base)
**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  
**Mixes**: [<code>MixinDescription</code>](#MixinDescription), [<code>MixinSpecificationExtensions</code>](#MixinSpecificationExtensions)  

* [CorrelationId](#CorrelationId) ⇐ [<code>Base</code>](#Base)
    * [new CorrelationId()](#new_CorrelationId_new)
    * [.location()](#CorrelationId+location) ⇒ <code>string</code>
    * [.hasDescription()](#CorrelationId+hasDescription) ⇒ <code>boolean</code>
    * [.description()](#CorrelationId+description) ⇒ <code>string</code> \| <code>null</code>
    * [.hasExtensions()](#CorrelationId+hasExtensions) ⇒ <code>boolean</code>
    * [.extensions()](#CorrelationId+extensions) ⇒ <code>Object.&lt;string, Any&gt;</code> \| <code>null</code>
    * [.extensionKeys()](#CorrelationId+extensionKeys) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.extKeys()](#CorrelationId+extKeys) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasExtension(key)](#CorrelationId+hasExtension) ⇒ <code>boolean</code>
    * [.extension(key)](#CorrelationId+extension) ⇒ <code>Any</code>
    * [.hasExt(key)](#CorrelationId+hasExt) ⇒ <code>boolean</code>
    * [.ext(key)](#CorrelationId+ext) ⇒ <code>Any</code>
    * [.json()](#Base+json) ⇒ <code>Any</code>

<a name="new_CorrelationId_new"></a>

### new CorrelationId()
Implements functions to deal with a CorrelationId object.

<a name="CorrelationId+location"></a>

### correlationId.location() ⇒ <code>string</code>
**Kind**: instance method of [<code>CorrelationId</code>](#CorrelationId)  
<a name="CorrelationId+hasDescription"></a>

### correlationId.hasDescription() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>CorrelationId</code>](#CorrelationId)  
**Mixes**: [<code>hasDescription</code>](#MixinDescription.hasDescription)  
<a name="CorrelationId+description"></a>

### correlationId.description() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>CorrelationId</code>](#CorrelationId)  
**Mixes**: [<code>description</code>](#MixinDescription.description)  
<a name="CorrelationId+hasExtensions"></a>

### correlationId.hasExtensions() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>CorrelationId</code>](#CorrelationId)  
**Mixes**: [<code>hasExtensions</code>](#MixinSpecificationExtensions.hasExtensions)  
<a name="CorrelationId+extensions"></a>

### correlationId.extensions() ⇒ <code>Object.&lt;string, Any&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>CorrelationId</code>](#CorrelationId)  
**Mixes**: [<code>extensions</code>](#MixinSpecificationExtensions.extensions)  
<a name="CorrelationId+extensionKeys"></a>

### correlationId.extensionKeys() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>CorrelationId</code>](#CorrelationId)  
**Mixes**: [<code>extensionKeys</code>](#MixinSpecificationExtensions.extensionKeys)  
<a name="CorrelationId+extKeys"></a>

### correlationId.extKeys() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>CorrelationId</code>](#CorrelationId)  
**Mixes**: [<code>extKeys</code>](#MixinSpecificationExtensions.extKeys)  
<a name="CorrelationId+hasExtension"></a>

### correlationId.hasExtension(key) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>CorrelationId</code>](#CorrelationId)  
**Mixes**: [<code>hasExtension</code>](#MixinSpecificationExtensions.hasExtension)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="CorrelationId+extension"></a>

### correlationId.extension(key) ⇒ <code>Any</code>
**Kind**: instance method of [<code>CorrelationId</code>](#CorrelationId)  
**Mixes**: [<code>extension</code>](#MixinSpecificationExtensions.extension)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="CorrelationId+hasExt"></a>

### correlationId.hasExt(key) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>CorrelationId</code>](#CorrelationId)  
**Mixes**: [<code>hasExt</code>](#MixinSpecificationExtensions.hasExt)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="CorrelationId+ext"></a>

### correlationId.ext(key) ⇒ <code>Any</code>
**Kind**: instance method of [<code>CorrelationId</code>](#CorrelationId)  
**Mixes**: [<code>ext</code>](#MixinSpecificationExtensions.ext)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise throw an error. |

<a name="Base+json"></a>

### correlationId.json() ⇒ <code>Any</code>
**Kind**: instance method of [<code>CorrelationId</code>](#CorrelationId)  
<a name="ExternalDocs"></a>

## ExternalDocs ⇐ [<code>Base</code>](#Base)
**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  
**Mixes**: [<code>MixinDescription</code>](#MixinDescription), [<code>MixinSpecificationExtensions</code>](#MixinSpecificationExtensions)  

* [ExternalDocs](#ExternalDocs) ⇐ [<code>Base</code>](#Base)
    * [new ExternalDocs()](#new_ExternalDocs_new)
    * [.url()](#ExternalDocs+url) ⇒ <code>string</code>
    * [.hasDescription()](#ExternalDocs+hasDescription) ⇒ <code>boolean</code>
    * [.description()](#ExternalDocs+description) ⇒ <code>string</code> \| <code>null</code>
    * [.hasExtensions()](#ExternalDocs+hasExtensions) ⇒ <code>boolean</code>
    * [.extensions()](#ExternalDocs+extensions) ⇒ <code>Object.&lt;string, Any&gt;</code> \| <code>null</code>
    * [.extensionKeys()](#ExternalDocs+extensionKeys) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.extKeys()](#ExternalDocs+extKeys) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasExtension(key)](#ExternalDocs+hasExtension) ⇒ <code>boolean</code>
    * [.extension(key)](#ExternalDocs+extension) ⇒ <code>Any</code>
    * [.hasExt(key)](#ExternalDocs+hasExt) ⇒ <code>boolean</code>
    * [.ext(key)](#ExternalDocs+ext) ⇒ <code>Any</code>
    * [.json()](#Base+json) ⇒ <code>Any</code>

<a name="new_ExternalDocs_new"></a>

### new ExternalDocs()
Implements functions to deal with an ExternalDocs object.

<a name="ExternalDocs+url"></a>

### externalDocs.url() ⇒ <code>string</code>
**Kind**: instance method of [<code>ExternalDocs</code>](#ExternalDocs)  
<a name="ExternalDocs+hasDescription"></a>

### externalDocs.hasDescription() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>ExternalDocs</code>](#ExternalDocs)  
**Mixes**: [<code>hasDescription</code>](#MixinDescription.hasDescription)  
<a name="ExternalDocs+description"></a>

### externalDocs.description() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>ExternalDocs</code>](#ExternalDocs)  
**Mixes**: [<code>description</code>](#MixinDescription.description)  
<a name="ExternalDocs+hasExtensions"></a>

### externalDocs.hasExtensions() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>ExternalDocs</code>](#ExternalDocs)  
**Mixes**: [<code>hasExtensions</code>](#MixinSpecificationExtensions.hasExtensions)  
<a name="ExternalDocs+extensions"></a>

### externalDocs.extensions() ⇒ <code>Object.&lt;string, Any&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>ExternalDocs</code>](#ExternalDocs)  
**Mixes**: [<code>extensions</code>](#MixinSpecificationExtensions.extensions)  
<a name="ExternalDocs+extensionKeys"></a>

### externalDocs.extensionKeys() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>ExternalDocs</code>](#ExternalDocs)  
**Mixes**: [<code>extensionKeys</code>](#MixinSpecificationExtensions.extensionKeys)  
<a name="ExternalDocs+extKeys"></a>

### externalDocs.extKeys() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>ExternalDocs</code>](#ExternalDocs)  
**Mixes**: [<code>extKeys</code>](#MixinSpecificationExtensions.extKeys)  
<a name="ExternalDocs+hasExtension"></a>

### externalDocs.hasExtension(key) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>ExternalDocs</code>](#ExternalDocs)  
**Mixes**: [<code>hasExtension</code>](#MixinSpecificationExtensions.hasExtension)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="ExternalDocs+extension"></a>

### externalDocs.extension(key) ⇒ <code>Any</code>
**Kind**: instance method of [<code>ExternalDocs</code>](#ExternalDocs)  
**Mixes**: [<code>extension</code>](#MixinSpecificationExtensions.extension)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="ExternalDocs+hasExt"></a>

### externalDocs.hasExt(key) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>ExternalDocs</code>](#ExternalDocs)  
**Mixes**: [<code>hasExt</code>](#MixinSpecificationExtensions.hasExt)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="ExternalDocs+ext"></a>

### externalDocs.ext(key) ⇒ <code>Any</code>
**Kind**: instance method of [<code>ExternalDocs</code>](#ExternalDocs)  
**Mixes**: [<code>ext</code>](#MixinSpecificationExtensions.ext)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise throw an error. |

<a name="Base+json"></a>

### externalDocs.json() ⇒ <code>Any</code>
**Kind**: instance method of [<code>ExternalDocs</code>](#ExternalDocs)  
<a name="Info"></a>

## Info ⇐ [<code>Base</code>](#Base)
**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  
**Mixes**: [<code>MixinDescription</code>](#MixinDescription), [<code>MixinSpecificationExtensions</code>](#MixinSpecificationExtensions)  

* [Info](#Info) ⇐ [<code>Base</code>](#Base)
    * [new Info()](#new_Info_new)
    * [.title()](#Info+title) ⇒ <code>string</code>
    * [.version()](#Info+version) ⇒ <code>string</code>
    * [.hasTermsOfService()](#Info+hasTermsOfService) ⇒ <code>boolean</code>
    * [.termsOfService()](#Info+termsOfService) ⇒ <code>string</code> \| <code>null</code>
    * [.hasLicense()](#Info+hasLicense) ⇒ <code>boolean</code>
    * [.license()](#Info+license) ⇒ [<code>License</code>](#License) \| <code>null</code>
    * [.hasContact()](#Info+hasContact) ⇒ <code>boolean</code>
    * [.contact()](#Info+contact) ⇒ [<code>Contact</code>](#Contact) \| <code>null</code>
    * [.hasDescription()](#Info+hasDescription) ⇒ <code>boolean</code>
    * [.description()](#Info+description) ⇒ <code>string</code> \| <code>null</code>
    * [.hasExtensions()](#Info+hasExtensions) ⇒ <code>boolean</code>
    * [.extensions()](#Info+extensions) ⇒ <code>Object.&lt;string, Any&gt;</code> \| <code>null</code>
    * [.extensionKeys()](#Info+extensionKeys) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.extKeys()](#Info+extKeys) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasExtension(key)](#Info+hasExtension) ⇒ <code>boolean</code>
    * [.extension(key)](#Info+extension) ⇒ <code>Any</code>
    * [.hasExt(key)](#Info+hasExt) ⇒ <code>boolean</code>
    * [.ext(key)](#Info+ext) ⇒ <code>Any</code>
    * [.json()](#Base+json) ⇒ <code>Any</code>

<a name="new_Info_new"></a>

### new Info()
Implements functions to deal with the Info object.

<a name="Info+title"></a>

### info.title() ⇒ <code>string</code>
**Kind**: instance method of [<code>Info</code>](#Info)  
<a name="Info+version"></a>

### info.version() ⇒ <code>string</code>
**Kind**: instance method of [<code>Info</code>](#Info)  
<a name="Info+hasTermsOfService"></a>

### info.hasTermsOfService() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Info</code>](#Info)  
<a name="Info+termsOfService"></a>

### info.termsOfService() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>Info</code>](#Info)  
<a name="Info+hasLicense"></a>

### info.hasLicense() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Info</code>](#Info)  
<a name="Info+license"></a>

### info.license() ⇒ [<code>License</code>](#License) \| <code>null</code>
**Kind**: instance method of [<code>Info</code>](#Info)  
<a name="Info+hasContact"></a>

### info.hasContact() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Info</code>](#Info)  
<a name="Info+contact"></a>

### info.contact() ⇒ [<code>Contact</code>](#Contact) \| <code>null</code>
**Kind**: instance method of [<code>Info</code>](#Info)  
<a name="Info+hasDescription"></a>

### info.hasDescription() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Info</code>](#Info)  
**Mixes**: [<code>hasDescription</code>](#MixinDescription.hasDescription)  
<a name="Info+description"></a>

### info.description() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>Info</code>](#Info)  
**Mixes**: [<code>description</code>](#MixinDescription.description)  
<a name="Info+hasExtensions"></a>

### info.hasExtensions() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Info</code>](#Info)  
**Mixes**: [<code>hasExtensions</code>](#MixinSpecificationExtensions.hasExtensions)  
<a name="Info+extensions"></a>

### info.extensions() ⇒ <code>Object.&lt;string, Any&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>Info</code>](#Info)  
**Mixes**: [<code>extensions</code>](#MixinSpecificationExtensions.extensions)  
<a name="Info+extensionKeys"></a>

### info.extensionKeys() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>Info</code>](#Info)  
**Mixes**: [<code>extensionKeys</code>](#MixinSpecificationExtensions.extensionKeys)  
<a name="Info+extKeys"></a>

### info.extKeys() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>Info</code>](#Info)  
**Mixes**: [<code>extKeys</code>](#MixinSpecificationExtensions.extKeys)  
<a name="Info+hasExtension"></a>

### info.hasExtension(key) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Info</code>](#Info)  
**Mixes**: [<code>hasExtension</code>](#MixinSpecificationExtensions.hasExtension)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="Info+extension"></a>

### info.extension(key) ⇒ <code>Any</code>
**Kind**: instance method of [<code>Info</code>](#Info)  
**Mixes**: [<code>extension</code>](#MixinSpecificationExtensions.extension)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="Info+hasExt"></a>

### info.hasExt(key) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Info</code>](#Info)  
**Mixes**: [<code>hasExt</code>](#MixinSpecificationExtensions.hasExt)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="Info+ext"></a>

### info.ext(key) ⇒ <code>Any</code>
**Kind**: instance method of [<code>Info</code>](#Info)  
**Mixes**: [<code>ext</code>](#MixinSpecificationExtensions.ext)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise throw an error. |

<a name="Base+json"></a>

### info.json() ⇒ <code>Any</code>
**Kind**: instance method of [<code>Info</code>](#Info)  
<a name="License"></a>

## License ⇐ [<code>Base</code>](#Base)
**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  
**Mixes**: [<code>MixinSpecificationExtensions</code>](#MixinSpecificationExtensions)  

* [License](#License) ⇐ [<code>Base</code>](#Base)
    * [new License()](#new_License_new)
    * [.name()](#License+name) ⇒ <code>string</code>
    * [.hasUrl()](#License+hasUrl) ⇒ <code>boolean</code>
    * [.url()](#License+url) ⇒ <code>string</code> \| <code>null</code>
    * [.hasExtensions()](#License+hasExtensions) ⇒ <code>boolean</code>
    * [.extensions()](#License+extensions) ⇒ <code>Object.&lt;string, Any&gt;</code> \| <code>null</code>
    * [.extensionKeys()](#License+extensionKeys) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.extKeys()](#License+extKeys) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasExtension(key)](#License+hasExtension) ⇒ <code>boolean</code>
    * [.extension(key)](#License+extension) ⇒ <code>Any</code>
    * [.hasExt(key)](#License+hasExt) ⇒ <code>boolean</code>
    * [.ext(key)](#License+ext) ⇒ <code>Any</code>
    * [.json()](#Base+json) ⇒ <code>Any</code>

<a name="new_License_new"></a>

### new License()
Implements functions to deal with the License object.

<a name="License+name"></a>

### license.name() ⇒ <code>string</code>
**Kind**: instance method of [<code>License</code>](#License)  
<a name="License+hasUrl"></a>

### license.hasUrl() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>License</code>](#License)  
<a name="License+url"></a>

### license.url() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>License</code>](#License)  
<a name="License+hasExtensions"></a>

### license.hasExtensions() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>License</code>](#License)  
**Mixes**: [<code>hasExtensions</code>](#MixinSpecificationExtensions.hasExtensions)  
<a name="License+extensions"></a>

### license.extensions() ⇒ <code>Object.&lt;string, Any&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>License</code>](#License)  
**Mixes**: [<code>extensions</code>](#MixinSpecificationExtensions.extensions)  
<a name="License+extensionKeys"></a>

### license.extensionKeys() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>License</code>](#License)  
**Mixes**: [<code>extensionKeys</code>](#MixinSpecificationExtensions.extensionKeys)  
<a name="License+extKeys"></a>

### license.extKeys() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>License</code>](#License)  
**Mixes**: [<code>extKeys</code>](#MixinSpecificationExtensions.extKeys)  
<a name="License+hasExtension"></a>

### license.hasExtension(key) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>License</code>](#License)  
**Mixes**: [<code>hasExtension</code>](#MixinSpecificationExtensions.hasExtension)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="License+extension"></a>

### license.extension(key) ⇒ <code>Any</code>
**Kind**: instance method of [<code>License</code>](#License)  
**Mixes**: [<code>extension</code>](#MixinSpecificationExtensions.extension)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="License+hasExt"></a>

### license.hasExt(key) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>License</code>](#License)  
**Mixes**: [<code>hasExt</code>](#MixinSpecificationExtensions.hasExt)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="License+ext"></a>

### license.ext(key) ⇒ <code>Any</code>
**Kind**: instance method of [<code>License</code>](#License)  
**Mixes**: [<code>ext</code>](#MixinSpecificationExtensions.ext)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise throw an error. |

<a name="Base+json"></a>

### license.json() ⇒ <code>Any</code>
**Kind**: instance method of [<code>License</code>](#License)  
<a name="MessageTrait"></a>

## MessageTrait ⇐ [<code>Base</code>](#Base)
**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  

* [MessageTrait](#MessageTrait) ⇐ [<code>Base</code>](#Base)
    * [new MessageTrait()](#new_MessageTrait_new)
    * [.json()](#Base+json) ⇒ <code>Any</code>

<a name="new_MessageTrait_new"></a>

### new MessageTrait()
Implements functions to deal with a MessageTrait object.

<a name="Base+json"></a>

### messageTrait.json() ⇒ <code>Any</code>
**Kind**: instance method of [<code>MessageTrait</code>](#MessageTrait)  
<a name="MessageTraitable"></a>

## MessageTraitable ⇐ [<code>Base</code>](#Base)
Implements functions to deal with a the common properties that Message and MessageTrait objects have.

**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  
**Mixes**: [<code>MixinDescription</code>](#MixinDescription), [<code>MixinExternalDocs</code>](#MixinExternalDocs), [<code>MixinTags</code>](#MixinTags), [<code>MixinBindings</code>](#MixinBindings), [<code>MixinSpecificationExtensions</code>](#MixinSpecificationExtensions)  

* [MessageTraitable](#MessageTraitable) ⇐ [<code>Base</code>](#Base)
    * [.headers()](#MessageTraitable+headers) ⇒ [<code>Schema</code>](#Schema)
    * [.header(name)](#MessageTraitable+header) ⇒ [<code>Schema</code>](#Schema)
    * [.correlationId()](#MessageTraitable+correlationId) ⇒ [<code>CorrelationId</code>](#CorrelationId)
    * [.schemaFormat()](#MessageTraitable+schemaFormat) ⇒ <code>string</code>
    * [.contentType()](#MessageTraitable+contentType) ⇒ <code>string</code>
    * [.hasName()](#MessageTraitable+hasName) ⇒ <code>boolean</code>
    * [.name()](#MessageTraitable+name) ⇒ <code>string</code> \| <code>null</code>
    * [.hasTitle()](#MessageTraitable+hasTitle) ⇒ <code>boolean</code>
    * [.title()](#MessageTraitable+title) ⇒ <code>string</code> \| <code>null</code>
    * [.hasSummary()](#MessageTraitable+hasSummary) ⇒ <code>boolean</code>
    * [.summary()](#MessageTraitable+summary) ⇒ <code>string</code> \| <code>null</code>
    * [.hasExamples()](#MessageTraitable+hasExamples) ⇒ <code>boolean</code>
    * [.examples()](#MessageTraitable+examples) ⇒ <code>Array.&lt;Any&gt;</code> \| <code>null</code>
    * [.hasDescription()](#MessageTraitable+hasDescription) ⇒ <code>boolean</code>
    * [.description()](#MessageTraitable+description) ⇒ <code>string</code> \| <code>null</code>
    * [.hasExternalDocs()](#MessageTraitable+hasExternalDocs) ⇒ <code>boolean</code>
    * [.externalDocs()](#MessageTraitable+externalDocs) ⇒ [<code>ExternalDocs</code>](#ExternalDocs) \| <code>null</code>
    * [.hasTags()](#MessageTraitable+hasTags) ⇒ <code>boolean</code>
    * [.tags()](#MessageTraitable+tags) ⇒ [<code>Array.&lt;Tag&gt;</code>](#Tag) \| <code>null</code>
    * [.tagNames()](#MessageTraitable+tagNames) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasTag(name)](#MessageTraitable+hasTag) ⇒ <code>boolean</code>
    * [.tag(name)](#MessageTraitable+tag) ⇒ [<code>Tag</code>](#Tag) \| <code>null</code>
    * [.hasBindings()](#MessageTraitable+hasBindings) ⇒ <code>boolean</code>
    * [.bindings()](#MessageTraitable+bindings) ⇒ <code>Object</code> \| <code>null</code>
    * [.bindingProtocols()](#MessageTraitable+bindingProtocols) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasBinding(name)](#MessageTraitable+hasBinding) ⇒ <code>boolean</code>
    * [.binding(name)](#MessageTraitable+binding) ⇒ <code>Object</code> \| <code>null</code>
    * [.hasExtensions()](#MessageTraitable+hasExtensions) ⇒ <code>boolean</code>
    * [.extensions()](#MessageTraitable+extensions) ⇒ <code>Object.&lt;string, Any&gt;</code> \| <code>null</code>
    * [.extensionKeys()](#MessageTraitable+extensionKeys) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.extKeys()](#MessageTraitable+extKeys) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasExtension(key)](#MessageTraitable+hasExtension) ⇒ <code>boolean</code>
    * [.extension(key)](#MessageTraitable+extension) ⇒ <code>Any</code>
    * [.hasExt(key)](#MessageTraitable+hasExt) ⇒ <code>boolean</code>
    * [.ext(key)](#MessageTraitable+ext) ⇒ <code>Any</code>
    * [.json()](#Base+json) ⇒ <code>Any</code>

<a name="MessageTraitable+headers"></a>

### messageTraitable.headers() ⇒ [<code>Schema</code>](#Schema)
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
<a name="MessageTraitable+header"></a>

### messageTraitable.header(name) ⇒ [<code>Schema</code>](#Schema)
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the header. |

<a name="MessageTraitable+correlationId"></a>

### messageTraitable.correlationId() ⇒ [<code>CorrelationId</code>](#CorrelationId)
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
<a name="MessageTraitable+schemaFormat"></a>

### messageTraitable.schemaFormat() ⇒ <code>string</code>
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
<a name="MessageTraitable+contentType"></a>

### messageTraitable.contentType() ⇒ <code>string</code>
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
<a name="MessageTraitable+hasName"></a>

### messageTraitable.hasName() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
<a name="MessageTraitable+name"></a>

### messageTraitable.name() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
<a name="MessageTraitable+hasTitle"></a>

### messageTraitable.hasTitle() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
<a name="MessageTraitable+title"></a>

### messageTraitable.title() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
<a name="MessageTraitable+hasSummary"></a>

### messageTraitable.hasSummary() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
<a name="MessageTraitable+summary"></a>

### messageTraitable.summary() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
<a name="MessageTraitable+hasExamples"></a>

### messageTraitable.hasExamples() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
<a name="MessageTraitable+examples"></a>

### messageTraitable.examples() ⇒ <code>Array.&lt;Any&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
<a name="MessageTraitable+hasDescription"></a>

### messageTraitable.hasDescription() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
**Mixes**: [<code>hasDescription</code>](#MixinDescription.hasDescription)  
<a name="MessageTraitable+description"></a>

### messageTraitable.description() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
**Mixes**: [<code>description</code>](#MixinDescription.description)  
<a name="MessageTraitable+hasExternalDocs"></a>

### messageTraitable.hasExternalDocs() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
**Mixes**: [<code>hasExternalDocs</code>](#MixinExternalDocs.hasExternalDocs)  
<a name="MessageTraitable+externalDocs"></a>

### messageTraitable.externalDocs() ⇒ [<code>ExternalDocs</code>](#ExternalDocs) \| <code>null</code>
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
**Mixes**: [<code>externalDocs</code>](#MixinExternalDocs.externalDocs)  
<a name="MessageTraitable+hasTags"></a>

### messageTraitable.hasTags() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
**Mixes**: [<code>hasTags</code>](#MixinTags.hasTags)  
<a name="MessageTraitable+tags"></a>

### messageTraitable.tags() ⇒ [<code>Array.&lt;Tag&gt;</code>](#Tag) \| <code>null</code>
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
**Mixes**: [<code>tags</code>](#MixinTags.tags)  
<a name="MessageTraitable+tagNames"></a>

### messageTraitable.tagNames() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
**Mixes**: [<code>tagNames</code>](#MixinTags.tagNames)  
<a name="MessageTraitable+hasTag"></a>

### messageTraitable.hasTag(name) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
**Mixes**: [<code>hasTag</code>](#MixinTags.hasTag)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the tag. |

<a name="MessageTraitable+tag"></a>

### messageTraitable.tag(name) ⇒ [<code>Tag</code>](#Tag) \| <code>null</code>
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
**Mixes**: [<code>tag</code>](#MixinTags.tag)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the tag. |

<a name="MessageTraitable+hasBindings"></a>

### messageTraitable.hasBindings() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
**Mixes**: [<code>hasBindings</code>](#MixinBindings.hasBindings)  
<a name="MessageTraitable+bindings"></a>

### messageTraitable.bindings() ⇒ <code>Object</code> \| <code>null</code>
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
**Mixes**: [<code>bindings</code>](#MixinBindings.bindings)  
<a name="MessageTraitable+bindingProtocols"></a>

### messageTraitable.bindingProtocols() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
**Mixes**: [<code>bindingProtocols</code>](#MixinBindings.bindingProtocols)  
<a name="MessageTraitable+hasBinding"></a>

### messageTraitable.hasBinding(name) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
**Mixes**: [<code>hasBinding</code>](#MixinBindings.hasBinding)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the binding. |

<a name="MessageTraitable+binding"></a>

### messageTraitable.binding(name) ⇒ <code>Object</code> \| <code>null</code>
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
**Mixes**: [<code>binding</code>](#MixinBindings.binding)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the binding. |

<a name="MessageTraitable+hasExtensions"></a>

### messageTraitable.hasExtensions() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
**Mixes**: [<code>hasExtensions</code>](#MixinSpecificationExtensions.hasExtensions)  
<a name="MessageTraitable+extensions"></a>

### messageTraitable.extensions() ⇒ <code>Object.&lt;string, Any&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
**Mixes**: [<code>extensions</code>](#MixinSpecificationExtensions.extensions)  
<a name="MessageTraitable+extensionKeys"></a>

### messageTraitable.extensionKeys() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
**Mixes**: [<code>extensionKeys</code>](#MixinSpecificationExtensions.extensionKeys)  
<a name="MessageTraitable+extKeys"></a>

### messageTraitable.extKeys() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
**Mixes**: [<code>extKeys</code>](#MixinSpecificationExtensions.extKeys)  
<a name="MessageTraitable+hasExtension"></a>

### messageTraitable.hasExtension(key) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
**Mixes**: [<code>hasExtension</code>](#MixinSpecificationExtensions.hasExtension)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="MessageTraitable+extension"></a>

### messageTraitable.extension(key) ⇒ <code>Any</code>
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
**Mixes**: [<code>extension</code>](#MixinSpecificationExtensions.extension)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="MessageTraitable+hasExt"></a>

### messageTraitable.hasExt(key) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
**Mixes**: [<code>hasExt</code>](#MixinSpecificationExtensions.hasExt)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="MessageTraitable+ext"></a>

### messageTraitable.ext(key) ⇒ <code>Any</code>
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
**Mixes**: [<code>ext</code>](#MixinSpecificationExtensions.ext)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise throw an error. |

<a name="Base+json"></a>

### messageTraitable.json() ⇒ <code>Any</code>
**Kind**: instance method of [<code>MessageTraitable</code>](#MessageTraitable)  
<a name="Message"></a>

## Message ⇐ [<code>MessageTraitable</code>](#MessageTraitable)
Implements functions to deal with a Message object.

**Kind**: global class  
**Extends**: [<code>MessageTraitable</code>](#MessageTraitable)  

* [Message](#Message) ⇐ [<code>MessageTraitable</code>](#MessageTraitable)
    * [.uid()](#Message+uid) ⇒ <code>string</code>
    * [.payload()](#Message+payload) ⇒ [<code>Schema</code>](#Schema)
    * [.originalPayload()](#Message+originalPayload) ⇒ <code>any</code>
    * [.originalSchemaFormat()](#Message+originalSchemaFormat) ⇒ <code>string</code>
    * [.headers()](#MessageTraitable+headers) ⇒ [<code>Schema</code>](#Schema)
    * [.header(name)](#MessageTraitable+header) ⇒ [<code>Schema</code>](#Schema)
    * [.correlationId()](#MessageTraitable+correlationId) ⇒ [<code>CorrelationId</code>](#CorrelationId)
    * [.schemaFormat()](#MessageTraitable+schemaFormat) ⇒ <code>string</code>
    * [.contentType()](#MessageTraitable+contentType) ⇒ <code>string</code>
    * [.hasName()](#MessageTraitable+hasName) ⇒ <code>boolean</code>
    * [.name()](#MessageTraitable+name) ⇒ <code>string</code> \| <code>null</code>
    * [.hasTitle()](#MessageTraitable+hasTitle) ⇒ <code>boolean</code>
    * [.title()](#MessageTraitable+title) ⇒ <code>string</code> \| <code>null</code>
    * [.hasSummary()](#MessageTraitable+hasSummary) ⇒ <code>boolean</code>
    * [.summary()](#MessageTraitable+summary) ⇒ <code>string</code> \| <code>null</code>
    * [.hasExamples()](#MessageTraitable+hasExamples) ⇒ <code>boolean</code>
    * [.examples()](#MessageTraitable+examples) ⇒ <code>Array.&lt;Any&gt;</code> \| <code>null</code>
    * [.hasDescription()](#MessageTraitable+hasDescription) ⇒ <code>boolean</code>
    * [.description()](#MessageTraitable+description) ⇒ <code>string</code> \| <code>null</code>
    * [.hasExternalDocs()](#MessageTraitable+hasExternalDocs) ⇒ <code>boolean</code>
    * [.externalDocs()](#MessageTraitable+externalDocs) ⇒ [<code>ExternalDocs</code>](#ExternalDocs) \| <code>null</code>
    * [.hasTags()](#MessageTraitable+hasTags) ⇒ <code>boolean</code>
    * [.tags()](#MessageTraitable+tags) ⇒ [<code>Array.&lt;Tag&gt;</code>](#Tag) \| <code>null</code>
    * [.tagNames()](#MessageTraitable+tagNames) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasTag(name)](#MessageTraitable+hasTag) ⇒ <code>boolean</code>
    * [.tag(name)](#MessageTraitable+tag) ⇒ [<code>Tag</code>](#Tag) \| <code>null</code>
    * [.hasBindings()](#MessageTraitable+hasBindings) ⇒ <code>boolean</code>
    * [.bindings()](#MessageTraitable+bindings) ⇒ <code>Object</code> \| <code>null</code>
    * [.bindingProtocols()](#MessageTraitable+bindingProtocols) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasBinding(name)](#MessageTraitable+hasBinding) ⇒ <code>boolean</code>
    * [.binding(name)](#MessageTraitable+binding) ⇒ <code>Object</code> \| <code>null</code>
    * [.hasExtensions()](#MessageTraitable+hasExtensions) ⇒ <code>boolean</code>
    * [.extensions()](#MessageTraitable+extensions) ⇒ <code>Object.&lt;string, Any&gt;</code> \| <code>null</code>
    * [.extensionKeys()](#MessageTraitable+extensionKeys) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.extKeys()](#MessageTraitable+extKeys) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasExtension(key)](#MessageTraitable+hasExtension) ⇒ <code>boolean</code>
    * [.extension(key)](#MessageTraitable+extension) ⇒ <code>Any</code>
    * [.hasExt(key)](#MessageTraitable+hasExt) ⇒ <code>boolean</code>
    * [.ext(key)](#MessageTraitable+ext) ⇒ <code>Any</code>
    * [.json()](#Base+json) ⇒ <code>Any</code>

<a name="Message+uid"></a>

### message.uid() ⇒ <code>string</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
<a name="Message+payload"></a>

### message.payload() ⇒ [<code>Schema</code>](#Schema)
**Kind**: instance method of [<code>Message</code>](#Message)  
<a name="Message+originalPayload"></a>

### message.originalPayload() ⇒ <code>any</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
<a name="Message+originalSchemaFormat"></a>

### message.originalSchemaFormat() ⇒ <code>string</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
<a name="MessageTraitable+headers"></a>

### message.headers() ⇒ [<code>Schema</code>](#Schema)
**Kind**: instance method of [<code>Message</code>](#Message)  
<a name="MessageTraitable+header"></a>

### message.header(name) ⇒ [<code>Schema</code>](#Schema)
**Kind**: instance method of [<code>Message</code>](#Message)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the header. |

<a name="MessageTraitable+correlationId"></a>

### message.correlationId() ⇒ [<code>CorrelationId</code>](#CorrelationId)
**Kind**: instance method of [<code>Message</code>](#Message)  
<a name="MessageTraitable+schemaFormat"></a>

### message.schemaFormat() ⇒ <code>string</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
<a name="MessageTraitable+contentType"></a>

### message.contentType() ⇒ <code>string</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
<a name="MessageTraitable+hasName"></a>

### message.hasName() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
<a name="MessageTraitable+name"></a>

### message.name() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
<a name="MessageTraitable+hasTitle"></a>

### message.hasTitle() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
<a name="MessageTraitable+title"></a>

### message.title() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
<a name="MessageTraitable+hasSummary"></a>

### message.hasSummary() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
<a name="MessageTraitable+summary"></a>

### message.summary() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
<a name="MessageTraitable+hasExamples"></a>

### message.hasExamples() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
<a name="MessageTraitable+examples"></a>

### message.examples() ⇒ <code>Array.&lt;Any&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
<a name="MessageTraitable+hasDescription"></a>

### message.hasDescription() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
**Mixes**: [<code>hasDescription</code>](#MixinDescription.hasDescription)  
<a name="MessageTraitable+description"></a>

### message.description() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
**Mixes**: [<code>description</code>](#MixinDescription.description)  
<a name="MessageTraitable+hasExternalDocs"></a>

### message.hasExternalDocs() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
**Mixes**: [<code>hasExternalDocs</code>](#MixinExternalDocs.hasExternalDocs)  
<a name="MessageTraitable+externalDocs"></a>

### message.externalDocs() ⇒ [<code>ExternalDocs</code>](#ExternalDocs) \| <code>null</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
**Mixes**: [<code>externalDocs</code>](#MixinExternalDocs.externalDocs)  
<a name="MessageTraitable+hasTags"></a>

### message.hasTags() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
**Mixes**: [<code>hasTags</code>](#MixinTags.hasTags)  
<a name="MessageTraitable+tags"></a>

### message.tags() ⇒ [<code>Array.&lt;Tag&gt;</code>](#Tag) \| <code>null</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
**Mixes**: [<code>tags</code>](#MixinTags.tags)  
<a name="MessageTraitable+tagNames"></a>

### message.tagNames() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
**Mixes**: [<code>tagNames</code>](#MixinTags.tagNames)  
<a name="MessageTraitable+hasTag"></a>

### message.hasTag(name) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
**Mixes**: [<code>hasTag</code>](#MixinTags.hasTag)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the tag. |

<a name="MessageTraitable+tag"></a>

### message.tag(name) ⇒ [<code>Tag</code>](#Tag) \| <code>null</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
**Mixes**: [<code>tag</code>](#MixinTags.tag)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the tag. |

<a name="MessageTraitable+hasBindings"></a>

### message.hasBindings() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
**Mixes**: [<code>hasBindings</code>](#MixinBindings.hasBindings)  
<a name="MessageTraitable+bindings"></a>

### message.bindings() ⇒ <code>Object</code> \| <code>null</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
**Mixes**: [<code>bindings</code>](#MixinBindings.bindings)  
<a name="MessageTraitable+bindingProtocols"></a>

### message.bindingProtocols() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
**Mixes**: [<code>bindingProtocols</code>](#MixinBindings.bindingProtocols)  
<a name="MessageTraitable+hasBinding"></a>

### message.hasBinding(name) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
**Mixes**: [<code>hasBinding</code>](#MixinBindings.hasBinding)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the binding. |

<a name="MessageTraitable+binding"></a>

### message.binding(name) ⇒ <code>Object</code> \| <code>null</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
**Mixes**: [<code>binding</code>](#MixinBindings.binding)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the binding. |

<a name="MessageTraitable+hasExtensions"></a>

### message.hasExtensions() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
**Mixes**: [<code>hasExtensions</code>](#MixinSpecificationExtensions.hasExtensions)  
<a name="MessageTraitable+extensions"></a>

### message.extensions() ⇒ <code>Object.&lt;string, Any&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
**Mixes**: [<code>extensions</code>](#MixinSpecificationExtensions.extensions)  
<a name="MessageTraitable+extensionKeys"></a>

### message.extensionKeys() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
**Mixes**: [<code>extensionKeys</code>](#MixinSpecificationExtensions.extensionKeys)  
<a name="MessageTraitable+extKeys"></a>

### message.extKeys() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
**Mixes**: [<code>extKeys</code>](#MixinSpecificationExtensions.extKeys)  
<a name="MessageTraitable+hasExtension"></a>

### message.hasExtension(key) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
**Mixes**: [<code>hasExtension</code>](#MixinSpecificationExtensions.hasExtension)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="MessageTraitable+extension"></a>

### message.extension(key) ⇒ <code>Any</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
**Mixes**: [<code>extension</code>](#MixinSpecificationExtensions.extension)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="MessageTraitable+hasExt"></a>

### message.hasExt(key) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
**Mixes**: [<code>hasExt</code>](#MixinSpecificationExtensions.hasExt)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="MessageTraitable+ext"></a>

### message.ext(key) ⇒ <code>Any</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
**Mixes**: [<code>ext</code>](#MixinSpecificationExtensions.ext)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise throw an error. |

<a name="Base+json"></a>

### message.json() ⇒ <code>Any</code>
**Kind**: instance method of [<code>Message</code>](#Message)  
<a name="OAuthFlow"></a>

## OAuthFlow ⇐ [<code>Base</code>](#Base)
Implements functions to deal with a OAuthFlow object.

**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  

* [OAuthFlow](#OAuthFlow) ⇐ [<code>Base</code>](#Base)
    * [.authorizationUrl()](#OAuthFlow+authorizationUrl) ⇒ <code>string</code>
    * [.tokenUrl()](#OAuthFlow+tokenUrl) ⇒ <code>string</code>
    * [.refreshUrl()](#OAuthFlow+refreshUrl) ⇒ <code>string</code>
    * [.scopes()](#OAuthFlow+scopes) ⇒ <code>Object.&lt;string, string&gt;</code>
    * [.json()](#Base+json) ⇒ <code>Any</code>

<a name="OAuthFlow+authorizationUrl"></a>

### oAuthFlow.authorizationUrl() ⇒ <code>string</code>
**Kind**: instance method of [<code>OAuthFlow</code>](#OAuthFlow)  
<a name="OAuthFlow+tokenUrl"></a>

### oAuthFlow.tokenUrl() ⇒ <code>string</code>
**Kind**: instance method of [<code>OAuthFlow</code>](#OAuthFlow)  
<a name="OAuthFlow+refreshUrl"></a>

### oAuthFlow.refreshUrl() ⇒ <code>string</code>
**Kind**: instance method of [<code>OAuthFlow</code>](#OAuthFlow)  
<a name="OAuthFlow+scopes"></a>

### oAuthFlow.scopes() ⇒ <code>Object.&lt;string, string&gt;</code>
**Kind**: instance method of [<code>OAuthFlow</code>](#OAuthFlow)  
<a name="Base+json"></a>

### oAuthFlow.json() ⇒ <code>Any</code>
**Kind**: instance method of [<code>OAuthFlow</code>](#OAuthFlow)  
<a name="OperationTrait"></a>

## OperationTrait ⇐ [<code>OperationTraitable</code>](#OperationTraitable)
**Kind**: global class  
**Extends**: [<code>OperationTraitable</code>](#OperationTraitable)  

* [OperationTrait](#OperationTrait) ⇐ [<code>OperationTraitable</code>](#OperationTraitable)
    * [new OperationTrait()](#new_OperationTrait_new)
    * [.hasId()](#OperationTraitable+hasId) ⇒ <code>boolean</code>
    * [.id()](#OperationTraitable+id) ⇒ <code>string</code> \| <code>null</code>
    * [.hasSummary()](#OperationTraitable+hasSummary) ⇒ <code>boolean</code>
    * [.summary()](#OperationTraitable+summary) ⇒ <code>string</code> \| <code>null</code>
    * [.hasDescription()](#OperationTraitable+hasDescription) ⇒ <code>boolean</code>
    * [.description()](#OperationTraitable+description) ⇒ <code>string</code> \| <code>null</code>
    * [.hasExternalDocs()](#OperationTraitable+hasExternalDocs) ⇒ <code>boolean</code>
    * [.externalDocs()](#OperationTraitable+externalDocs) ⇒ [<code>ExternalDocs</code>](#ExternalDocs) \| <code>null</code>
    * [.hasTags()](#OperationTraitable+hasTags) ⇒ <code>boolean</code>
    * [.tags()](#OperationTraitable+tags) ⇒ [<code>Array.&lt;Tag&gt;</code>](#Tag) \| <code>null</code>
    * [.tagNames()](#OperationTraitable+tagNames) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasTag(name)](#OperationTraitable+hasTag) ⇒ <code>boolean</code>
    * [.tag(name)](#OperationTraitable+tag) ⇒ [<code>Tag</code>](#Tag) \| <code>null</code>
    * [.hasBindings()](#OperationTraitable+hasBindings) ⇒ <code>boolean</code>
    * [.bindings()](#OperationTraitable+bindings) ⇒ <code>Object</code> \| <code>null</code>
    * [.bindingProtocols()](#OperationTraitable+bindingProtocols) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasBinding(name)](#OperationTraitable+hasBinding) ⇒ <code>boolean</code>
    * [.binding(name)](#OperationTraitable+binding) ⇒ <code>Object</code> \| <code>null</code>
    * [.hasExtensions()](#OperationTraitable+hasExtensions) ⇒ <code>boolean</code>
    * [.extensions()](#OperationTraitable+extensions) ⇒ <code>Object.&lt;string, Any&gt;</code> \| <code>null</code>
    * [.extensionKeys()](#OperationTraitable+extensionKeys) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.extKeys()](#OperationTraitable+extKeys) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasExtension(key)](#OperationTraitable+hasExtension) ⇒ <code>boolean</code>
    * [.extension(key)](#OperationTraitable+extension) ⇒ <code>Any</code>
    * [.hasExt(key)](#OperationTraitable+hasExt) ⇒ <code>boolean</code>
    * [.ext(key)](#OperationTraitable+ext) ⇒ <code>Any</code>

<a name="new_OperationTrait_new"></a>

### new OperationTrait()
Implements functions to deal with a OperationTrait object.

<a name="OperationTraitable+hasId"></a>

### operationTrait.hasId() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>OperationTrait</code>](#OperationTrait)  
<a name="OperationTraitable+id"></a>

### operationTrait.id() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>OperationTrait</code>](#OperationTrait)  
<a name="OperationTraitable+hasSummary"></a>

### operationTrait.hasSummary() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>OperationTrait</code>](#OperationTrait)  
<a name="OperationTraitable+summary"></a>

### operationTrait.summary() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>OperationTrait</code>](#OperationTrait)  
<a name="OperationTraitable+hasDescription"></a>

### operationTrait.hasDescription() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>OperationTrait</code>](#OperationTrait)  
**Mixes**: [<code>hasDescription</code>](#MixinDescription.hasDescription)  
<a name="OperationTraitable+description"></a>

### operationTrait.description() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>OperationTrait</code>](#OperationTrait)  
**Mixes**: [<code>description</code>](#MixinDescription.description)  
<a name="OperationTraitable+hasExternalDocs"></a>

### operationTrait.hasExternalDocs() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>OperationTrait</code>](#OperationTrait)  
**Mixes**: [<code>hasExternalDocs</code>](#MixinExternalDocs.hasExternalDocs)  
<a name="OperationTraitable+externalDocs"></a>

### operationTrait.externalDocs() ⇒ [<code>ExternalDocs</code>](#ExternalDocs) \| <code>null</code>
**Kind**: instance method of [<code>OperationTrait</code>](#OperationTrait)  
**Mixes**: [<code>externalDocs</code>](#MixinExternalDocs.externalDocs)  
<a name="OperationTraitable+hasTags"></a>

### operationTrait.hasTags() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>OperationTrait</code>](#OperationTrait)  
**Mixes**: [<code>hasTags</code>](#MixinTags.hasTags)  
<a name="OperationTraitable+tags"></a>

### operationTrait.tags() ⇒ [<code>Array.&lt;Tag&gt;</code>](#Tag) \| <code>null</code>
**Kind**: instance method of [<code>OperationTrait</code>](#OperationTrait)  
**Mixes**: [<code>tags</code>](#MixinTags.tags)  
<a name="OperationTraitable+tagNames"></a>

### operationTrait.tagNames() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>OperationTrait</code>](#OperationTrait)  
**Mixes**: [<code>tagNames</code>](#MixinTags.tagNames)  
<a name="OperationTraitable+hasTag"></a>

### operationTrait.hasTag(name) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>OperationTrait</code>](#OperationTrait)  
**Mixes**: [<code>hasTag</code>](#MixinTags.hasTag)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the tag. |

<a name="OperationTraitable+tag"></a>

### operationTrait.tag(name) ⇒ [<code>Tag</code>](#Tag) \| <code>null</code>
**Kind**: instance method of [<code>OperationTrait</code>](#OperationTrait)  
**Mixes**: [<code>tag</code>](#MixinTags.tag)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the tag. |

<a name="OperationTraitable+hasBindings"></a>

### operationTrait.hasBindings() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>OperationTrait</code>](#OperationTrait)  
**Mixes**: [<code>hasBindings</code>](#MixinBindings.hasBindings)  
<a name="OperationTraitable+bindings"></a>

### operationTrait.bindings() ⇒ <code>Object</code> \| <code>null</code>
**Kind**: instance method of [<code>OperationTrait</code>](#OperationTrait)  
**Mixes**: [<code>bindings</code>](#MixinBindings.bindings)  
<a name="OperationTraitable+bindingProtocols"></a>

### operationTrait.bindingProtocols() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>OperationTrait</code>](#OperationTrait)  
**Mixes**: [<code>bindingProtocols</code>](#MixinBindings.bindingProtocols)  
<a name="OperationTraitable+hasBinding"></a>

### operationTrait.hasBinding(name) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>OperationTrait</code>](#OperationTrait)  
**Mixes**: [<code>hasBinding</code>](#MixinBindings.hasBinding)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the binding. |

<a name="OperationTraitable+binding"></a>

### operationTrait.binding(name) ⇒ <code>Object</code> \| <code>null</code>
**Kind**: instance method of [<code>OperationTrait</code>](#OperationTrait)  
**Mixes**: [<code>binding</code>](#MixinBindings.binding)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the binding. |

<a name="OperationTraitable+hasExtensions"></a>

### operationTrait.hasExtensions() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>OperationTrait</code>](#OperationTrait)  
**Mixes**: [<code>hasExtensions</code>](#MixinSpecificationExtensions.hasExtensions)  
<a name="OperationTraitable+extensions"></a>

### operationTrait.extensions() ⇒ <code>Object.&lt;string, Any&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>OperationTrait</code>](#OperationTrait)  
**Mixes**: [<code>extensions</code>](#MixinSpecificationExtensions.extensions)  
<a name="OperationTraitable+extensionKeys"></a>

### operationTrait.extensionKeys() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>OperationTrait</code>](#OperationTrait)  
**Mixes**: [<code>extensionKeys</code>](#MixinSpecificationExtensions.extensionKeys)  
<a name="OperationTraitable+extKeys"></a>

### operationTrait.extKeys() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>OperationTrait</code>](#OperationTrait)  
**Mixes**: [<code>extKeys</code>](#MixinSpecificationExtensions.extKeys)  
<a name="OperationTraitable+hasExtension"></a>

### operationTrait.hasExtension(key) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>OperationTrait</code>](#OperationTrait)  
**Mixes**: [<code>hasExtension</code>](#MixinSpecificationExtensions.hasExtension)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="OperationTraitable+extension"></a>

### operationTrait.extension(key) ⇒ <code>Any</code>
**Kind**: instance method of [<code>OperationTrait</code>](#OperationTrait)  
**Mixes**: [<code>extension</code>](#MixinSpecificationExtensions.extension)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="OperationTraitable+hasExt"></a>

### operationTrait.hasExt(key) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>OperationTrait</code>](#OperationTrait)  
**Mixes**: [<code>hasExt</code>](#MixinSpecificationExtensions.hasExt)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="OperationTraitable+ext"></a>

### operationTrait.ext(key) ⇒ <code>Any</code>
**Kind**: instance method of [<code>OperationTrait</code>](#OperationTrait)  
**Mixes**: [<code>ext</code>](#MixinSpecificationExtensions.ext)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise throw an error. |

<a name="OperationTraitable"></a>

## OperationTraitable ⇐ [<code>Base</code>](#Base)
**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  
**Mixes**: [<code>MixinDescription</code>](#MixinDescription), [<code>MixinExternalDocs</code>](#MixinExternalDocs), [<code>MixinTags</code>](#MixinTags), [<code>MixinBindings</code>](#MixinBindings), [<code>MixinSpecificationExtensions</code>](#MixinSpecificationExtensions)  

* [OperationTraitable](#OperationTraitable) ⇐ [<code>Base</code>](#Base)
    * [new OperationTraitable()](#new_OperationTraitable_new)
    * [.hasId()](#OperationTraitable+hasId) ⇒ <code>boolean</code>
    * [.id()](#OperationTraitable+id) ⇒ <code>string</code> \| <code>null</code>
    * [.hasSummary()](#OperationTraitable+hasSummary) ⇒ <code>boolean</code>
    * [.summary()](#OperationTraitable+summary) ⇒ <code>string</code> \| <code>null</code>
    * [.hasDescription()](#OperationTraitable+hasDescription) ⇒ <code>boolean</code>
    * [.description()](#OperationTraitable+description) ⇒ <code>string</code> \| <code>null</code>
    * [.hasExternalDocs()](#OperationTraitable+hasExternalDocs) ⇒ <code>boolean</code>
    * [.externalDocs()](#OperationTraitable+externalDocs) ⇒ [<code>ExternalDocs</code>](#ExternalDocs) \| <code>null</code>
    * [.hasTags()](#OperationTraitable+hasTags) ⇒ <code>boolean</code>
    * [.tags()](#OperationTraitable+tags) ⇒ [<code>Array.&lt;Tag&gt;</code>](#Tag) \| <code>null</code>
    * [.tagNames()](#OperationTraitable+tagNames) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasTag(name)](#OperationTraitable+hasTag) ⇒ <code>boolean</code>
    * [.tag(name)](#OperationTraitable+tag) ⇒ [<code>Tag</code>](#Tag) \| <code>null</code>
    * [.hasBindings()](#OperationTraitable+hasBindings) ⇒ <code>boolean</code>
    * [.bindings()](#OperationTraitable+bindings) ⇒ <code>Object</code> \| <code>null</code>
    * [.bindingProtocols()](#OperationTraitable+bindingProtocols) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasBinding(name)](#OperationTraitable+hasBinding) ⇒ <code>boolean</code>
    * [.binding(name)](#OperationTraitable+binding) ⇒ <code>Object</code> \| <code>null</code>
    * [.hasExtensions()](#OperationTraitable+hasExtensions) ⇒ <code>boolean</code>
    * [.extensions()](#OperationTraitable+extensions) ⇒ <code>Object.&lt;string, Any&gt;</code> \| <code>null</code>
    * [.extensionKeys()](#OperationTraitable+extensionKeys) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.extKeys()](#OperationTraitable+extKeys) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasExtension(key)](#OperationTraitable+hasExtension) ⇒ <code>boolean</code>
    * [.extension(key)](#OperationTraitable+extension) ⇒ <code>Any</code>
    * [.hasExt(key)](#OperationTraitable+hasExt) ⇒ <code>boolean</code>
    * [.ext(key)](#OperationTraitable+ext) ⇒ <code>Any</code>
    * [.json()](#Base+json) ⇒ <code>Any</code>

<a name="new_OperationTraitable_new"></a>

### new OperationTraitable()
Implements functions to deal with the common properties Operation and OperationTrait object have.

<a name="OperationTraitable+hasId"></a>

### operationTraitable.hasId() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>OperationTraitable</code>](#OperationTraitable)  
<a name="OperationTraitable+id"></a>

### operationTraitable.id() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>OperationTraitable</code>](#OperationTraitable)  
<a name="OperationTraitable+hasSummary"></a>

### operationTraitable.hasSummary() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>OperationTraitable</code>](#OperationTraitable)  
<a name="OperationTraitable+summary"></a>

### operationTraitable.summary() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>OperationTraitable</code>](#OperationTraitable)  
<a name="OperationTraitable+hasDescription"></a>

### operationTraitable.hasDescription() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>OperationTraitable</code>](#OperationTraitable)  
**Mixes**: [<code>hasDescription</code>](#MixinDescription.hasDescription)  
<a name="OperationTraitable+description"></a>

### operationTraitable.description() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>OperationTraitable</code>](#OperationTraitable)  
**Mixes**: [<code>description</code>](#MixinDescription.description)  
<a name="OperationTraitable+hasExternalDocs"></a>

### operationTraitable.hasExternalDocs() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>OperationTraitable</code>](#OperationTraitable)  
**Mixes**: [<code>hasExternalDocs</code>](#MixinExternalDocs.hasExternalDocs)  
<a name="OperationTraitable+externalDocs"></a>

### operationTraitable.externalDocs() ⇒ [<code>ExternalDocs</code>](#ExternalDocs) \| <code>null</code>
**Kind**: instance method of [<code>OperationTraitable</code>](#OperationTraitable)  
**Mixes**: [<code>externalDocs</code>](#MixinExternalDocs.externalDocs)  
<a name="OperationTraitable+hasTags"></a>

### operationTraitable.hasTags() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>OperationTraitable</code>](#OperationTraitable)  
**Mixes**: [<code>hasTags</code>](#MixinTags.hasTags)  
<a name="OperationTraitable+tags"></a>

### operationTraitable.tags() ⇒ [<code>Array.&lt;Tag&gt;</code>](#Tag) \| <code>null</code>
**Kind**: instance method of [<code>OperationTraitable</code>](#OperationTraitable)  
**Mixes**: [<code>tags</code>](#MixinTags.tags)  
<a name="OperationTraitable+tagNames"></a>

### operationTraitable.tagNames() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>OperationTraitable</code>](#OperationTraitable)  
**Mixes**: [<code>tagNames</code>](#MixinTags.tagNames)  
<a name="OperationTraitable+hasTag"></a>

### operationTraitable.hasTag(name) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>OperationTraitable</code>](#OperationTraitable)  
**Mixes**: [<code>hasTag</code>](#MixinTags.hasTag)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the tag. |

<a name="OperationTraitable+tag"></a>

### operationTraitable.tag(name) ⇒ [<code>Tag</code>](#Tag) \| <code>null</code>
**Kind**: instance method of [<code>OperationTraitable</code>](#OperationTraitable)  
**Mixes**: [<code>tag</code>](#MixinTags.tag)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the tag. |

<a name="OperationTraitable+hasBindings"></a>

### operationTraitable.hasBindings() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>OperationTraitable</code>](#OperationTraitable)  
**Mixes**: [<code>hasBindings</code>](#MixinBindings.hasBindings)  
<a name="OperationTraitable+bindings"></a>

### operationTraitable.bindings() ⇒ <code>Object</code> \| <code>null</code>
**Kind**: instance method of [<code>OperationTraitable</code>](#OperationTraitable)  
**Mixes**: [<code>bindings</code>](#MixinBindings.bindings)  
<a name="OperationTraitable+bindingProtocols"></a>

### operationTraitable.bindingProtocols() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>OperationTraitable</code>](#OperationTraitable)  
**Mixes**: [<code>bindingProtocols</code>](#MixinBindings.bindingProtocols)  
<a name="OperationTraitable+hasBinding"></a>

### operationTraitable.hasBinding(name) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>OperationTraitable</code>](#OperationTraitable)  
**Mixes**: [<code>hasBinding</code>](#MixinBindings.hasBinding)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the binding. |

<a name="OperationTraitable+binding"></a>

### operationTraitable.binding(name) ⇒ <code>Object</code> \| <code>null</code>
**Kind**: instance method of [<code>OperationTraitable</code>](#OperationTraitable)  
**Mixes**: [<code>binding</code>](#MixinBindings.binding)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the binding. |

<a name="OperationTraitable+hasExtensions"></a>

### operationTraitable.hasExtensions() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>OperationTraitable</code>](#OperationTraitable)  
**Mixes**: [<code>hasExtensions</code>](#MixinSpecificationExtensions.hasExtensions)  
<a name="OperationTraitable+extensions"></a>

### operationTraitable.extensions() ⇒ <code>Object.&lt;string, Any&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>OperationTraitable</code>](#OperationTraitable)  
**Mixes**: [<code>extensions</code>](#MixinSpecificationExtensions.extensions)  
<a name="OperationTraitable+extensionKeys"></a>

### operationTraitable.extensionKeys() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>OperationTraitable</code>](#OperationTraitable)  
**Mixes**: [<code>extensionKeys</code>](#MixinSpecificationExtensions.extensionKeys)  
<a name="OperationTraitable+extKeys"></a>

### operationTraitable.extKeys() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>OperationTraitable</code>](#OperationTraitable)  
**Mixes**: [<code>extKeys</code>](#MixinSpecificationExtensions.extKeys)  
<a name="OperationTraitable+hasExtension"></a>

### operationTraitable.hasExtension(key) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>OperationTraitable</code>](#OperationTraitable)  
**Mixes**: [<code>hasExtension</code>](#MixinSpecificationExtensions.hasExtension)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="OperationTraitable+extension"></a>

### operationTraitable.extension(key) ⇒ <code>Any</code>
**Kind**: instance method of [<code>OperationTraitable</code>](#OperationTraitable)  
**Mixes**: [<code>extension</code>](#MixinSpecificationExtensions.extension)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="OperationTraitable+hasExt"></a>

### operationTraitable.hasExt(key) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>OperationTraitable</code>](#OperationTraitable)  
**Mixes**: [<code>hasExt</code>](#MixinSpecificationExtensions.hasExt)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="OperationTraitable+ext"></a>

### operationTraitable.ext(key) ⇒ <code>Any</code>
**Kind**: instance method of [<code>OperationTraitable</code>](#OperationTraitable)  
**Mixes**: [<code>ext</code>](#MixinSpecificationExtensions.ext)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise throw an error. |

<a name="Base+json"></a>

### operationTraitable.json() ⇒ <code>Any</code>
**Kind**: instance method of [<code>OperationTraitable</code>](#OperationTraitable)  
<a name="Operation"></a>

## Operation ⇐ [<code>OperationTraitable</code>](#OperationTraitable)
**Kind**: global class  
**Extends**: [<code>OperationTraitable</code>](#OperationTraitable)  

* [Operation](#Operation) ⇐ [<code>OperationTraitable</code>](#OperationTraitable)
    * [new Operation()](#new_Operation_new)
    * [.hasSingleMessage()](#Operation+hasSingleMessage) ⇒ <code>boolean</code>
    * [.hasMultipleMessages()](#Operation+hasMultipleMessages) ⇒ <code>boolean</code>
    * [.messages()](#Operation+messages) ⇒ [<code>Array.&lt;Message&gt;</code>](#Message) \| <code>null</code>
    * [.message()](#Operation+message) ⇒ [<code>Message</code>](#Message) \| <code>null</code>
    * [.hasId()](#OperationTraitable+hasId) ⇒ <code>boolean</code>
    * [.id()](#OperationTraitable+id) ⇒ <code>string</code> \| <code>null</code>
    * [.hasSummary()](#OperationTraitable+hasSummary) ⇒ <code>boolean</code>
    * [.summary()](#OperationTraitable+summary) ⇒ <code>string</code> \| <code>null</code>
    * [.hasDescription()](#OperationTraitable+hasDescription) ⇒ <code>boolean</code>
    * [.description()](#OperationTraitable+description) ⇒ <code>string</code> \| <code>null</code>
    * [.hasExternalDocs()](#OperationTraitable+hasExternalDocs) ⇒ <code>boolean</code>
    * [.externalDocs()](#OperationTraitable+externalDocs) ⇒ [<code>ExternalDocs</code>](#ExternalDocs) \| <code>null</code>
    * [.hasTags()](#OperationTraitable+hasTags) ⇒ <code>boolean</code>
    * [.tags()](#OperationTraitable+tags) ⇒ [<code>Array.&lt;Tag&gt;</code>](#Tag) \| <code>null</code>
    * [.tagNames()](#OperationTraitable+tagNames) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasTag(name)](#OperationTraitable+hasTag) ⇒ <code>boolean</code>
    * [.tag(name)](#OperationTraitable+tag) ⇒ [<code>Tag</code>](#Tag) \| <code>null</code>
    * [.hasBindings()](#OperationTraitable+hasBindings) ⇒ <code>boolean</code>
    * [.bindings()](#OperationTraitable+bindings) ⇒ <code>Object</code> \| <code>null</code>
    * [.bindingProtocols()](#OperationTraitable+bindingProtocols) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasBinding(name)](#OperationTraitable+hasBinding) ⇒ <code>boolean</code>
    * [.binding(name)](#OperationTraitable+binding) ⇒ <code>Object</code> \| <code>null</code>
    * [.hasExtensions()](#OperationTraitable+hasExtensions) ⇒ <code>boolean</code>
    * [.extensions()](#OperationTraitable+extensions) ⇒ <code>Object.&lt;string, Any&gt;</code> \| <code>null</code>
    * [.extensionKeys()](#OperationTraitable+extensionKeys) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.extKeys()](#OperationTraitable+extKeys) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasExtension(key)](#OperationTraitable+hasExtension) ⇒ <code>boolean</code>
    * [.extension(key)](#OperationTraitable+extension) ⇒ <code>Any</code>
    * [.hasExt(key)](#OperationTraitable+hasExt) ⇒ <code>boolean</code>
    * [.ext(key)](#OperationTraitable+ext) ⇒ <code>Any</code>
    * [.json()](#Base+json) ⇒ <code>Any</code>

<a name="new_Operation_new"></a>

### new Operation()
Implements functions to deal with an Operation object.

<a name="Operation+hasSingleMessage"></a>

### operation.hasSingleMessage() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
<a name="Operation+hasMultipleMessages"></a>

### operation.hasMultipleMessages() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
<a name="Operation+messages"></a>

### operation.messages() ⇒ [<code>Array.&lt;Message&gt;</code>](#Message) \| <code>null</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
<a name="Operation+message"></a>

### operation.message() ⇒ [<code>Message</code>](#Message) \| <code>null</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
<a name="OperationTraitable+hasId"></a>

### operation.hasId() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
<a name="OperationTraitable+id"></a>

### operation.id() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
<a name="OperationTraitable+hasSummary"></a>

### operation.hasSummary() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
<a name="OperationTraitable+summary"></a>

### operation.summary() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
<a name="OperationTraitable+hasDescription"></a>

### operation.hasDescription() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
**Mixes**: [<code>hasDescription</code>](#MixinDescription.hasDescription)  
<a name="OperationTraitable+description"></a>

### operation.description() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
**Mixes**: [<code>description</code>](#MixinDescription.description)  
<a name="OperationTraitable+hasExternalDocs"></a>

### operation.hasExternalDocs() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
**Mixes**: [<code>hasExternalDocs</code>](#MixinExternalDocs.hasExternalDocs)  
<a name="OperationTraitable+externalDocs"></a>

### operation.externalDocs() ⇒ [<code>ExternalDocs</code>](#ExternalDocs) \| <code>null</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
**Mixes**: [<code>externalDocs</code>](#MixinExternalDocs.externalDocs)  
<a name="OperationTraitable+hasTags"></a>

### operation.hasTags() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
**Mixes**: [<code>hasTags</code>](#MixinTags.hasTags)  
<a name="OperationTraitable+tags"></a>

### operation.tags() ⇒ [<code>Array.&lt;Tag&gt;</code>](#Tag) \| <code>null</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
**Mixes**: [<code>tags</code>](#MixinTags.tags)  
<a name="OperationTraitable+tagNames"></a>

### operation.tagNames() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
**Mixes**: [<code>tagNames</code>](#MixinTags.tagNames)  
<a name="OperationTraitable+hasTag"></a>

### operation.hasTag(name) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
**Mixes**: [<code>hasTag</code>](#MixinTags.hasTag)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the tag. |

<a name="OperationTraitable+tag"></a>

### operation.tag(name) ⇒ [<code>Tag</code>](#Tag) \| <code>null</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
**Mixes**: [<code>tag</code>](#MixinTags.tag)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the tag. |

<a name="OperationTraitable+hasBindings"></a>

### operation.hasBindings() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
**Mixes**: [<code>hasBindings</code>](#MixinBindings.hasBindings)  
<a name="OperationTraitable+bindings"></a>

### operation.bindings() ⇒ <code>Object</code> \| <code>null</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
**Mixes**: [<code>bindings</code>](#MixinBindings.bindings)  
<a name="OperationTraitable+bindingProtocols"></a>

### operation.bindingProtocols() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
**Mixes**: [<code>bindingProtocols</code>](#MixinBindings.bindingProtocols)  
<a name="OperationTraitable+hasBinding"></a>

### operation.hasBinding(name) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
**Mixes**: [<code>hasBinding</code>](#MixinBindings.hasBinding)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the binding. |

<a name="OperationTraitable+binding"></a>

### operation.binding(name) ⇒ <code>Object</code> \| <code>null</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
**Mixes**: [<code>binding</code>](#MixinBindings.binding)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the binding. |

<a name="OperationTraitable+hasExtensions"></a>

### operation.hasExtensions() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
**Mixes**: [<code>hasExtensions</code>](#MixinSpecificationExtensions.hasExtensions)  
<a name="OperationTraitable+extensions"></a>

### operation.extensions() ⇒ <code>Object.&lt;string, Any&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
**Mixes**: [<code>extensions</code>](#MixinSpecificationExtensions.extensions)  
<a name="OperationTraitable+extensionKeys"></a>

### operation.extensionKeys() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
**Mixes**: [<code>extensionKeys</code>](#MixinSpecificationExtensions.extensionKeys)  
<a name="OperationTraitable+extKeys"></a>

### operation.extKeys() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
**Mixes**: [<code>extKeys</code>](#MixinSpecificationExtensions.extKeys)  
<a name="OperationTraitable+hasExtension"></a>

### operation.hasExtension(key) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
**Mixes**: [<code>hasExtension</code>](#MixinSpecificationExtensions.hasExtension)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="OperationTraitable+extension"></a>

### operation.extension(key) ⇒ <code>Any</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
**Mixes**: [<code>extension</code>](#MixinSpecificationExtensions.extension)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="OperationTraitable+hasExt"></a>

### operation.hasExt(key) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
**Mixes**: [<code>hasExt</code>](#MixinSpecificationExtensions.hasExt)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="OperationTraitable+ext"></a>

### operation.ext(key) ⇒ <code>Any</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
**Mixes**: [<code>ext</code>](#MixinSpecificationExtensions.ext)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise throw an error. |

<a name="Base+json"></a>

### operation.json() ⇒ <code>Any</code>
**Kind**: instance method of [<code>Operation</code>](#Operation)  
<a name="PublishOperation"></a>

## PublishOperation ⇐ [<code>Operation</code>](#Operation)
**Kind**: global class  
**Extends**: [<code>Operation</code>](#Operation)  

* [PublishOperation](#PublishOperation) ⇐ [<code>Operation</code>](#Operation)
    * [new PublishOperation()](#new_PublishOperation_new)
    * [.isPublish()](#PublishOperation+isPublish) ⇒ <code>boolean</code>
    * [.isSubscribe()](#PublishOperation+isSubscribe) ⇒ <code>boolean</code>
    * [.kind()](#PublishOperation+kind) ⇒ <code>string</code>
    * [.hasSingleMessage()](#Operation+hasSingleMessage) ⇒ <code>boolean</code>
    * [.hasMultipleMessages()](#Operation+hasMultipleMessages) ⇒ <code>boolean</code>
    * [.messages()](#Operation+messages) ⇒ [<code>Array.&lt;Message&gt;</code>](#Message) \| <code>null</code>
    * [.message()](#Operation+message) ⇒ [<code>Message</code>](#Message) \| <code>null</code>

<a name="new_PublishOperation_new"></a>

### new PublishOperation()
Implements functions to deal with a PublishOperation object.

<a name="PublishOperation+isPublish"></a>

### publishOperation.isPublish() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>PublishOperation</code>](#PublishOperation)  
<a name="PublishOperation+isSubscribe"></a>

### publishOperation.isSubscribe() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>PublishOperation</code>](#PublishOperation)  
<a name="PublishOperation+kind"></a>

### publishOperation.kind() ⇒ <code>string</code>
**Kind**: instance method of [<code>PublishOperation</code>](#PublishOperation)  
<a name="Operation+hasSingleMessage"></a>

### publishOperation.hasSingleMessage() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>PublishOperation</code>](#PublishOperation)  
<a name="Operation+hasMultipleMessages"></a>

### publishOperation.hasMultipleMessages() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>PublishOperation</code>](#PublishOperation)  
<a name="Operation+messages"></a>

### publishOperation.messages() ⇒ [<code>Array.&lt;Message&gt;</code>](#Message) \| <code>null</code>
**Kind**: instance method of [<code>PublishOperation</code>](#PublishOperation)  
<a name="Operation+message"></a>

### publishOperation.message() ⇒ [<code>Message</code>](#Message) \| <code>null</code>
**Kind**: instance method of [<code>PublishOperation</code>](#PublishOperation)  
<a name="Schema"></a>

## Schema ⇐ [<code>Base</code>](#Base)
Implements functions to deal with a Schema object.

**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  

* [Schema](#Schema) ⇐ [<code>Base</code>](#Base)
    * [.uid()](#Schema+uid) ⇒ <code>string</code>
    * [.$id()](#Schema+$id) ⇒ <code>string</code>
    * [.multipleOf()](#Schema+multipleOf) ⇒ <code>number</code>
    * [.maximum()](#Schema+maximum) ⇒ <code>number</code>
    * [.exclusiveMaximum()](#Schema+exclusiveMaximum) ⇒ <code>number</code>
    * [.minimum()](#Schema+minimum) ⇒ <code>number</code>
    * [.exclusiveMinimum()](#Schema+exclusiveMinimum) ⇒ <code>number</code>
    * [.maxLength()](#Schema+maxLength) ⇒ <code>number</code>
    * [.minLength()](#Schema+minLength) ⇒ <code>number</code>
    * [.pattern()](#Schema+pattern) ⇒ <code>string</code>
    * [.maxItems()](#Schema+maxItems) ⇒ <code>number</code>
    * [.minItems()](#Schema+minItems) ⇒ <code>number</code>
    * [.uniqueItems()](#Schema+uniqueItems) ⇒ <code>boolean</code>
    * [.maxProperties()](#Schema+maxProperties) ⇒ <code>number</code>
    * [.minProperties()](#Schema+minProperties) ⇒ <code>number</code>
    * [.required()](#Schema+required) ⇒ <code>Array.&lt;string&gt;</code>
    * [.enum()](#Schema+enum) ⇒ <code>Array.&lt;any&gt;</code>
    * [.type()](#Schema+type) ⇒ <code>string</code> \| <code>Array.&lt;string&gt;</code>
    * [.allOf()](#Schema+allOf) ⇒ [<code>Array.&lt;Schema&gt;</code>](#Schema)
    * [.oneOf()](#Schema+oneOf) ⇒ [<code>Array.&lt;Schema&gt;</code>](#Schema)
    * [.anyOf()](#Schema+anyOf) ⇒ [<code>Array.&lt;Schema&gt;</code>](#Schema)
    * [.not()](#Schema+not) ⇒ [<code>Schema</code>](#Schema)
    * [.items()](#Schema+items) ⇒ [<code>Schema</code>](#Schema) \| [<code>Array.&lt;Schema&gt;</code>](#Schema)
    * [.properties()](#Schema+properties) ⇒ <code>Object.&lt;string, Schema&gt;</code>
    * [.additionalProperties()](#Schema+additionalProperties) ⇒ <code>boolean</code> \| [<code>Schema</code>](#Schema)
    * [.additionalItems()](#Schema+additionalItems) ⇒ [<code>Schema</code>](#Schema)
    * [.patternProperties()](#Schema+patternProperties) ⇒ <code>Object.&lt;string, Schema&gt;</code>
    * [.const()](#Schema+const) ⇒ <code>any</code>
    * [.contains()](#Schema+contains) ⇒ [<code>Schema</code>](#Schema)
    * [.dependencies()](#Schema+dependencies) ⇒ <code>Object.&lt;string, (Schema\|Array.&lt;string&gt;)&gt;</code>
    * [.propertyNames()](#Schema+propertyNames) ⇒ [<code>Schema</code>](#Schema)
    * [.if()](#Schema+if) ⇒ [<code>Schema</code>](#Schema)
    * [.then()](#Schema+then) ⇒ [<code>Schema</code>](#Schema)
    * [.else()](#Schema+else) ⇒ [<code>Schema</code>](#Schema)
    * [.format()](#Schema+format) ⇒ <code>string</code>
    * [.contentEncoding()](#Schema+contentEncoding) ⇒ <code>string</code>
    * [.contentMediaType()](#Schema+contentMediaType) ⇒ <code>string</code>
    * [.definitions()](#Schema+definitions) ⇒ <code>Object.&lt;string, Schema&gt;</code>
    * [.description()](#Schema+description) ⇒ <code>string</code>
    * [.title()](#Schema+title) ⇒ <code>string</code>
    * [.default()](#Schema+default) ⇒ <code>any</code>
    * [.deprecated()](#Schema+deprecated) ⇒ <code>boolean</code>
    * [.discriminator()](#Schema+discriminator) ⇒ <code>string</code>
    * [.externalDocs()](#Schema+externalDocs) ⇒ [<code>ExternalDocs</code>](#ExternalDocs)
    * [.readOnly()](#Schema+readOnly) ⇒ <code>boolean</code>
    * [.writeOnly()](#Schema+writeOnly) ⇒ <code>boolean</code>
    * [.examples()](#Schema+examples) ⇒ <code>Array.&lt;any&gt;</code>
    * [.json()](#Base+json) ⇒ <code>Any</code>

<a name="Schema+uid"></a>

### schema.uid() ⇒ <code>string</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+$id"></a>

### schema.$id() ⇒ <code>string</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+multipleOf"></a>

### schema.multipleOf() ⇒ <code>number</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+maximum"></a>

### schema.maximum() ⇒ <code>number</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+exclusiveMaximum"></a>

### schema.exclusiveMaximum() ⇒ <code>number</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+minimum"></a>

### schema.minimum() ⇒ <code>number</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+exclusiveMinimum"></a>

### schema.exclusiveMinimum() ⇒ <code>number</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+maxLength"></a>

### schema.maxLength() ⇒ <code>number</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+minLength"></a>

### schema.minLength() ⇒ <code>number</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+pattern"></a>

### schema.pattern() ⇒ <code>string</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+maxItems"></a>

### schema.maxItems() ⇒ <code>number</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+minItems"></a>

### schema.minItems() ⇒ <code>number</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+uniqueItems"></a>

### schema.uniqueItems() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+maxProperties"></a>

### schema.maxProperties() ⇒ <code>number</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+minProperties"></a>

### schema.minProperties() ⇒ <code>number</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+required"></a>

### schema.required() ⇒ <code>Array.&lt;string&gt;</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+enum"></a>

### schema.enum() ⇒ <code>Array.&lt;any&gt;</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+type"></a>

### schema.type() ⇒ <code>string</code> \| <code>Array.&lt;string&gt;</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+allOf"></a>

### schema.allOf() ⇒ [<code>Array.&lt;Schema&gt;</code>](#Schema)
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+oneOf"></a>

### schema.oneOf() ⇒ [<code>Array.&lt;Schema&gt;</code>](#Schema)
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+anyOf"></a>

### schema.anyOf() ⇒ [<code>Array.&lt;Schema&gt;</code>](#Schema)
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+not"></a>

### schema.not() ⇒ [<code>Schema</code>](#Schema)
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+items"></a>

### schema.items() ⇒ [<code>Schema</code>](#Schema) \| [<code>Array.&lt;Schema&gt;</code>](#Schema)
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+properties"></a>

### schema.properties() ⇒ <code>Object.&lt;string, Schema&gt;</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+additionalProperties"></a>

### schema.additionalProperties() ⇒ <code>boolean</code> \| [<code>Schema</code>](#Schema)
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+additionalItems"></a>

### schema.additionalItems() ⇒ [<code>Schema</code>](#Schema)
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+patternProperties"></a>

### schema.patternProperties() ⇒ <code>Object.&lt;string, Schema&gt;</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+const"></a>

### schema.const() ⇒ <code>any</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+contains"></a>

### schema.contains() ⇒ [<code>Schema</code>](#Schema)
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+dependencies"></a>

### schema.dependencies() ⇒ <code>Object.&lt;string, (Schema\|Array.&lt;string&gt;)&gt;</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+propertyNames"></a>

### schema.propertyNames() ⇒ [<code>Schema</code>](#Schema)
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+if"></a>

### schema.if() ⇒ [<code>Schema</code>](#Schema)
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+then"></a>

### schema.then() ⇒ [<code>Schema</code>](#Schema)
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+else"></a>

### schema.else() ⇒ [<code>Schema</code>](#Schema)
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+format"></a>

### schema.format() ⇒ <code>string</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+contentEncoding"></a>

### schema.contentEncoding() ⇒ <code>string</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+contentMediaType"></a>

### schema.contentMediaType() ⇒ <code>string</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+definitions"></a>

### schema.definitions() ⇒ <code>Object.&lt;string, Schema&gt;</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+description"></a>

### schema.description() ⇒ <code>string</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+title"></a>

### schema.title() ⇒ <code>string</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+default"></a>

### schema.default() ⇒ <code>any</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+deprecated"></a>

### schema.deprecated() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+discriminator"></a>

### schema.discriminator() ⇒ <code>string</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+externalDocs"></a>

### schema.externalDocs() ⇒ [<code>ExternalDocs</code>](#ExternalDocs)
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+readOnly"></a>

### schema.readOnly() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+writeOnly"></a>

### schema.writeOnly() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Schema+examples"></a>

### schema.examples() ⇒ <code>Array.&lt;any&gt;</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="Base+json"></a>

### schema.json() ⇒ <code>Any</code>
**Kind**: instance method of [<code>Schema</code>](#Schema)  
<a name="SecurityScheme"></a>

## SecurityScheme ⇐ [<code>Base</code>](#Base)
Implements functions to deal with a SecurityScheme object.

**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  

* [SecurityScheme](#SecurityScheme) ⇐ [<code>Base</code>](#Base)
    * [.type()](#SecurityScheme+type) ⇒ <code>string</code>
    * [.description()](#SecurityScheme+description) ⇒ <code>string</code>
    * [.name()](#SecurityScheme+name) ⇒ <code>string</code>
    * [.in()](#SecurityScheme+in) ⇒ <code>string</code>
    * [.scheme()](#SecurityScheme+scheme) ⇒ <code>string</code>
    * [.bearerFormat()](#SecurityScheme+bearerFormat) ⇒ <code>string</code>
    * [.openIdConnectUrl()](#SecurityScheme+openIdConnectUrl) ⇒ <code>string</code>
    * [.flows()](#SecurityScheme+flows) ⇒ <code>Object.&lt;string, OAuthFlow&gt;</code>
    * [.json()](#Base+json) ⇒ <code>Any</code>

<a name="SecurityScheme+type"></a>

### securityScheme.type() ⇒ <code>string</code>
**Kind**: instance method of [<code>SecurityScheme</code>](#SecurityScheme)  
<a name="SecurityScheme+description"></a>

### securityScheme.description() ⇒ <code>string</code>
**Kind**: instance method of [<code>SecurityScheme</code>](#SecurityScheme)  
<a name="SecurityScheme+name"></a>

### securityScheme.name() ⇒ <code>string</code>
**Kind**: instance method of [<code>SecurityScheme</code>](#SecurityScheme)  
<a name="SecurityScheme+in"></a>

### securityScheme.in() ⇒ <code>string</code>
**Kind**: instance method of [<code>SecurityScheme</code>](#SecurityScheme)  
<a name="SecurityScheme+scheme"></a>

### securityScheme.scheme() ⇒ <code>string</code>
**Kind**: instance method of [<code>SecurityScheme</code>](#SecurityScheme)  
<a name="SecurityScheme+bearerFormat"></a>

### securityScheme.bearerFormat() ⇒ <code>string</code>
**Kind**: instance method of [<code>SecurityScheme</code>](#SecurityScheme)  
<a name="SecurityScheme+openIdConnectUrl"></a>

### securityScheme.openIdConnectUrl() ⇒ <code>string</code>
**Kind**: instance method of [<code>SecurityScheme</code>](#SecurityScheme)  
<a name="SecurityScheme+flows"></a>

### securityScheme.flows() ⇒ <code>Object.&lt;string, OAuthFlow&gt;</code>
**Kind**: instance method of [<code>SecurityScheme</code>](#SecurityScheme)  
<a name="Base+json"></a>

### securityScheme.json() ⇒ <code>Any</code>
**Kind**: instance method of [<code>SecurityScheme</code>](#SecurityScheme)  
<a name="ServerSecurityRequirement"></a>

## ServerSecurityRequirement ⇐ [<code>Base</code>](#Base)
Implements functions to deal with a ServerSecurityRequirement object.

**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  
<a name="Base+json"></a>

### serverSecurityRequirement.json() ⇒ <code>Any</code>
**Kind**: instance method of [<code>ServerSecurityRequirement</code>](#ServerSecurityRequirement)  
<a name="ServerVariable"></a>

## ServerVariable ⇐ [<code>Base</code>](#Base)
**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  
**Mixes**: [<code>MixinDescription</code>](#MixinDescription), [<code>MixinSpecificationExtensions</code>](#MixinSpecificationExtensions)  

* [ServerVariable](#ServerVariable) ⇐ [<code>Base</code>](#Base)
    * [new ServerVariable()](#new_ServerVariable_new)
    * [.hasAllowedValues()](#ServerVariable+hasAllowedValues) ⇒ <code>boolean</code>
    * [.allowedValues()](#ServerVariable+allowedValues) ⇒ <code>Array.&lt;Any&gt;</code> \| <code>null</code>
    * [.allows(name)](#ServerVariable+allows) ⇒ <code>boolean</code>
    * [.hasDefaultValue()](#ServerVariable+hasDefaultValue) ⇒ <code>boolean</code>
    * [.defaultValue()](#ServerVariable+defaultValue) ⇒ <code>string</code> \| <code>null</code>
    * [.hasExamples()](#ServerVariable+hasExamples) ⇒ <code>boolean</code>
    * [.examples()](#ServerVariable+examples) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasDescription()](#ServerVariable+hasDescription) ⇒ <code>boolean</code>
    * [.description()](#ServerVariable+description) ⇒ <code>string</code> \| <code>null</code>
    * [.hasExtensions()](#ServerVariable+hasExtensions) ⇒ <code>boolean</code>
    * [.extensions()](#ServerVariable+extensions) ⇒ <code>Object.&lt;string, Any&gt;</code> \| <code>null</code>
    * [.extensionKeys()](#ServerVariable+extensionKeys) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.extKeys()](#ServerVariable+extKeys) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasExtension(key)](#ServerVariable+hasExtension) ⇒ <code>boolean</code>
    * [.extension(key)](#ServerVariable+extension) ⇒ <code>Any</code>
    * [.hasExt(key)](#ServerVariable+hasExt) ⇒ <code>boolean</code>
    * [.ext(key)](#ServerVariable+ext) ⇒ <code>Any</code>
    * [.json()](#Base+json) ⇒ <code>Any</code>

<a name="new_ServerVariable_new"></a>

### new ServerVariable()
Implements functions to deal with a ServerVariable object.

<a name="ServerVariable+hasAllowedValues"></a>

### serverVariable.hasAllowedValues() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>ServerVariable</code>](#ServerVariable)  
<a name="ServerVariable+allowedValues"></a>

### serverVariable.allowedValues() ⇒ <code>Array.&lt;Any&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>ServerVariable</code>](#ServerVariable)  
<a name="ServerVariable+allows"></a>

### serverVariable.allows(name) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>ServerVariable</code>](#ServerVariable)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the variable. |

<a name="ServerVariable+hasDefaultValue"></a>

### serverVariable.hasDefaultValue() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>ServerVariable</code>](#ServerVariable)  
<a name="ServerVariable+defaultValue"></a>

### serverVariable.defaultValue() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>ServerVariable</code>](#ServerVariable)  
<a name="ServerVariable+hasExamples"></a>

### serverVariable.hasExamples() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>ServerVariable</code>](#ServerVariable)  
<a name="ServerVariable+examples"></a>

### serverVariable.examples() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>ServerVariable</code>](#ServerVariable)  
<a name="ServerVariable+hasDescription"></a>

### serverVariable.hasDescription() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>ServerVariable</code>](#ServerVariable)  
**Mixes**: [<code>hasDescription</code>](#MixinDescription.hasDescription)  
<a name="ServerVariable+description"></a>

### serverVariable.description() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>ServerVariable</code>](#ServerVariable)  
**Mixes**: [<code>description</code>](#MixinDescription.description)  
<a name="ServerVariable+hasExtensions"></a>

### serverVariable.hasExtensions() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>ServerVariable</code>](#ServerVariable)  
**Mixes**: [<code>hasExtensions</code>](#MixinSpecificationExtensions.hasExtensions)  
<a name="ServerVariable+extensions"></a>

### serverVariable.extensions() ⇒ <code>Object.&lt;string, Any&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>ServerVariable</code>](#ServerVariable)  
**Mixes**: [<code>extensions</code>](#MixinSpecificationExtensions.extensions)  
<a name="ServerVariable+extensionKeys"></a>

### serverVariable.extensionKeys() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>ServerVariable</code>](#ServerVariable)  
**Mixes**: [<code>extensionKeys</code>](#MixinSpecificationExtensions.extensionKeys)  
<a name="ServerVariable+extKeys"></a>

### serverVariable.extKeys() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>ServerVariable</code>](#ServerVariable)  
**Mixes**: [<code>extKeys</code>](#MixinSpecificationExtensions.extKeys)  
<a name="ServerVariable+hasExtension"></a>

### serverVariable.hasExtension(key) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>ServerVariable</code>](#ServerVariable)  
**Mixes**: [<code>hasExtension</code>](#MixinSpecificationExtensions.hasExtension)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="ServerVariable+extension"></a>

### serverVariable.extension(key) ⇒ <code>Any</code>
**Kind**: instance method of [<code>ServerVariable</code>](#ServerVariable)  
**Mixes**: [<code>extension</code>](#MixinSpecificationExtensions.extension)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="ServerVariable+hasExt"></a>

### serverVariable.hasExt(key) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>ServerVariable</code>](#ServerVariable)  
**Mixes**: [<code>hasExt</code>](#MixinSpecificationExtensions.hasExt)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="ServerVariable+ext"></a>

### serverVariable.ext(key) ⇒ <code>Any</code>
**Kind**: instance method of [<code>ServerVariable</code>](#ServerVariable)  
**Mixes**: [<code>ext</code>](#MixinSpecificationExtensions.ext)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise throw an error. |

<a name="Base+json"></a>

### serverVariable.json() ⇒ <code>Any</code>
**Kind**: instance method of [<code>ServerVariable</code>](#ServerVariable)  
<a name="Server"></a>

## Server ⇐ [<code>Base</code>](#Base)
**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  
**Mixes**: [<code>MixinDescription</code>](#MixinDescription), [<code>MixinBindings</code>](#MixinBindings), [<code>MixinSpecificationExtensions</code>](#MixinSpecificationExtensions)  

* [Server](#Server) ⇐ [<code>Base</code>](#Base)
    * [new Server()](#new_Server_new)
    * [.url()](#Server+url) ⇒ <code>string</code>
    * [.protocol()](#Server+protocol) ⇒ <code>string</code>
    * [.hasProtocolVersion()](#Server+hasProtocolVersion) ⇒ <code>boolean</code>
    * [.protocolVersion()](#Server+protocolVersion) ⇒ <code>string</code> \| <code>null</code>
    * [.hasVariables()](#Server+hasVariables) ⇒ <code>boolean</code>
    * [.variables()](#Server+variables) ⇒ <code>Object.&lt;string, ServerVariable&gt;</code> \| <code>null</code>
    * [.hasVariable(name)](#Server+hasVariable) ⇒ <code>boolean</code>
    * [.variable(name)](#Server+variable) ⇒ [<code>ServerVariable</code>](#ServerVariable) \| <code>null</code>
    * [.hasSecurity()](#Server+hasSecurity) ⇒ <code>boolean</code>
    * [.security()](#Server+security) ⇒ [<code>Array.&lt;ServerSecurityRequirement&gt;</code>](#ServerSecurityRequirement) \| <code>null</code>
    * [.hasDescription()](#Server+hasDescription) ⇒ <code>boolean</code>
    * [.description()](#Server+description) ⇒ <code>string</code> \| <code>null</code>
    * [.hasBindings()](#Server+hasBindings) ⇒ <code>boolean</code>
    * [.bindings()](#Server+bindings) ⇒ <code>Object</code> \| <code>null</code>
    * [.bindingProtocols()](#Server+bindingProtocols) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasBinding(name)](#Server+hasBinding) ⇒ <code>boolean</code>
    * [.binding(name)](#Server+binding) ⇒ <code>Object</code> \| <code>null</code>
    * [.hasExtensions()](#Server+hasExtensions) ⇒ <code>boolean</code>
    * [.extensions()](#Server+extensions) ⇒ <code>Object.&lt;string, Any&gt;</code> \| <code>null</code>
    * [.extensionKeys()](#Server+extensionKeys) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.extKeys()](#Server+extKeys) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasExtension(key)](#Server+hasExtension) ⇒ <code>boolean</code>
    * [.extension(key)](#Server+extension) ⇒ <code>Any</code>
    * [.hasExt(key)](#Server+hasExt) ⇒ <code>boolean</code>
    * [.ext(key)](#Server+ext) ⇒ <code>Any</code>
    * [.json()](#Base+json) ⇒ <code>Any</code>

<a name="new_Server_new"></a>

### new Server()
Implements functions to deal with a Server object.

<a name="Server+url"></a>

### server.url() ⇒ <code>string</code>
**Kind**: instance method of [<code>Server</code>](#Server)  
<a name="Server+protocol"></a>

### server.protocol() ⇒ <code>string</code>
**Kind**: instance method of [<code>Server</code>](#Server)  
<a name="Server+hasProtocolVersion"></a>

### server.hasProtocolVersion() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Server</code>](#Server)  
<a name="Server+protocolVersion"></a>

### server.protocolVersion() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>Server</code>](#Server)  
<a name="Server+hasVariables"></a>

### server.hasVariables() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Server</code>](#Server)  
<a name="Server+variables"></a>

### server.variables() ⇒ <code>Object.&lt;string, ServerVariable&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>Server</code>](#Server)  
<a name="Server+hasVariable"></a>

### server.hasVariable(name) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Server</code>](#Server)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the server variable. |

<a name="Server+variable"></a>

### server.variable(name) ⇒ [<code>ServerVariable</code>](#ServerVariable) \| <code>null</code>
**Kind**: instance method of [<code>Server</code>](#Server)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the server variable. |

<a name="Server+hasSecurity"></a>

### server.hasSecurity() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Server</code>](#Server)  
<a name="Server+security"></a>

### server.security() ⇒ [<code>Array.&lt;ServerSecurityRequirement&gt;</code>](#ServerSecurityRequirement) \| <code>null</code>
**Kind**: instance method of [<code>Server</code>](#Server)  
<a name="Server+hasDescription"></a>

### server.hasDescription() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Server</code>](#Server)  
**Mixes**: [<code>hasDescription</code>](#MixinDescription.hasDescription)  
<a name="Server+description"></a>

### server.description() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>Server</code>](#Server)  
**Mixes**: [<code>description</code>](#MixinDescription.description)  
<a name="Server+hasBindings"></a>

### server.hasBindings() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Server</code>](#Server)  
**Mixes**: [<code>hasBindings</code>](#MixinBindings.hasBindings)  
<a name="Server+bindings"></a>

### server.bindings() ⇒ <code>Object</code> \| <code>null</code>
**Kind**: instance method of [<code>Server</code>](#Server)  
**Mixes**: [<code>bindings</code>](#MixinBindings.bindings)  
<a name="Server+bindingProtocols"></a>

### server.bindingProtocols() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>Server</code>](#Server)  
**Mixes**: [<code>bindingProtocols</code>](#MixinBindings.bindingProtocols)  
<a name="Server+hasBinding"></a>

### server.hasBinding(name) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Server</code>](#Server)  
**Mixes**: [<code>hasBinding</code>](#MixinBindings.hasBinding)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the binding. |

<a name="Server+binding"></a>

### server.binding(name) ⇒ <code>Object</code> \| <code>null</code>
**Kind**: instance method of [<code>Server</code>](#Server)  
**Mixes**: [<code>binding</code>](#MixinBindings.binding)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the binding. |

<a name="Server+hasExtensions"></a>

### server.hasExtensions() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Server</code>](#Server)  
**Mixes**: [<code>hasExtensions</code>](#MixinSpecificationExtensions.hasExtensions)  
<a name="Server+extensions"></a>

### server.extensions() ⇒ <code>Object.&lt;string, Any&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>Server</code>](#Server)  
**Mixes**: [<code>extensions</code>](#MixinSpecificationExtensions.extensions)  
<a name="Server+extensionKeys"></a>

### server.extensionKeys() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>Server</code>](#Server)  
**Mixes**: [<code>extensionKeys</code>](#MixinSpecificationExtensions.extensionKeys)  
<a name="Server+extKeys"></a>

### server.extKeys() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>Server</code>](#Server)  
**Mixes**: [<code>extKeys</code>](#MixinSpecificationExtensions.extKeys)  
<a name="Server+hasExtension"></a>

### server.hasExtension(key) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Server</code>](#Server)  
**Mixes**: [<code>hasExtension</code>](#MixinSpecificationExtensions.hasExtension)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="Server+extension"></a>

### server.extension(key) ⇒ <code>Any</code>
**Kind**: instance method of [<code>Server</code>](#Server)  
**Mixes**: [<code>extension</code>](#MixinSpecificationExtensions.extension)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="Server+hasExt"></a>

### server.hasExt(key) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Server</code>](#Server)  
**Mixes**: [<code>hasExt</code>](#MixinSpecificationExtensions.hasExt)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="Server+ext"></a>

### server.ext(key) ⇒ <code>Any</code>
**Kind**: instance method of [<code>Server</code>](#Server)  
**Mixes**: [<code>ext</code>](#MixinSpecificationExtensions.ext)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise throw an error. |

<a name="Base+json"></a>

### server.json() ⇒ <code>Any</code>
**Kind**: instance method of [<code>Server</code>](#Server)  
<a name="SubscribeOperation"></a>

## SubscribeOperation ⇐ [<code>Operation</code>](#Operation)
**Kind**: global class  
**Extends**: [<code>Operation</code>](#Operation)  

* [SubscribeOperation](#SubscribeOperation) ⇐ [<code>Operation</code>](#Operation)
    * [new SubscribeOperation()](#new_SubscribeOperation_new)
    * [.isPublish()](#SubscribeOperation+isPublish) ⇒ <code>boolean</code>
    * [.isSubscribe()](#SubscribeOperation+isSubscribe) ⇒ <code>boolean</code>
    * [.kind()](#SubscribeOperation+kind) ⇒ <code>string</code>
    * [.hasSingleMessage()](#Operation+hasSingleMessage) ⇒ <code>boolean</code>
    * [.hasMultipleMessages()](#Operation+hasMultipleMessages) ⇒ <code>boolean</code>
    * [.messages()](#Operation+messages) ⇒ [<code>Array.&lt;Message&gt;</code>](#Message) \| <code>null</code>
    * [.message()](#Operation+message) ⇒ [<code>Message</code>](#Message) \| <code>null</code>

<a name="new_SubscribeOperation_new"></a>

### new SubscribeOperation()
Implements functions to deal with a SubscribeOperation object.

<a name="SubscribeOperation+isPublish"></a>

### subscribeOperation.isPublish() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>SubscribeOperation</code>](#SubscribeOperation)  
<a name="SubscribeOperation+isSubscribe"></a>

### subscribeOperation.isSubscribe() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>SubscribeOperation</code>](#SubscribeOperation)  
<a name="SubscribeOperation+kind"></a>

### subscribeOperation.kind() ⇒ <code>string</code>
**Kind**: instance method of [<code>SubscribeOperation</code>](#SubscribeOperation)  
<a name="Operation+hasSingleMessage"></a>

### subscribeOperation.hasSingleMessage() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>SubscribeOperation</code>](#SubscribeOperation)  
<a name="Operation+hasMultipleMessages"></a>

### subscribeOperation.hasMultipleMessages() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>SubscribeOperation</code>](#SubscribeOperation)  
<a name="Operation+messages"></a>

### subscribeOperation.messages() ⇒ [<code>Array.&lt;Message&gt;</code>](#Message) \| <code>null</code>
**Kind**: instance method of [<code>SubscribeOperation</code>](#SubscribeOperation)  
<a name="Operation+message"></a>

### subscribeOperation.message() ⇒ [<code>Message</code>](#Message) \| <code>null</code>
**Kind**: instance method of [<code>SubscribeOperation</code>](#SubscribeOperation)  
<a name="Tag"></a>

## Tag ⇐ [<code>Base</code>](#Base)
**Kind**: global class  
**Extends**: [<code>Base</code>](#Base)  
**Mixes**: [<code>MixinDescription</code>](#MixinDescription), [<code>MixinExternalDocs</code>](#MixinExternalDocs), [<code>MixinSpecificationExtensions</code>](#MixinSpecificationExtensions)  

* [Tag](#Tag) ⇐ [<code>Base</code>](#Base)
    * [new Tag()](#new_Tag_new)
    * [.name()](#Tag+name) ⇒ <code>string</code>
    * [.hasDescription()](#Tag+hasDescription) ⇒ <code>boolean</code>
    * [.description()](#Tag+description) ⇒ <code>string</code> \| <code>null</code>
    * [.hasExternalDocs()](#Tag+hasExternalDocs) ⇒ <code>boolean</code>
    * [.externalDocs()](#Tag+externalDocs) ⇒ [<code>ExternalDocs</code>](#ExternalDocs) \| <code>null</code>
    * [.hasExtensions()](#Tag+hasExtensions) ⇒ <code>boolean</code>
    * [.extensions()](#Tag+extensions) ⇒ <code>Object.&lt;string, Any&gt;</code> \| <code>null</code>
    * [.extensionKeys()](#Tag+extensionKeys) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.extKeys()](#Tag+extKeys) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasExtension(key)](#Tag+hasExtension) ⇒ <code>boolean</code>
    * [.extension(key)](#Tag+extension) ⇒ <code>Any</code>
    * [.hasExt(key)](#Tag+hasExt) ⇒ <code>boolean</code>
    * [.ext(key)](#Tag+ext) ⇒ <code>Any</code>
    * [.json()](#Base+json) ⇒ <code>Any</code>

<a name="new_Tag_new"></a>

### new Tag()
Implements functions to deal with a Tag object.

<a name="Tag+name"></a>

### tag.name() ⇒ <code>string</code>
**Kind**: instance method of [<code>Tag</code>](#Tag)  
<a name="Tag+hasDescription"></a>

### tag.hasDescription() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Mixes**: [<code>hasDescription</code>](#MixinDescription.hasDescription)  
<a name="Tag+description"></a>

### tag.description() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Mixes**: [<code>description</code>](#MixinDescription.description)  
<a name="Tag+hasExternalDocs"></a>

### tag.hasExternalDocs() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Mixes**: [<code>hasExternalDocs</code>](#MixinExternalDocs.hasExternalDocs)  
<a name="Tag+externalDocs"></a>

### tag.externalDocs() ⇒ [<code>ExternalDocs</code>](#ExternalDocs) \| <code>null</code>
**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Mixes**: [<code>externalDocs</code>](#MixinExternalDocs.externalDocs)  
<a name="Tag+hasExtensions"></a>

### tag.hasExtensions() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Mixes**: [<code>hasExtensions</code>](#MixinSpecificationExtensions.hasExtensions)  
<a name="Tag+extensions"></a>

### tag.extensions() ⇒ <code>Object.&lt;string, Any&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Mixes**: [<code>extensions</code>](#MixinSpecificationExtensions.extensions)  
<a name="Tag+extensionKeys"></a>

### tag.extensionKeys() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Mixes**: [<code>extensionKeys</code>](#MixinSpecificationExtensions.extensionKeys)  
<a name="Tag+extKeys"></a>

### tag.extKeys() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Mixes**: [<code>extKeys</code>](#MixinSpecificationExtensions.extKeys)  
<a name="Tag+hasExtension"></a>

### tag.hasExtension(key) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Mixes**: [<code>hasExtension</code>](#MixinSpecificationExtensions.hasExtension)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="Tag+extension"></a>

### tag.extension(key) ⇒ <code>Any</code>
**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Mixes**: [<code>extension</code>](#MixinSpecificationExtensions.extension)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="Tag+hasExt"></a>

### tag.hasExt(key) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Mixes**: [<code>hasExt</code>](#MixinSpecificationExtensions.hasExt)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="Tag+ext"></a>

### tag.ext(key) ⇒ <code>Any</code>
**Kind**: instance method of [<code>Tag</code>](#Tag)  
**Mixes**: [<code>ext</code>](#MixinSpecificationExtensions.ext)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise throw an error. |

<a name="Base+json"></a>

### tag.json() ⇒ <code>Any</code>
**Kind**: instance method of [<code>Tag</code>](#Tag)  
<a name="MixinBindings"></a>

## MixinBindings
Implements functions to deal with the Bindings object.

**Kind**: global mixin  

* [MixinBindings](#MixinBindings)
    * [.hasBindings()](#MixinBindings.hasBindings) ⇒ <code>boolean</code>
    * [.bindings()](#MixinBindings.bindings) ⇒ <code>Object</code> \| <code>null</code>
    * [.bindingProtocols()](#MixinBindings.bindingProtocols) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasBinding(name)](#MixinBindings.hasBinding) ⇒ <code>boolean</code>
    * [.binding(name)](#MixinBindings.binding) ⇒ <code>Object</code> \| <code>null</code>

<a name="MixinBindings.hasBindings"></a>

### MixinBindings.hasBindings() ⇒ <code>boolean</code>
**Kind**: static method of [<code>MixinBindings</code>](#MixinBindings)  
<a name="MixinBindings.bindings"></a>

### MixinBindings.bindings() ⇒ <code>Object</code> \| <code>null</code>
**Kind**: static method of [<code>MixinBindings</code>](#MixinBindings)  
<a name="MixinBindings.bindingProtocols"></a>

### MixinBindings.bindingProtocols() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: static method of [<code>MixinBindings</code>](#MixinBindings)  
<a name="MixinBindings.hasBinding"></a>

### MixinBindings.hasBinding(name) ⇒ <code>boolean</code>
**Kind**: static method of [<code>MixinBindings</code>](#MixinBindings)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the binding. |

<a name="MixinBindings.binding"></a>

### MixinBindings.binding(name) ⇒ <code>Object</code> \| <code>null</code>
**Kind**: static method of [<code>MixinBindings</code>](#MixinBindings)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the binding. |

<a name="MixinDescription"></a>

## MixinDescription
Implements functions to deal with the description field.

**Kind**: global mixin  

* [MixinDescription](#MixinDescription)
    * [.hasDescription()](#MixinDescription.hasDescription) ⇒ <code>boolean</code>
    * [.description()](#MixinDescription.description) ⇒ <code>string</code> \| <code>null</code>

<a name="MixinDescription.hasDescription"></a>

### MixinDescription.hasDescription() ⇒ <code>boolean</code>
**Kind**: static method of [<code>MixinDescription</code>](#MixinDescription)  
<a name="MixinDescription.description"></a>

### MixinDescription.description() ⇒ <code>string</code> \| <code>null</code>
**Kind**: static method of [<code>MixinDescription</code>](#MixinDescription)  
<a name="MixinExternalDocs"></a>

## MixinExternalDocs
Implements functions to deal with the ExternalDocs object.

**Kind**: global mixin  

* [MixinExternalDocs](#MixinExternalDocs)
    * [.hasExternalDocs()](#MixinExternalDocs.hasExternalDocs) ⇒ <code>boolean</code>
    * [.externalDocs()](#MixinExternalDocs.externalDocs) ⇒ [<code>ExternalDocs</code>](#ExternalDocs) \| <code>null</code>

<a name="MixinExternalDocs.hasExternalDocs"></a>

### MixinExternalDocs.hasExternalDocs() ⇒ <code>boolean</code>
**Kind**: static method of [<code>MixinExternalDocs</code>](#MixinExternalDocs)  
<a name="MixinExternalDocs.externalDocs"></a>

### MixinExternalDocs.externalDocs() ⇒ [<code>ExternalDocs</code>](#ExternalDocs) \| <code>null</code>
**Kind**: static method of [<code>MixinExternalDocs</code>](#MixinExternalDocs)  
<a name="MixinSpecificationExtensions"></a>

## MixinSpecificationExtensions
Implements functions to deal with the SpecificationExtensions object.

**Kind**: global mixin  

* [MixinSpecificationExtensions](#MixinSpecificationExtensions)
    * [.hasExtensions()](#MixinSpecificationExtensions.hasExtensions) ⇒ <code>boolean</code>
    * [.extensions()](#MixinSpecificationExtensions.extensions) ⇒ <code>Object.&lt;string, Any&gt;</code> \| <code>null</code>
    * [.extensionKeys()](#MixinSpecificationExtensions.extensionKeys) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.extKeys()](#MixinSpecificationExtensions.extKeys) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasExtension(key)](#MixinSpecificationExtensions.hasExtension) ⇒ <code>boolean</code>
    * [.extension(key)](#MixinSpecificationExtensions.extension) ⇒ <code>Any</code>
    * [.hasExt(key)](#MixinSpecificationExtensions.hasExt) ⇒ <code>boolean</code>
    * [.ext(key)](#MixinSpecificationExtensions.ext) ⇒ <code>Any</code>

<a name="MixinSpecificationExtensions.hasExtensions"></a>

### MixinSpecificationExtensions.hasExtensions() ⇒ <code>boolean</code>
**Kind**: static method of [<code>MixinSpecificationExtensions</code>](#MixinSpecificationExtensions)  
<a name="MixinSpecificationExtensions.extensions"></a>

### MixinSpecificationExtensions.extensions() ⇒ <code>Object.&lt;string, Any&gt;</code> \| <code>null</code>
**Kind**: static method of [<code>MixinSpecificationExtensions</code>](#MixinSpecificationExtensions)  
<a name="MixinSpecificationExtensions.extensionKeys"></a>

### MixinSpecificationExtensions.extensionKeys() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: static method of [<code>MixinSpecificationExtensions</code>](#MixinSpecificationExtensions)  
<a name="MixinSpecificationExtensions.extKeys"></a>

### MixinSpecificationExtensions.extKeys() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: static method of [<code>MixinSpecificationExtensions</code>](#MixinSpecificationExtensions)  
<a name="MixinSpecificationExtensions.hasExtension"></a>

### MixinSpecificationExtensions.hasExtension(key) ⇒ <code>boolean</code>
**Kind**: static method of [<code>MixinSpecificationExtensions</code>](#MixinSpecificationExtensions)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="MixinSpecificationExtensions.extension"></a>

### MixinSpecificationExtensions.extension(key) ⇒ <code>Any</code>
**Kind**: static method of [<code>MixinSpecificationExtensions</code>](#MixinSpecificationExtensions)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="MixinSpecificationExtensions.hasExt"></a>

### MixinSpecificationExtensions.hasExt(key) ⇒ <code>boolean</code>
**Kind**: static method of [<code>MixinSpecificationExtensions</code>](#MixinSpecificationExtensions)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise function throw an error. |

<a name="MixinSpecificationExtensions.ext"></a>

### MixinSpecificationExtensions.ext(key) ⇒ <code>Any</code>
**Kind**: static method of [<code>MixinSpecificationExtensions</code>](#MixinSpecificationExtensions)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Extension key. Must start with `x-` prefix. Otherwise throw an error. |

<a name="MixinTags"></a>

## MixinTags
Implements functions to deal with the Tags object.

**Kind**: global mixin  

* [MixinTags](#MixinTags)
    * [.hasTags()](#MixinTags.hasTags) ⇒ <code>boolean</code>
    * [.tags()](#MixinTags.tags) ⇒ [<code>Array.&lt;Tag&gt;</code>](#Tag) \| <code>null</code>
    * [.tagNames()](#MixinTags.tagNames) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
    * [.hasTag(name)](#MixinTags.hasTag) ⇒ <code>boolean</code>
    * [.tag(name)](#MixinTags.tag) ⇒ [<code>Tag</code>](#Tag) \| <code>null</code>

<a name="MixinTags.hasTags"></a>

### MixinTags.hasTags() ⇒ <code>boolean</code>
**Kind**: static method of [<code>MixinTags</code>](#MixinTags)  
<a name="MixinTags.tags"></a>

### MixinTags.tags() ⇒ [<code>Array.&lt;Tag&gt;</code>](#Tag) \| <code>null</code>
**Kind**: static method of [<code>MixinTags</code>](#MixinTags)  
<a name="MixinTags.tagNames"></a>

### MixinTags.tagNames() ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
**Kind**: static method of [<code>MixinTags</code>](#MixinTags)  
<a name="MixinTags.hasTag"></a>

### MixinTags.hasTag(name) ⇒ <code>boolean</code>
**Kind**: static method of [<code>MixinTags</code>](#MixinTags)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the tag. |

<a name="MixinTags.tag"></a>

### MixinTags.tag(name) ⇒ [<code>Tag</code>](#Tag) \| <code>null</code>
**Kind**: static method of [<code>MixinTags</code>](#MixinTags)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the tag. |

<a name="assignUidToParameterSchemas"></a>

## assignUidToParameterSchemas(doc)
Assign parameter keys as uid for the parameter schema.

**Kind**: global function  

| Param | Type |
| --- | --- |
| doc | [<code>AsyncAPIDocument</code>](#AsyncAPIDocument) | 

<a name="assignUidToComponentSchemas"></a>

## assignUidToComponentSchemas(doc)
Assign uid to component schemas.

**Kind**: global function  

| Param | Type |
| --- | --- |
| doc | [<code>AsyncAPIDocument</code>](#AsyncAPIDocument) | 

<a name="assignNameToAnonymousMessages"></a>

## assignNameToAnonymousMessages(doc)
Assign anonymous names to nameless messages.

**Kind**: global function  

| Param | Type |
| --- | --- |
| doc | [<code>AsyncAPIDocument</code>](#AsyncAPIDocument) | 

<a name="addNameToKey"></a>

## addNameToKey(map)
Add anonymous name to key if no name provided.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| map | <code>messages</code> | of messages |

<a name="recursiveSchema"></a>

## recursiveSchema(schema, callback(schema))
Recursively go through each schema and execute callback.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| schema | [<code>Schema</code>](#Schema) | found. |
| callback(schema) | <code>function</code> | the function that is called foreach schema found.         schema {Schema}: the found schema. |

<a name="schemaDocument"></a>

## schemaDocument(doc, callback(schema))
Go through each channel and for each parameter, and message payload and headers recursively call the callback for each schema.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| doc | [<code>AsyncAPIDocument</code>](#AsyncAPIDocument) |  |
| callback(schema) | <code>function</code> | the function that is called foreach schema found.         schema {Schema}: the found schema. |

<a name="assignIdToAnonymousSchemas"></a>

## assignIdToAnonymousSchemas(doc)
Gives schemas id to all anonymous schemas.

**Kind**: global function  

| Param | Type |
| --- | --- |
| doc | [<code>AsyncAPIDocument</code>](#AsyncAPIDocument) | 

