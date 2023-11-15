
/* IMPORT */

import ini from 'ini-simple-parser';
import cast from './cast';
import type {ConfigWithOverrides} from './types';

/* MAIN */

const parse = ( input: string ): ConfigWithOverrides => {

  return cast ( ini ( input, {
    inferBooleans: true,
    inferNumbers: true,
    inferStrings: true,
    inlineComments: true
  }));

};

/* EXPORT */

export default parse;
