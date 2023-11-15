
/* IMPORT */

import {isUndefined} from './utils';
import type {Config} from './types';

/* MAIN */

const extend = ( target: Config, source: Config ): Config => {

  for ( const prop in source ) {

    if ( prop === 'overrides' ) continue;

    const value = source[prop];

    if ( isUndefined ( value ) ) continue;

    target[prop] = value;

  }

  return target;

};

/* EXPORT */

export default extend;
