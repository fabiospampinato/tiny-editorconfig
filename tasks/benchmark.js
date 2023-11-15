
/* IMPORT */

import benchmark from 'benchloop';
import {parse, resolve} from '../dist/index.js';
import {INPUT_LOWER, PARSED_LOWER, PARSED_HIGHER} from '../test/fixtures.js';

/* MAIN */

benchmark.config ({
  iterations: 100_000
});

benchmark ({
  name: 'parse',
  fn: () => {
    parse ( INPUT_LOWER );
  }
});

benchmark ({
  name: 'resolve',
  fn: () => {
    resolve ( [PARSED_LOWER, PARSED_HIGHER], '/path/to/test.md' );
  }
});

benchmark.summary ();
