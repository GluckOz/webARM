import { ThemeProvider } from '@/providers/themeprovider'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru" suppressHydrationWarning>
      <Head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          <Main />
          <NextScript />
        </ThemeProvider>
      </body>
    </Html>
  )
}