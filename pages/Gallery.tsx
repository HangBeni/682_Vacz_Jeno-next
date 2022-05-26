import Camp from "../components/Gallery/Camp"
import  Farsang  from "../components/Gallery/Farsang"
import supabase from "../utils/supabase"
import Navbar from "../components/index/Navbar"
import Footer from '../components/index/Contacts'
export async function getStaticProps() {

  const {data: camp} = await supabase.from('Camp').select('*').order('id')
  const {data: farsang} = await supabase.from('Farsang').select('*').order('id')

  return {
    props: {
      camp,
      farsang
    },
  }
}

type Image = {  
    id: number
    imageScr: string
    tags: string
  }


 function Gallery({ camp, farsang }: { camp: Image[], farsang:Image[] }) {
  
  return(
 <>
 <Navbar></Navbar>
 <Camp camp={camp}/>
 <Farsang farsang={farsang}/>
 <Footer></Footer>
 </> 
 );
}




export default Gallery