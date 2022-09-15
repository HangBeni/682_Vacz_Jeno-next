import About from '../components/index/About'
import supabase from '../utils/supabase';
import TeamMates from '../components/Team/TeamMates';
import Laws from '../components/Team/Laws';
import Image from 'next/future/image';
import {image} from '../utils/Types'


export async function getStaticProps() {
 const {data:data} = await supabase.from('2021_Camp').select('*').order('id')
  return{
      props:{
          data,
      }
  }
}




function Home({data}:{data:image[]}) {
  
  var teamPics:image;
  var count = 0;
  data.forEach((image) => {
   if(image?.tags?.includes('Csapatunk nyáritáborában') && count == 0)
    {
      teamPics = image;
      count++;
    }
    });

  
  return (
    <div className='text-font bg-bg'>
    <div className='  relative w-full sm:h-72 md:h-[25rem] lg:h-[30rem] h-full'>
        <div className='absolute block w-5/6 h-full left-0 right-0 mx-auto '>
          <Image 
          src={teamPics!.imageScr}
          sizes='100vw' fill priority
          className='object-contain'
          title={teamPics!.tags}
          alt={teamPics!.tags}
          />
        </div>
      </div>
      <About data={data}/>
      <Laws/>
      <TeamMates/>
    </div>
  );
}
export default Home
