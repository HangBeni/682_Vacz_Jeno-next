import { AppProps } from 'next/app'
import Contacts from '../components/index/Contacts'
import Navbar from './../components/index/Navbar'
import '../styles/globals.css'
import Donation from '../components/index/Donation'
import Head from 'next/head'


function MyApp({ Component, pageProps }: AppProps) {
  
 
  return ( 
  <>
    <Head>
          <title>682 Vácz Jenő</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="color-scheme" content="dark light"></meta>
    </Head>
    <Navbar/>
    <Component {...pageProps} />
    <Contacts/>
  
  </>)
}

export default MyApp
