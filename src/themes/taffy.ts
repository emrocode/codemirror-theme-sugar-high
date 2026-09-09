/**
 * @name taffy
 * @author sugar-high
 * @see https://sugar-high.vercel.app
 */
import { tags as t } from '@lezer/highlight';
import { type CreateThemeOptions, createTheme } from '@uiw/codemirror-themes';

export const defaultSettingsTaffyLight: CreateThemeOptions['settings'] = {
  background: '#f6f6f6',
  foreground: '#354150',
  gutterBackground: '#f6f6f6',
  lineHighlight: '#e8e8e820',
  selection: '#e0e0e0',
};

export const defaultSettingsTaffyDark: CreateThemeOptions['settings'] = {
  background: '#25272d',
  foreground: '#d4d4d4',
  gutterBackground: '#25272d',
  lineHighlight: '#3b3e4720',
  selection: '#3b3e47',
};

export const taffyLightStyle: CreateThemeOptions['styles'] = [
  { color: '#f47067', tag: [t.keyword, t.heading] },
  { color: '#8d85ff', tag: [t.className, t.typeName] },
  {
    color: '#354150',
    tag: [
      t.variableName,
      t.special(t.variableName),
      t.number,
      t.definition(t.variableName),
    ],
  },
  { color: '#8996a3', tag: [t.operator, t.bracket] },
  { color: '#4e8fdf', tag: [t.propertyName, t.attributeName, t.link] },
  { color: '#665ac7', tag: [t.atom, t.tagName] },
  { color: '#00a99a', tag: t.string },
  { color: '#a19595', tag: t.meta },
  { color: '#a19595', fontStyle: 'italic', tag: t.comment },
];

export const taffyDarkStyle: CreateThemeOptions['styles'] = [
  { color: '#ffada8', tag: [t.keyword, t.heading] },
  { color: '#7eb5ff', tag: [t.className, t.typeName] },
  {
    color: '#d4d4d4',
    tag: [
      t.variableName,
      t.special(t.variableName),
      t.number,
      t.definition(t.variableName),
    ],
  },
  { color: '#8b949e', tag: [t.operator, t.bracket] },
  { color: '#79c0ff', tag: [t.propertyName, t.attributeName, t.link] },
  { color: '#b7adff', tag: [t.atom, t.tagName] },
  { color: '#88bbb6', tag: t.string },
  { color: '#8b8b8b', tag: t.meta },
  { color: '#8b8b8b', fontStyle: 'italic', tag: t.comment },
];

export const taffyLightInit = (opts?: Partial<CreateThemeOptions>) => {
  const { theme = 'light', settings = {}, styles = [] } = opts ?? {};
  return createTheme({
    settings: { ...defaultSettingsTaffyLight, ...settings },
    styles: [...taffyLightStyle, ...styles],
    theme,
  });
};

export const taffyDarkInit = (opts?: Partial<CreateThemeOptions>) => {
  const { theme = 'dark', settings = {}, styles = [] } = opts ?? {};
  return createTheme({
    settings: { ...defaultSettingsTaffyDark, ...settings },
    styles: [...taffyDarkStyle, ...styles],
    theme,
  });
};

export const taffyLight = taffyLightInit();
export const taffyDark = taffyDarkInit();
