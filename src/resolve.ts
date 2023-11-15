
/* IMPORT */

import zeptomatch from 'zeptomatch';
import extend from './extend';
import type {Config, ConfigWithOverrides} from './types';

/* MAIN */

// The provided configs are ordered from lowest to highest priority

const resolve = ( configs: ConfigWithOverrides[], filePath: string ): Config => {

  const resolved: Config = {};

  for ( let i = 0, l = configs.length; i < l; i++ ) {

    const config = configs[i];

    extend ( resolved, config );

    const overrides = config.overrides;

    for ( const override in overrides ) {

      const glob = `**/${override}`;

      if ( override !== '*' && !zeptomatch ( glob, filePath ) ) continue;

      extend ( resolved, overrides[override] );

    }

  }

  return resolved;

};

/* EXPORT */

export default resolve;
