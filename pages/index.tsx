import Head from 'next/head';
import Navbar from '../components/index/Navbar'
import About from '../components/index/About'
import Contacts from '../components/index/Contacts'
import supabase from '../utils/supabase';
import TeamMates from '../components/Team/TeamMates';
import Laws from '../components/Team/Laws';



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
      <About data={data}/>
      <Laws/>
      <TeamMates/>
    </div>
  );
}
export default Home
