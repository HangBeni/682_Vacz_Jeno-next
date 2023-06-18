import { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '../components/index/Navbar'
import '../styles/globals.css'


function MyApp({ Component, pageProps }: AppProps) {
  
  return (
  <>
  <Head>
    <title key={'682 Vácz Jenő'}>682 Vácz Jenő</title>
    <meta key={'viewport'} name="viewport" content="width=device-width, initial-scale=1.0"/>
  </Head>
  <Navbar/>
  <Component {...pageProps}/>
  </>)

}

export default MyApp
