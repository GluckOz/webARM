import Script from 'next/script'
import './globals.scss'

import { Chakra_Petch } from 'next/font/google'
 
const font = Chakra_Petch({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: {
    template: '%s | WebARM',
    default: 'WebARM',
  },
  description: 'WebARM app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={font.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
