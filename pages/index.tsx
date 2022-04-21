import Head from 'next/head';
import Navbar from '../components/index/Navbar'
import About from '../components/index/About'
import Contacts from '../components/index/Contacts'
import { NextPage } from 'next';





const Home : NextPage = () => {
  return (
    <div>
      <Head>
        <title>682 Vácz Jenő</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
    <Navbar/>
    <About/>
    <Contacts/>
    </div>
  );
}
export default Home
