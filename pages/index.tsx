import Head from 'next/head';
import Navbar from '../components/index/Navbar'
import About from '../components/index/About'
import Contacts from '../components/index/Contacts'
import supabase from '../utils/supabase';
import News from '../components/index/ActualNews';


export async function getStaticProps() {
 const {data:data} = await supabase.from('Camp').select('*').order('id')

  return{
      props:{
          data,
      }
  }
}

type Image = {  
  id: number
  imageScr: string
  tags: string
}


function Home({data}:{data:Image[]}) {
  return (
    <div>
      <Head>
        <title>682 Vácz Jenő</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
    <Navbar/>
    <About data={data}/>
    <News></News>
    <Contacts/>
    </div>
  );
}
export default Home
