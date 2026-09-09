/**
 * @name vscode
 * @author sugar-high
 * @see https://sugar-high.vercel.app
 */
import { tags as t } from '@lezer/highlight';
import { type CreateThemeOptions, createTheme } from '@uiw/codemirror-themes';

export const defaultSettingsVscodeLight: CreateThemeOptions['settings'] = {
  background: '#f6f8fa',
  foreground: '#24292f',
  gutterBackground: '#f6f8fa',
  lineHighlight: '#e8e8e820',
  selection: '#d0d7de',
};

export const defaultSettingsVscodeDark: CreateThemeOptions['settings'] = {
  background: '#1e1e1e',
  foreground: '#d4d4d4',
  gutterBackground: '#1e1e1e',
  lineHighlight: '#2a2d2e20',
  selection: '#264f78',
};

export const vscodeLightStyle: CreateThemeOptions['styles'] = [
  { color: '#cf222e', tag: [t.keyword, t.heading] },
  { color: '#6f42c1', tag: [t.className, t.typeName] },
  {
    color: '#24292f',
    tag: [
      t.variableName,
      t.special(t.variableName),
      t.number,
      t.definition(t.variableName),
    ],
  },
  { color: '#24292f', tag: [t.operator, t.bracket] },
  { color: '#0550ae', tag: [t.propertyName, t.attributeName, t.link] },
  { color: '#953800', tag: [t.atom, t.tagName] },
  { color: '#032f62', tag: t.string },
  { color: '#6e7781', tag: t.meta },
  { color: '#6e7781', fontStyle: 'italic', tag: t.comment },
];

export const vscodeDarkStyle: CreateThemeOptions['styles'] = [
  { color: '#569cd6', tag: [t.keyword, t.heading] },
  { color: '#4ec9b0', tag: [t.className, t.typeName] },
  {
    color: '#9cdcfe',
    tag: [
      t.variableName,
      t.special(t.variableName),
      t.number,
      t.definition(t.variableName),
    ],
  },
  { color: '#d4d4d4', tag: [t.operator, t.bracket] },
  { color: '#9cdcfe', tag: [t.propertyName, t.attributeName, t.link] },
  { color: '#dcdcaa', tag: [t.atom, t.tagName] },
  { color: '#ce9178', tag: t.string },
  { color: '#6a9955', tag: t.meta },
  { color: '#6a9955', fontStyle: 'italic', tag: t.comment },
];

export const vscodeLightInit = (opts?: Partial<CreateThemeOptions>) => {
  const { theme = 'light', settings = {}, styles = [] } = opts ?? {};
  return createTheme({
    settings: { ...defaultSettingsVscodeLight, ...settings },
    styles: [...vscodeLightStyle, ...styles],
    theme,
  });
};

export const vscodeDarkInit = (opts?: Partial<CreateThemeOptions>) => {
  const { theme = 'dark', settings = {}, styles = [] } = opts ?? {};
  return createTheme({
    settings: { ...defaultSettingsVscodeDark, ...settings },
    styles: [...vscodeDarkStyle, ...styles],
    theme,
  });
};

export const vscodeLight = vscodeLightInit();
export const vscodeDark = vscodeDarkInit();
