import About from '../components/index/About'
import supabase from '../utils/supabase';
import TeamMates from '../components/Team/TeamMates';
import Laws from '../components/Team/Laws';
import Image from 'next/image';
import {image} from '../utils/Types'


function Home({data}:{data:image[]}) {
  
  const teamPics:image[] = data!.filter((image) => image.tags === 'Csapatunk nyáritáborában');  

  
  return (
    <div className='text-font bg-bg'>
    <div className='  relative w-full sm:h-72 md:h-[25rem] lg:h-[30rem] h-full'>
        <div className='absolute block w-5/6 h-full left-0 right-0 mx-auto '>
        <Image 
          src={teamPics[0]!.imageSrc}
          sizes={'100dvw'} fill
          priority
          className='object-contain'
          title={teamPics[0]?.tags}
          alt={'Képek a csapatunkról'}
          />
        </div>
      </div>
      <About data={teamPics.slice(1,teamPics.length)}/>
      <Laws/>
      <TeamMates/>
    </div>
  )
}

export async function getStaticProps() {

  const {data} = await supabase!.from('2021_Camp').select('*').order('id');
 
   return{
       props:{
           data,
       }
   }
 }

export default Home
