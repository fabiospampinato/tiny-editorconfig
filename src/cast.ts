
/* IMPORT */

import {isBoolean, isInteger, isObject, isObjectEmpty, isString} from './utils';
import type {Results} from 'ini-simple-parser';
import type {Config, ConfigWithOverrides} from './types';

/* HELPERS */

const CHARSETS = new Set ([ 'latin1', 'utf-8', 'utf-8-bom', 'utf-16be', 'utf-16le' ]);
const END_OF_LINES = new Set ([ 'cr', 'lf', 'crlf' ]);
const INDENT_STYLES = new Set ([ 'space', 'tab' ]);

const isCharset = ( value: string ): value is Required<Config>['charset'] => {
  return CHARSETS.has ( value );
};

const isEndOfLine = ( value: string ): value is Required<Config>['endOfLine'] => {
  return END_OF_LINES.has ( value );
};

const isIndentStyle = ( value: string ): value is Required<Config>['indentStyle'] => {
  return INDENT_STYLES.has ( value );
};

/* MAIN */

const cast = ( results: Results, config: ConfigWithOverrides = {}, includeOverrides: boolean = true ): ConfigWithOverrides => {

  for ( const prop in results ) {

    let value = results[prop];

    if ( isString ( value ) ) {

      value = value.toLowerCase ();

      if ( prop === 'charset' ) {

        if ( !isCharset ( value ) ) continue;

        config.charset = value;

      } else if ( prop === 'end_of_line' ) {

        if ( !isEndOfLine ( value ) ) continue;

        config.endOfLine = value;

      } else if ( prop === 'indent_style' ) {

        if ( !isIndentStyle ( value ) ) continue;

        config.indentStyle = value;

      }

    } else if ( isBoolean ( value ) ) {

      if ( prop === 'insert_final_newline' ) {

        config.insertFinalNewline = value;

      } else if ( prop === 'root' ) {

        config.root = value;

      } else if ( prop === 'trim_trailing_whitespace' ) {

        config.trimTrailingWhitespace = value;

      }

    } else if ( isInteger ( value ) ) {

      if ( value >= 0 ) {

        if ( prop === 'indent_size' ) {

          config.indentSize = value;

        } else if ( prop === 'tab_width' ) {

          config.tabWidth = value;

        }

      }

    } else if ( isObject ( value ) ) {

      if ( includeOverrides ) {

        config.overrides ||= {};

        const override = config.overrides[prop] ||= {};

        cast ( value, override, false );

        if ( isObjectEmpty ( override ) ) {

          delete config.overrides[prop];

          if ( isObjectEmpty ( config.overrides ) ) {

            delete config.overrides;

          }

        }

      }

    }

  }

  return config;

};

/* EXPORT */

export default cast;
