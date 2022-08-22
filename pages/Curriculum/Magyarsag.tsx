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
export type Poem = {
  id: number,
  Name: string,
  Topics: string,
  Link: string,
  Reszlet: string
}

function Magyarsag({poems, greats}: {poems: Poem[], greats: Greats[]}) {
    return ( 
        <div>
            <Flag></Flag>
            <GreatMagyars greats={greats}></GreatMagyars>
            <Poems poems={poems}></Poems>
        </div>
     );
}

export async function getServerSideProps() {
    const {data:greats} = await supabase.from('Greats').select('*').order('id')
    const {data:poems} = await supabase.from('Poems').select('*').order('id')
    console.log(poems)
    return {
      props: {
        poems,
        greats
      },
    }
    }

export default Magyarsag;