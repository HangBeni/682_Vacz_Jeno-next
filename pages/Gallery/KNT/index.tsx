import Navbar from "../../../components/index/Navbar";
import Footer from "../../../components/index/Contacts"
import Menu from "../../../components/Gallery/Menu";
import Template from "../../../components/Gallery/Template";
import supabase from "../../../utils/supabase";


type Image = {  
    id: number
    imageScr: string
    tags: string
  }

function Knt({images}: {images: Image[]}) {
    return ( 
        <>
    <Navbar></Navbar>
    <Menu></Menu>
    <Template images={images}></Template>
    <Footer></Footer>
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