import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { createTheme } from '@mui/material/styles';

const STORAGE_KEY = 'color-mode';

export const ColorModeContext = createContext({ mode: 'light', toggleColorMode: () => {} });

export const useColorMode = () => useContext(ColorModeContext);

function getInitialMode() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch (e) {
    // Storage can be unavailable (private mode); fall back to the OS setting
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function useColorModeState() {
  const [mode, setMode] = useState(getInitialMode);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch (e) {
      // Not persisting is fine
    }
  }, [mode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: mode === 'dark' ? '#9fa8da' : '#3e497a' },
          background:
            mode === 'dark'
              ? { default: '#121212', paper: '#1e1e1e', section: '#181818' }
              : { default: '#ffffff', paper: '#ffffff', section: '#f5f5f5' },
        },
      }),
    [mode]
  );

  const toggleColorMode = () => setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return { mode, theme, toggleColorMode };
}
