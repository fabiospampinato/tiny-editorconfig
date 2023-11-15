
/* MAIN */

type Config = {
  charset?: 'latin1' | 'utf-8' | 'utf-8-bom' | 'utf-16be' | 'utf-16le',
  endOfLine?: 'cr' | 'lf' | 'crlf',
  indentSize?: number,
  indentStyle?: 'space' | 'tab',
  insertFinalNewline?: boolean,
  root?: boolean,
  tabWidth?: number,
  trimTrailingWhitespace?: boolean
};

type ConfigWithOverrides = Config & {
  overrides?: Record<string, Config>
};

/* EXPORT */

export type {Config, ConfigWithOverrides};
