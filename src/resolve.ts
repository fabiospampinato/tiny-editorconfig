
/* IMPORT */

import zeptomatch from 'zeptomatch';
import extend from './extend';
import type {Config, ConfigWithOverrides} from './types';

/* HELPERS */

const GLOBS_MATCH_ALL = new Set ([ '*', '**', '**/*' ]);

/* MAIN */

// The provided configs are ordered from lowest to highest priority

const resolve = ( configs: ConfigWithOverrides[], filePath: string ): Config => {

  const resolved: Config = {};

  for ( let i = 0, l = configs.length; i < l; i++ ) {

    const config = configs[i];

    extend ( resolved, config );

    const overrides = config.overrides;

    for ( const override in overrides ) {

      const config = overrides[override];

      if ( !config ) continue;

      const glob = `**/${override}`;

      if ( !GLOBS_MATCH_ALL.has ( override ) && !zeptomatch ( glob, filePath ) ) continue;

      extend ( resolved, config );

    }

  }

  return resolved;

};

/* EXPORT */

export default resolve;
