import * as React from 'react';
import {
  ThemeProvider,
  sportsbetDark,
  sportsbetLight,
  bitcasinoLight,
  bitcasinoPurple,
  Theme,
} from '@heathmont/sportsbet-themes';

const themes: DocsThemes = {
  sportsbet: {
    dark: sportsbetDark,
    light: sportsbetLight,
  },
  bitcasino: {
    dark: bitcasinoPurple,
    light: bitcasinoLight,
  },
};

type DocsColorModes = {
  dark: Theme;
  light: Theme;
};

type DocsThemes = {
  sportsbet: DocsColorModes;
  bitcasino: DocsColorModes;
};

type DocsBrands = keyof DocsThemes;

export const DocsThemeContext = React.createContext({
  setBrand: (themeKey: DocsBrands) => {
    themeKey;
  },
  themeKeys: [''],
  toggleColorScheme: () => {},
});

export const useDocsTheme = () => React.useContext(DocsThemeContext);

export const DocsThemeProvider: React.FC<{ children: React.ReactChild }> = ({
  children,
}) => {
  const [themeState, setThemeState] = React.useState({
    brand: 'sportsbet',
    colorMode: 'dark',
  });

  const consoleInfoTheme = () =>
    process.env.NODE_ENV !== 'production' &&
    /* eslint-disable-next-line no-console */
    console.info(
      '🎨 Theme: ',
      themeState,
      themes[themeState.brand][themeState.colorMode]
    );

  /**
   * Toggle between themes 'dark' and 'light' states
   */
  const toggleColorScheme = () => {
    consoleInfoTheme();

    setThemeState({
      brand: themeState.brand,
      colorMode: themeState.colorMode === 'dark' ? 'light' : 'dark',
    });
  };

  const setBrand = (themeKey: DocsBrands) => {
    consoleInfoTheme();
    setThemeState({ brand: themeKey, colorMode: themeState.colorMode });
  };

  const themeKeys = Object.keys(themes);

  return (
    <DocsThemeContext.Provider
      value={{ setBrand, themeKeys, toggleColorScheme }}
    >
      <ThemeProvider
        theme={themes[themeState.brand][themeState.colorMode]}
        hasTransition
      >
        {children}
      </ThemeProvider>
    </DocsThemeContext.Provider>
  );
};