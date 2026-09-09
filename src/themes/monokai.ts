/**
 * @name monokai
 * @author sugar-high
 * @see https://sugar-high.vercel.app
 */
import { tags as t } from '@lezer/highlight';
import { type CreateThemeOptions, createTheme } from '@uiw/codemirror-themes';

export const defaultSettingsMonokaiLight: CreateThemeOptions['settings'] = {
  background: '#f7f7f5',
  foreground: '#6b8e23',
  gutterBackground: '#f7f7f5',
  lineHighlight: '#e8e8e820',
  selection: '#e0e0e0',
};

export const defaultSettingsMonokaiDark: CreateThemeOptions['settings'] = {
  background: '#272822',
  foreground: '#a6e22e',
  gutterBackground: '#272822',
  lineHighlight: '#3b3e4720',
  selection: '#3b3e47',
};

export const monokaiLightStyle: CreateThemeOptions['styles'] = [
  { color: '#c72565', tag: [t.keyword, t.heading] },
  { color: '#c72565', tag: [t.className, t.typeName] },
  {
    color: '#6b8e23',
    tag: [
      t.variableName,
      t.special(t.variableName),
      t.number,
      t.definition(t.variableName),
    ],
  },
  { color: '#3a7ca5', tag: [t.operator, t.bracket] },
  { color: '#6b8e23', tag: [t.propertyName, t.attributeName, t.link] },
  { color: '#cc7b18', tag: [t.atom, t.tagName] },
  { color: '#a68e39', tag: t.string },
  { color: '#99998e', tag: t.meta },
  { color: '#99998e', fontStyle: 'italic', tag: t.comment },
];

export const monokaiDarkStyle: CreateThemeOptions['styles'] = [
  { color: '#f92672', tag: [t.keyword, t.heading] },
  { color: '#f92672', tag: [t.className, t.typeName] },
  {
    color: '#a6e22e',
    tag: [
      t.variableName,
      t.special(t.variableName),
      t.number,
      t.definition(t.variableName),
    ],
  },
  { color: '#66d9ef', tag: [t.operator, t.bracket] },
  { color: '#a6e22e', tag: [t.propertyName, t.attributeName, t.link] },
  { color: '#fd971f', tag: [t.atom, t.tagName] },
  { color: '#e6db74', tag: t.string },
  { color: '#75715e', tag: t.meta },
  { color: '#75715e', fontStyle: 'italic', tag: t.comment },
];

export const monokaiLightInit = (opts?: Partial<CreateThemeOptions>) => {
  const { theme = 'light', settings = {}, styles = [] } = opts ?? {};
  return createTheme({
    settings: { ...defaultSettingsMonokaiLight, ...settings },
    styles: [...monokaiLightStyle, ...styles],
    theme,
  });
};

export const monokaiDarkInit = (opts?: Partial<CreateThemeOptions>) => {
  const { theme = 'dark', settings = {}, styles = [] } = opts ?? {};
  return createTheme({
    settings: { ...defaultSettingsMonokaiDark, ...settings },
    styles: [...monokaiDarkStyle, ...styles],
    theme,
  });
};

export const monokaiLight = monokaiLightInit();
export const monokaiDark = monokaiDarkInit();
