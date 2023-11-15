
/* MAIN */

const isBoolean = ( value: unknown ): value is boolean => {

  return typeof value === 'boolean';

};

const isInteger = ( value: unknown ): value is number => {

  return Number.isInteger ( value );

};

const isObject = ( value: unknown ): value is object => {

  if ( value === null ) return false;

  const type = typeof value;

  return type === 'object' || type === 'function';

};

const isObjectEmpty = ( value: object ): boolean => {

  for ( const _ in value ) return false;

  return true;

};

const isString = ( value: unknown ): value is string => {

  return typeof value === 'string';

};

const isUndefined = ( value: unknown ): value is undefined => {

  return typeof value === 'undefined';

};

/* EXPORT */

export {isBoolean, isInteger, isObject, isObjectEmpty, isString, isUndefined};
