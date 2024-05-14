import Courses from "../../components/Curriculum/Courses";
import supabase from "../../utils/supabase";

export type Field = {
  id : string,
  imageSrc : string,
  Description: string,
  Link : string,
  Aktív: boolean
}


function Home({knowledge}: {knowledge: Field[]}) {
  return ( 
    <div >
            <Courses knowledge={knowledge}></Courses>
        </div>
     );
    }
    
    
    export async function getServerSideProps() {
  "use server";
       const {data:knowledge} = await supabase.from('Curriculum').select('*')
    
    return {
      props: {
        knowledge
      },
    }
    }

export default Home;