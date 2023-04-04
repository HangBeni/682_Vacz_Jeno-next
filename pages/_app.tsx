import { AppProps } from 'next/app'
import Contacts from '../components/index/Contacts'
import Navbar from './../components/index/Navbar'
import '../styles/globals.css'
import Donation from '../components/index/Donation'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'


function MyApp({ Component, pageProps }: AppProps) {
  
 
  return ( 
  <body className="flex flex-col min-h-screen">
    <Head>
          <title>682 Vácz Jenő</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="color-scheme" content="dark light"></meta>
    </Head>
    <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Navbar/>
    <Component {...pageProps} />
    <Contacts/>
    </AnimatePresence>
  
  </body>)
}

export default MyApp
