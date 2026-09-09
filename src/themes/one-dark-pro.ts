/**
 * @name one-dark-pro
 * @author sugar-high
 * @see https://sugar-high.vercel.app
 */
import { tags as t } from '@lezer/highlight';
import { type CreateThemeOptions, createTheme } from '@uiw/codemirror-themes';

export const defaultSettingsOneDarkProLight: CreateThemeOptions['settings'] = {
  background: '#fafafa',
  foreground: '#383a42',
  gutterBackground: '#fafafa',
  lineHighlight: '#e8e8e820',
  selection: '#e0e0e0',
};

export const defaultSettingsOneDarkProDark: CreateThemeOptions['settings'] = {
  background: '#282c34',
  foreground: '#abb2bf',
  gutterBackground: '#282c34',
  lineHighlight: '#3b3e4720',
  selection: '#3b3e47',
};

export const oneDarkProLightStyle: CreateThemeOptions['styles'] = [
  { color: '#a626a4', tag: [t.keyword, t.heading] },
  { color: '#a626a4', tag: [t.className, t.typeName] },
  {
    color: '#383a42',
    tag: [
      t.variableName,
      t.special(t.variableName),
      t.number,
      t.definition(t.variableName),
    ],
  },
  { color: '#383a42', tag: [t.operator, t.bracket] },
  { color: '#0184bc', tag: [t.propertyName, t.attributeName, t.link] },
  { color: '#4078f2', tag: [t.atom, t.tagName] },
  { color: '#50a14f', tag: t.string },
  { color: '#a0a1a7', tag: t.meta },
  { color: '#a0a1a7', fontStyle: 'italic', tag: t.comment },
];

export const oneDarkProDarkStyle: CreateThemeOptions['styles'] = [
  { color: '#c678dd', tag: [t.keyword, t.heading] },
  { color: '#e06c75', tag: [t.className, t.typeName] },
  {
    color: '#abb2bf',
    tag: [
      t.variableName,
      t.special(t.variableName),
      t.number,
      t.definition(t.variableName),
    ],
  },
  { color: '#abb2bf', tag: [t.operator, t.bracket] },
  { color: '#56b6c2', tag: [t.propertyName, t.attributeName, t.link] },
  { color: '#61afef', tag: [t.atom, t.tagName] },
  { color: '#98c379', tag: t.string },
  { color: '#5c6370', tag: t.meta },
  { color: '#5c6370', fontStyle: 'italic', tag: t.comment },
];

export const oneDarkProLightInit = (opts?: Partial<CreateThemeOptions>) => {
  const { theme = 'light', settings = {}, styles = [] } = opts ?? {};
  return createTheme({
    settings: { ...defaultSettingsOneDarkProLight, ...settings },
    styles: [...oneDarkProLightStyle, ...styles],
    theme,
  });
};

export const oneDarkProDarkInit = (opts?: Partial<CreateThemeOptions>) => {
  const { theme = 'dark', settings = {}, styles = [] } = opts ?? {};
  return createTheme({
    settings: { ...defaultSettingsOneDarkProDark, ...settings },
    styles: [...oneDarkProDarkStyle, ...styles],
    theme,
  });
};

export const oneDarkProLight = oneDarkProLightInit();
export const oneDarkProDark = oneDarkProDarkInit();
