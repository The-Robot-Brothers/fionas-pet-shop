import { createContext, ReactNode } from 'react'
import { DefaultTheme } from 'styled-components';
import usePersistedState from '../pages/utils/usePersistedState';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface ToggleThemes {
  toggleTheme: () => void;
  theme: DefaultTheme;
}

interface ToggleProviderProps {
  children: ReactNode;
}
export const ToggleContext = createContext<ToggleThemes>({} as ToggleThemes);

export function ToggleProvider({ children }: ToggleProviderProps) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  }

  return (
    <ToggleContext.Provider value={{
      toggleTheme,
      theme
    }}
    >
      {children}
    </ToggleContext.Provider>

  )
}
