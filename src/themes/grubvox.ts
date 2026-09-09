/**
 * @name gruvbox
 * @author sugar-high
 * @see https://sugar-high.vercel.app
 */
import { tags as t } from '@lezer/highlight';
import { type CreateThemeOptions, createTheme } from '@uiw/codemirror-themes';

export const defaultSettingsGruvboxLight: CreateThemeOptions['settings'] = {
  background: '#fbf1c7',
  foreground: '#3c3836',
  gutterBackground: '#fbf1c7',
  lineHighlight: '#e8e8e820',
  selection: '#e0e0e0',
};

export const defaultSettingsGruvboxDark: CreateThemeOptions['settings'] = {
  background: '#282828',
  foreground: '#ebdbb2',
  gutterBackground: '#282828',
  lineHighlight: '#3b3e4720',
  selection: '#3b3e47',
};

export const gruvboxLightStyle: CreateThemeOptions['styles'] = [
  { color: '#9d0006', tag: [t.keyword, t.heading] },
  { color: '#b57614', tag: [t.className, t.typeName] },
  {
    color: '#3c3836',
    tag: [
      t.variableName,
      t.special(t.variableName),
      t.number,
      t.definition(t.variableName),
    ],
  },
  { color: '#3c3836', tag: [t.operator, t.bracket] },
  { color: '#076678', tag: [t.propertyName, t.attributeName, t.link] },
  { color: '#427b58', tag: [t.atom, t.tagName] },
  { color: '#79740e', tag: t.string },
  { color: '#928374', tag: t.meta },
  { color: '#928374', fontStyle: 'italic', tag: t.comment },
];

export const gruvboxDarkStyle: CreateThemeOptions['styles'] = [
  { color: '#fb4934', tag: [t.keyword, t.heading] },
  { color: '#fabd2f', tag: [t.className, t.typeName] },
  {
    color: '#ebdbb2',
    tag: [
      t.variableName,
      t.special(t.variableName),
      t.number,
      t.definition(t.variableName),
    ],
  },
  { color: '#ebdbb2', tag: [t.operator, t.bracket] },
  { color: '#83a598', tag: [t.propertyName, t.attributeName, t.link] },
  { color: '#8ec07c', tag: [t.atom, t.tagName] },
  { color: '#b8bb26', tag: t.string },
  { color: '#928374', tag: t.meta },
  { color: '#928374', fontStyle: 'italic', tag: t.comment },
];

export const gruvboxLightInit = (opts?: Partial<CreateThemeOptions>) => {
  const { theme = 'light', settings = {}, styles = [] } = opts ?? {};
  return createTheme({
    settings: { ...defaultSettingsGruvboxLight, ...settings },
    styles: [...gruvboxLightStyle, ...styles],
    theme,
  });
};

export const gruvboxDarkInit = (opts?: Partial<CreateThemeOptions>) => {
  const { theme = 'dark', settings = {}, styles = [] } = opts ?? {};
  return createTheme({
    settings: { ...defaultSettingsGruvboxDark, ...settings },
    styles: [...gruvboxDarkStyle, ...styles],
    theme,
  });
};

export const gruvboxLight = gruvboxLightInit();
export const gruvboxDark = gruvboxDarkInit();
