import Menu from "../../../components/Gallery/Menu";
import KntTemplate from "../../../components/Gallery/Template";
import supabase from "../../../utils/supabase";


type Image = {  
    id: number
    imageScr: string
    tags: string
  }

function Knt({images}: {images: Image[]}) {
    return ( 
        <>
    <Menu></Menu>
    <KntTemplate images={images}></KntTemplate>
        </>
     );
}



export async function getServerSideProps(context:any) {
    const {params} = context
    const {event} = params
    console.log(event);
const {data:images} = await supabase.from(event).select('*').order('id')

return {
  props: {
    images
  },
}
}


export default Knt;