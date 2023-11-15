# Tiny EditorConfig

A tiny isomorphic parser and resolver for [EditorConfig](https://editorconfig.org/).

## Install

```sh
npm install --save tiny-editorconfig
```

## Usage

```ts
import * as EditorConfig from 'tiny-editorconfig';

// It can parse an .editorconfig string

const INPUT1 = `
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

const parsed1 = EditorConfig.parse ( INPUT );
// {
//   root: true,
//   overrides: {
//     '*': {
//       charset: 'utf-8',
//       endOfLine: 'lf',
//       indentSize: 2,
//       indentStyle: 'space',
//       insertFinalNewline: true,
//       trimTrailingWhitespace: true
//     },
//     '*.md': {
//       trimTrailingWhitespace: false
//     }
//   }
// }

const INPUT2 = `
  [*]
  end_of_line = crlf
  indent_size = 4
`;

const parsed2 = EditorConfig.parse ( INPUT );
// {
//   overrides: {
//     '*': {
//       endOfLine: 'crlf',
//       indentSize: 4
//     }
//   }
// }

// It can resolve multiple configurations for a given path

const resolved = resolve ( [PARSED1, PARSED2], '/path/to/test.md' );
// {
//   root: true,
//   charset: 'utf-8',
//   endOfLine: 'crlf',
//   indentSize: 4,
//   indentStyle: 'space',
//   insertFinalNewline: true,
//   trimTrailingWhitespace: false
// }
```

## License

MIT © Fabio Spampinato
