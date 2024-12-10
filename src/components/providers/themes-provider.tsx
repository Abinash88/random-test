import { DEFAULT_SYSTEM_THEME, LOCAL_STORAGE_KEYS } from '@/config/constants';
import type { _LayoutProps } from '@/types/global';
import { ThemeProvider as NextThemesProvider } from "next-themes";


export default function ThemesProvider({ children }: _LayoutProps) {
  return (
    <NextThemesProvider
      attribute={"class"}
      defaultTheme={DEFAULT_SYSTEM_THEME}
      storageKey={LOCAL_STORAGE_KEYS?.THEME}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  )
}
