import About from '../components/index/About'
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
      <About data={data}/>
      <Laws/>
      <TeamMates/>
    </div>
  );
}
export default Home
