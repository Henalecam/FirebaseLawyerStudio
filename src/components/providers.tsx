'use client';

import * as React from 'react';
import {ThemeProvider as NextThemesProvider} from 'next-themes';

interface ThemeProviderProps extends React.PropsWithChildren {
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
  storageKey?: string;
}

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps): JSX.Element {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
