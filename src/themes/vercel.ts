/**
 * @name vercel
 * @author sugar-high
 * @see https://sugar-high.vercel.app
 */
import { tags as t } from '@lezer/highlight';
import { type CreateThemeOptions, createTheme } from '@uiw/codemirror-themes';

export const defaultSettingsVercelLight: CreateThemeOptions['settings'] = {
  background: '#fff',
  foreground: '#171717',
  gutterBackground: '#fff',
  lineHighlight: '#e8e8e820',
  selection: '#e0e0e0',
};

export const defaultSettingsVercelDark: CreateThemeOptions['settings'] = {
  background: '#000',
  foreground: '#ededed',
  gutterBackground: '#000',
  lineHighlight: '#3b3e4720',
  selection: '#3b3e47',
};

export const vercelLightStyle: CreateThemeOptions['styles'] = [
  { color: '#c41562', tag: [t.keyword, t.heading] },
  { color: '#107d32', tag: [t.className, t.typeName] },
  {
    color: '#171717',
    tag: [
      t.variableName,
      t.special(t.variableName),
      t.number,
      t.definition(t.variableName),
    ],
  },
  { color: '#171717', tag: [t.operator, t.bracket] },
  { color: '#d60020', tag: [t.propertyName, t.attributeName, t.link] },
  { color: '#107d32', tag: [t.atom, t.tagName] },
  { color: '#107d32', tag: t.string },
  { color: '#4d4d4d', tag: t.meta },
  { color: '#4d4d4d', fontStyle: 'italic', tag: t.comment },
];

export const vercelDarkStyle: CreateThemeOptions['styles'] = [
  { color: '#ff518d', tag: [t.keyword, t.heading] },
  { color: '#00ca52', tag: [t.className, t.typeName] },
  {
    color: '#ededed',
    tag: [
      t.variableName,
      t.special(t.variableName),
      t.number,
      t.definition(t.variableName),
    ],
  },
  { color: '#ededed', tag: [t.operator, t.bracket] },
  { color: '#ff5e63', tag: [t.propertyName, t.attributeName, t.link] },
  { color: '#00ca52', tag: [t.atom, t.tagName] },
  { color: '#00ca52', tag: t.string },
  { color: '#a0a0a0', tag: t.meta },
  { color: '#a0a0a0', fontStyle: 'italic', tag: t.comment },
];

export const vercelLightInit = (opts?: Partial<CreateThemeOptions>) => {
  const { theme = 'light', settings = {}, styles = [] } = opts ?? {};
  return createTheme({
    settings: { ...defaultSettingsVercelLight, ...settings },
    styles: [...vercelLightStyle, ...styles],
    theme,
  });
};

export const vercelDarkInit = (opts?: Partial<CreateThemeOptions>) => {
  const { theme = 'dark', settings = {}, styles = [] } = opts ?? {};
  return createTheme({
    settings: { ...defaultSettingsVercelDark, ...settings },
    styles: [...vercelDarkStyle, ...styles],
    theme,
  });
};

export const vercelLight = vercelLightInit();
export const vercelDark = vercelDarkInit();
