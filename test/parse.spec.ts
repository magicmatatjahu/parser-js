import { AsyncAPIDocumentV2 } from '../src/models';
import { Parser } from '../src/parser';
import { parse } from '../src/parse';

describe('parse()', function() {
  const parser = new Parser();

  it('should parse valid document', async function() {
    const document = {
      asyncapi: '2.0.0',
      info: {
        title: 'Valid AsyncApi document',
        version: '1.0',
      },
      channels: {}
    }
    const { parsed, diagnostics } = await parse(parser, document);
    
    expect(parsed).toBeInstanceOf(AsyncAPIDocumentV2);
    expect(diagnostics.length > 0).toEqual(true);
  });

  it('should parse invalid document', async function() {
    const document = {
      asyncapi: '2.0.0',
      info: {
        title: 'Valid AsyncApi document',
        version: '1.0',
      },
    }
    const { parsed, diagnostics } = await parse(parser, document);
    
    expect(parsed).toEqual(undefined);
    expect(diagnostics.length > 0).toEqual(true);
  });

  it('should parse document with circular schemas', async function() {
    const document = {
      asyncapi: '2.0.0',
      info: {
        title: 'Valid AsyncApi document',
        version: '1.0',
      },
      channels: {
        someChannel: {
          publish: {
            operationId: 'someId',
            message: {
              payload: {
                type: 'object',
                properties: {
                  property: {
                    type: 'object',
                    properties: {
                      circular: {
                        $ref: '#/channels/someChannel/publish/message/payload/properties/property'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    const { parsed } = await parse(parser, document);
    
    expect(parsed).toBeInstanceOf(AsyncAPIDocumentV2);
    expect(parsed?.json().channels.someChannel.publish.message.payload.properties.property.properties.circular).toEqual({ $ref: '#/channels/someChannel/publish/message/payload/properties/property' });
  });

  it.only('should parse document with reference to the another file with circular reference', async function() {
    const document = {
      asyncapi: '2.0.0',
      info: {
        title: 'Valid AsyncApi document',
        version: '1.0',
      },
      channels: {
        someChannel: {
          publish: {
            operationId: 'someId',
            message: {
              payload: {
                // $ref: './documents/circular-refs.yaml'
                // $ref: './documents/with-reference.yaml'
                type: 'string'
                // $ref: 'https://raw.githubusercontent.com/asyncapi/parser-js/master/test/good/circular-refs-file-ref.yaml'
              }
            }
          }
        }
      }
    }
    const { parsed, diagnostics } = await parse(parser, document, { validateOptions: { path: 'file://' + __filename } });

    // console.log(parsed?.json().channels.someChannel.publish.message.payload)
    
    // expect(parsed).toBeInstanceOf(AsyncAPIDocumentV2);
    // console.log(parsed?.json().channels.someChannel.publish.message.payload.ExternalFile.properties.testExt)
    // console.log(parsed?.json().channels.someChannel.publish.message.payload.YetAnother.properties)
    // expect(parsed?.json().channels.someChannel.publish.message.payload.properties.property.properties.circular).toEqual({ $ref: '#/channels/someChannel/publish/message/payload/properties/property' });
  });
});
