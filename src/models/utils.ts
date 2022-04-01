import { BaseModel } from './base';

export interface Constructor<T> extends Function {
  new (...any: any[]): T;
}

export interface MixinType<T = any> extends Function {
  prototype: T;
}

export type RecordType = { [key: string]: unknown };

export function Mixin<T, A>(a: MixinType<A>): Constructor<BaseModel<T> & A>;
export function Mixin<T, A, B>(a: MixinType<A>, b: MixinType<B>): Constructor<BaseModel<T> & A & B>;
export function Mixin<T, A, B, C>(a: MixinType<A>, b: MixinType<B>, c: MixinType<C>): Constructor<BaseModel<T> & A & B & C>;
export function Mixin<T, A, B, C, D>(a: MixinType<A>, b: MixinType<B>, c: MixinType<C>, d: MixinType<D>): Constructor<BaseModel<T> & A & B & C & D>;
export function Mixin<T, A, B, C, D, E>(a: MixinType<A>, b: MixinType<B>, c: MixinType<C>, d: MixinType<D>, e: MixinType<E>): Constructor<BaseModel<T> & A & B & C & D & E>;
export function Mixin(...constructors: any[]) {
  return mixin(class extends BaseModel<any> {}, constructors);
}

function mixin(derivedCtor: any, constructors: any[]): typeof BaseModel {
  constructors.forEach((ctor) => {
    Object.getOwnPropertyNames(ctor.prototype).forEach((name) => {
      if (name === 'constructor') {
        return;
      }
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(ctor.prototype, name) || Object.create(null),
      );
    });
  });
  return derivedCtor;
}

export function createArrayFromMap(json: Record<string,any>){
  const ArrayObject = [];
  for (const [key, value] of Object.entries(json)) {
    value['id'] = key;
    ArrayObject.push(value);
  };

  return ArrayObject;
}