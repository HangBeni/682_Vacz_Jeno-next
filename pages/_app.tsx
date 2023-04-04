import { AppProps } from 'next/app'
import Contacts from '../components/index/Contacts'
import Navbar from './../components/index/Navbar'
import '../styles/globals.css'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  
 
  return ( 
  <html lang='hu' suppressHydrationWarning>
    <Head>
            <title key={'682 Vácz Jenő'}>682 Vácz Jenő</title>
            <meta key={'viewport'} name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>

      <ThemeProvider attribute="class">
    <body className="flex flex-col min-h-screen bg-bg text-font dark:bg-bg_dark dark:text-font_dark">
      <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Navbar/>
      <Component {...pageProps} />
      <Contacts/>
      </AnimatePresence>
    </body>
 </ThemeProvider>
  </html>)
}

export default MyApp
