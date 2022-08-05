import About from '../components/index/About'
import supabase from '../utils/supabase';
import TeamMates from '../components/Team/TeamMates';
import Laws from '../components/Team/Laws';
import Image from 'next/future/image';



export async function getStaticProps() {
 const {data:data} = await supabase.from('2021_Camp').select('*').order('id')
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
  
  var teamPics:any;
  data.forEach((image) => {
   if(image?.tags?.includes('Csapatunk nyáritáborában'))
    teamPics = image?.imageScr
  });

  
  return (
    <>
    <div className='relative w-full sm:h-72 md:h-[25rem] lg:h-[30rem]'>
        <div className='absolute block w-5/6 h-full left-0 right-0 mx-auto '>
          <Image 
          src={teamPics}
          sizes='100vw' fill priority
          />
        </div>
      </div>
      <About data={data}/>
      <Laws/>
      <TeamMates/>
    </>
  );
}
export default Home
