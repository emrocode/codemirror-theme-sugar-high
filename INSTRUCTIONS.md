# CodeMirror Theme Generator Instructions

Convert regex-based CSS variables into a valid `@uiw/codemirror-themes` TypeScript file. Apply DRY principles by grouping Lezer tags that share the same color into arrays.

## Mapping Rules

### 1. Settings Map
* `background`: `--theme-surface`
* `foreground`: `--sh-identifier`
* `gutterBackground`: `--theme-surface`
* `lineHighlight`: `#e8e8e820` (Light) / `#3b3e4720` (Dark)
* `selection`: `#e0e0e0` (Light) / `#3b3e47` (Dark)

### 2. Styles Map (Grouped by Variable)
* `--sh-keyword`: `[t.keyword, t.heading]`
* `--sh-class`: `[t.className, t.typeName]`
* `--sh-identifier`: `[t.variableName, t.special(t.variableName), t.number, t.definition(t.variableName)]`
* `--sh-sign`: `[t.operator, t.bracket]`
* `--sh-property`: `[t.propertyName, t.attributeName, t.link]`
* `--sh-entity`: `[t.atom, t.tagName]`
* `--sh-string`: `t.string`
* `--theme-muted`: `t.meta`
* `--sh-comment`: `t.comment` (add `fontStyle: 'italic'`)

## Output Template
Replace `[ThemeName]` with the camelCase name. Replace hex codes with mapped values. Output only the code.

```typescript
import { tags as t } from '@lezer/highlight';
import { type CreateThemeOptions, createTheme } from '@uiw/codemirror-themes';

export const defaultSettings[ThemeName]Light: CreateThemeOptions['settings'] = {
  background: '#...',
  foreground: '#...',
  gutterBackground: '#...',
  lineHighlight: '#e8e8e820',
  selection: '#e0e0e0',
};

export const defaultSettings[ThemeName]Dark: CreateThemeOptions['settings'] = {
  background: '#...',
  foreground: '#...',
  gutterBackground: '#...',
  lineHighlight: '#3b3e4720',
  selection: '#3b3e47',
};

export const [themeName]LightStyle: CreateThemeOptions['styles'] = [
  { color: '#...', tag: [t.keyword, t.heading] },
  { color: '#...', tag: [t.className, t.typeName] },
  { color: '#...', tag: [t.variableName, t.special(t.variableName), t.number, t.definition(t.variableName)] },
  { color: '#...', tag: [t.operator, t.bracket] },
  { color: '#...', tag: [t.propertyName, t.attributeName, t.link] },
  { color: '#...', tag: [t.atom, t.tagName] },
  { color: '#...', tag: t.string },
  { color: '#...', tag: t.meta },
  { color: '#...', fontStyle: 'italic', tag: t.comment },
];

export const [themeName]DarkStyle: CreateThemeOptions['styles'] = [
  { color: '#...', tag: [t.keyword, t.heading] },
  { color: '#...', tag: [t.className, t.typeName] },
  { color: '#...', tag: [t.variableName, t.special(t.variableName), t.number, t.definition(t.variableName)] },
  { color: '#...', tag: [t.operator, t.bracket] },
  { color: '#...', tag: [t.propertyName, t.attributeName, t.link] },
  { color: '#...', tag: [t.atom, t.tagName] },
  { color: '#...', tag: t.string },
  { color: '#...', tag: t.meta },
  { color: '#...', fontStyle: 'italic', tag: t.comment },
];

export const [themeName]LightInit = (opts?: Partial<CreateThemeOptions>) => {
  const { theme = 'light', settings = {}, styles = [] } = opts ?? {};
  return createTheme({
    settings: { ...defaultSettings[ThemeName]Light, ...settings },
    styles: [...[themeName]LightStyle, ...styles],
    theme,
  });
};

export const [themeName]DarkInit = (opts?: Partial<CreateThemeOptions>) => {
  const { theme = 'dark', settings = {}, styles = [] } = opts ?? {};
  return createTheme({
    settings: { ...defaultSettings[ThemeName]Dark, ...settings },
    styles: [...[themeName]DarkStyle, ...styles],
    theme,
  });
};

export const [themeName]Light = [themeName]LightInit();
export const [themeName]Dark = [themeName]DarkInit();