import '@/styles/globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import type { AppProps } from 'next/app'
import { AppLayout } from './app-layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  )
}
