
/* MAIN */

const INPUT_LOWER = `
  root=true

  [*]
  charset = UTF-8
  end_of_line = lf
  indent_size = 2
  indent_style = "space"
  insert_final_newline = true
  trim_trailing_whitespace = true

  [*.md]
  trim_trailing_whitespace = false
`;

const INPUT_HIGHER = `
  [*]
  end_of_line = crlf
  indent_size = 4
`;

const PARSED_LOWER = {
  root: true,
  overrides: {
    '*': {
      charset: 'utf-8',
      endOfLine: 'lf',
      indentSize: 2,
      indentStyle: 'space',
      insertFinalNewline: true,
      trimTrailingWhitespace: true
    },
    '*.md': {
      trimTrailingWhitespace: false
    }
  }
};

const PARSED_HIGHER = {
  overrides: {
    '*': {
      endOfLine: 'crlf',
      indentSize: 4
    }
  }
};

const RESOLVED_JS = {
  root: true,
  charset: 'utf-8',
  endOfLine: 'crlf',
  indentSize: 4,
  indentStyle: 'space',
  insertFinalNewline: true,
  trimTrailingWhitespace: true
};

const RESOLVED_MD = {
  root: true,
  charset: 'utf-8',
  endOfLine: 'crlf',
  indentSize: 4,
  indentStyle: 'space',
  insertFinalNewline: true,
  trimTrailingWhitespace: false
};

/* EXPORT */

export {INPUT_LOWER, INPUT_HIGHER, PARSED_LOWER, PARSED_HIGHER, RESOLVED_JS, RESOLVED_MD};
