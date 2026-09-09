/**
 * @name toky-night
 * @author sugar-high
 * @see https://sugar-high.vercel.app
 */
import { tags as t } from '@lezer/highlight';
import { type CreateThemeOptions, createTheme } from '@uiw/codemirror-themes';

export const defaultSettingsTokyoNightLight: CreateThemeOptions['settings'] = {
  background: '#f5f5f7',
  foreground: '#565a6e',
  gutterBackground: '#f5f5f7',
  lineHighlight: '#e8e8e820',
  selection: '#e0e0e0',
};

export const defaultSettingsTokyoNightDark: CreateThemeOptions['settings'] = {
  background: '#1a1b26',
  foreground: '#c0caf5',
  gutterBackground: '#1a1b26',
  lineHighlight: '#3b3e4720',
  selection: '#3b3e47',
};

export const tokyoNightLightStyle: CreateThemeOptions['styles'] = [
  { color: '#8c4351', tag: [t.keyword, t.heading] },
  { color: '#5a4a78', tag: [t.className, t.typeName] },
  {
    color: '#565a6e',
    tag: [
      t.variableName,
      t.special(t.variableName),
      t.number,
      t.definition(t.variableName),
    ],
  },
  { color: '#565a6e', tag: [t.operator, t.bracket] },
  { color: '#166775', tag: [t.propertyName, t.attributeName, t.link] },
  { color: '#0f4b6e', tag: [t.atom, t.tagName] },
  { color: '#485e30', tag: t.string },
  { color: '#848cb5', tag: t.meta },
  { color: '#848cb5', fontStyle: 'italic', tag: t.comment },
];

export const tokyoNightDarkStyle: CreateThemeOptions['styles'] = [
  { color: '#f7768e', tag: [t.keyword, t.heading] },
  { color: '#bb9af7', tag: [t.className, t.typeName] },
  {
    color: '#c0caf5',
    tag: [
      t.variableName,
      t.special(t.variableName),
      t.number,
      t.definition(t.variableName),
    ],
  },
  { color: '#c0caf5', tag: [t.operator, t.bracket] },
  { color: '#73daca', tag: [t.propertyName, t.attributeName, t.link] },
  { color: '#7dcfff', tag: [t.atom, t.tagName] },
  { color: '#9ece6a', tag: t.string },
  { color: '#565f89', tag: t.meta },
  { color: '#565f89', fontStyle: 'italic', tag: t.comment },
];

export const tokyoNightLightInit = (opts?: Partial<CreateThemeOptions>) => {
  const { theme = 'light', settings = {}, styles = [] } = opts ?? {};
  return createTheme({
    settings: { ...defaultSettingsTokyoNightLight, ...settings },
    styles: [...tokyoNightLightStyle, ...styles],
    theme,
  });
};

export const tokyoNightDarkInit = (opts?: Partial<CreateThemeOptions>) => {
  const { theme = 'dark', settings = {}, styles = [] } = opts ?? {};
  return createTheme({
    settings: { ...defaultSettingsTokyoNightDark, ...settings },
    styles: [...tokyoNightDarkStyle, ...styles],
    theme,
  });
};

export const tokyoNightLight = tokyoNightLightInit();
export const tokyoNightDark = tokyoNightDarkInit();
