import Dalok from "../../components/Curriculum/Nepdalok/Dalok";
import supabase from "../../utils/supabase";
import { Dal } from "../../utils/Types";



function Nepdal({dalok}: {dalok: Dal[]}) {
  return ( 
    <div>
            <h1 className="text-3xl text-font text-center m-2">Népdalaink</h1>
            
                <Dalok dalok={dalok}/>
            
        </div>

);
}

export async function getServerSideProps() {
  "use server";
    const {data:dalok} = await supabase.from('Nepdalok').select('*').order('id')
    return {
      props: {
        dalok
      },
    }
    }

export default Nepdal;