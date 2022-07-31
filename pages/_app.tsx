import { AppProps } from 'next/app'
import Contacts from '../components/index/Contacts'
import Navbar from './../components/index/Navbar'
import '../styles/globals.css'
import Donation from '../components/index/Donation'

function MyApp({ Component, pageProps }: AppProps) {
  return ( <>
  <Navbar/>
  <Component {...pageProps} />
  <Contacts/>
  <Donation/>
  </>)
}

export default MyApp
