import Flag from "../../components/Curriculum/Magyarsag/Flag";
import GreatMagyars from "../../components/Curriculum/Magyarsag/GreatMagyars";
import Poems from "../../components/Curriculum/Magyarsag/Poems";
import supabase from "../../utils/supabase";


export type Greats = {
    id: number,
    Name: string,
    Promo: string,
    Link: string,
    Image: string,
    Quote: string
}

function Magyarsag({greats}: {greats: Greats[]}) {
    return ( 
        <div>
            <Flag></Flag>
            <GreatMagyars greats={greats}></GreatMagyars>
            <Poems></Poems>
        </div>
     );
}

export async function getServerSideProps() {
    const {data:greats} = await supabase.from('Greats').select('*').order('id')
    
    return {
      props: {
        greats
      },
    }
    }

export default Magyarsag;