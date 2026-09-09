# @emrocode/codemirror-theme-sugar-high

[CodeMirror 6](https://codemirror.net/6/) themes ported from [Sugar High](https://sugar-high.vercel.app) for use with [`@uiw/react-codemirror`](https://github.com/uiwjs/react-codemirror).

> **Note:** Sugar High uses regex for syntax highlighting. Since CodeMirror uses Lezer-based grammars, these ports are not perfect and may not match the original styles exactly.

## Themes

- **grubvox**
- **minimal**
- **monokai**
- **one-dark-pro**
- **taffy**
- **tokyo-night**
- **vercel**
- **vscode**

## Install

```sh
npm install @emrocode/codemirror-theme-sugar-high
```

## Usage

```tsx
import { EditorView } from '@codemirror/view';
import { taffyLight } from '@emrocode/codemirror-theme-sugar-high';

export default function App() {
  return (
    <CodeMirror
      value="console.log('hello');"
      theme={taffyLight}
    />
  );
}
```

## License

MIT
