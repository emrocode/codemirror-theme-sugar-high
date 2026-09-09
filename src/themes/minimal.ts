/**
 * @name minimal
 * @author sugar-high
 * @see https://sugar-high.vercel.app
 */
import { tags as t } from '@lezer/highlight';
import { type CreateThemeOptions, createTheme } from '@uiw/codemirror-themes';

export const defaultSettingsMinimalLight: CreateThemeOptions['settings'] = {
  background: '#f6f6f6',
  foreground: '#404040',
  gutterBackground: '#f6f6f6',
  lineHighlight: '#e8e8e820',
  selection: '#e0e0e0',
};

export const defaultSettingsMinimalDark: CreateThemeOptions['settings'] = {
  background: '#252525',
  foreground: '#909090',
  gutterBackground: '#252525',
  lineHighlight: '#3b3e4720',
  selection: '#3b3e47',
};

export const minimalLightStyle: CreateThemeOptions['styles'] = [
  { color: '#606060', tag: [t.keyword, t.heading] },
  { color: '#404040', tag: [t.className, t.typeName] },
  {
    color: '#404040',
    tag: [
      t.variableName,
      t.special(t.variableName),
      t.number,
      t.definition(t.variableName),
    ],
  },
  { color: '#404040', tag: [t.operator, t.bracket] },
  { color: '#404040', tag: [t.propertyName, t.attributeName, t.link] },
  { color: '#404040', tag: [t.atom, t.tagName] },
  { color: '#808080', tag: t.string },
  { color: '#999999', tag: t.meta },
  { color: '#999999', fontStyle: 'italic', tag: t.comment },
];

export const minimalDarkStyle: CreateThemeOptions['styles'] = [
  { color: '#b0b0b0', tag: [t.keyword, t.heading] },
  { color: '#909090', tag: [t.className, t.typeName] },
  {
    color: '#909090',
    tag: [
      t.variableName,
      t.special(t.variableName),
      t.number,
      t.definition(t.variableName),
    ],
  },
  { color: '#909090', tag: [t.operator, t.bracket] },
  { color: '#909090', tag: [t.propertyName, t.attributeName, t.link] },
  { color: '#909090', tag: [t.atom, t.tagName] },
  { color: '#808080', tag: t.string },
  { color: '#a0a0a0', tag: t.meta },
  { color: '#a0a0a0', fontStyle: 'italic', tag: t.comment },
];

export const minimalLightInit = (opts?: Partial<CreateThemeOptions>) => {
  const { theme = 'light', settings = {}, styles = [] } = opts ?? {};
  return createTheme({
    settings: { ...defaultSettingsMinimalLight, ...settings },
    styles: [...minimalLightStyle, ...styles],
    theme,
  });
};

export const minimalDarkInit = (opts?: Partial<CreateThemeOptions>) => {
  const { theme = 'dark', settings = {}, styles = [] } = opts ?? {};
  return createTheme({
    settings: { ...defaultSettingsMinimalDark, ...settings },
    styles: [...minimalDarkStyle, ...styles],
    theme,
  });
};

export const minimalLight = minimalLightInit();
export const minimalDark = minimalDarkInit();
