
/* IMPORT */

import {describe} from 'fava';
import {parse, resolve} from '../dist/index.js';
import {INPUT_LOWER, INPUT_HIGHER, PARSED_LOWER, PARSED_HIGHER, RESOLVED_JS, RESOLVED_MD} from './fixtures.js';

/* MAIN */

describe ( 'Tiny EditorConfig', it => {

  it ( 'can parse an .editorconfig string', t => {

    const parsed1 = parse ( INPUT_LOWER );
    const parsed2 = parse ( INPUT_HIGHER );

    t.deepEqual ( parsed1, PARSED_LOWER );
    t.deepEqual ( parsed2, PARSED_HIGHER );

  });

  it ( 'can resolve multiple .editorconfig objects for a target path', t => {

    const resolved1 = resolve ( [PARSED_LOWER, PARSED_HIGHER], '/path/to/test.js' );
    const resolved2 = resolve ( [PARSED_LOWER, PARSED_HIGHER], '/path/to/test.md' );

    t.deepEqual ( resolved1, RESOLVED_JS );
    t.deepEqual ( resolved2, RESOLVED_MD );

  });

});
