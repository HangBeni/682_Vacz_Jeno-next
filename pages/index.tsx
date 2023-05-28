import About from '../components/index/About'
import supabase from '../utils/supabase';
import TeamMates from '../components/Team/TeamMates';
import Laws from '../components/Team/Laws';
import Image from 'next/image';
import {image} from '../utils/Types'


function Home({data}:{data:image[]}) {
  
  const teamPics:image[] = data!.filter((image) => image.tags === 'Csapatunk nyáritáborában');  

  
  return (
    <div className='text-font bg-bg dark:bg-bg_dark'>
    <div className='relative w-full h-44 mt-2 md:h-[20rem] lg:h-screen lg:mt-0'>
        <div className='block h-max mx-auto'>
        <Image 
          src={teamPics[0]!.imageSrc}
          sizes={'100dvw'} fill
          priority quality={100}
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
