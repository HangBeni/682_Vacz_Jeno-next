import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from 'next-themes'
import { Html, Head, Main, NextScript } from 'next/document'
import Contacts from '../components/index/Contacts'
 
export default function Document() {
  return (
    <Html lang='hu'>
        <Head/>

            <AnimatePresence
                        mode='sync'
                        onExitComplete={() => window.scrollTo(0, 0)}
            >
                <ThemeProvider attribute='class'>
                <body>
                    <Main />
                    <NextScript />
                    <Contacts/>
                </body>
                </ThemeProvider>
            </AnimatePresence>
    </Html>
  )
}