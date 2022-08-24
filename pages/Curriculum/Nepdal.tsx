import Dalok from "../../components/Curriculum/Nepdalok/Dalok";
import supabase from "../../utils/supabase";

export type Dal = {
    id: number,
    Name: string,
    Lyrics: string,
    Video: string
}

function Nepdal({dalok}: {dalok: Dal[]}) {
    return ( 
        <div>
            <h1 className="text-3xl text-font text-center m-2">Népdalaink</h1>
            
                <Dalok dalok={dalok}/>
            
        </div>

     );
}

export async function getServerSideProps() {
    const {data:dalok} = await supabase.from('Nepdalok').select('*').order('id')
    return {
      props: {
        dalok
      },
    }
    }

export default Nepdal;