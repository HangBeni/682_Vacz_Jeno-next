import Image from 'next/image'
import Menu from '../../components/Gallery/Menu';
import Template from '../../components/Gallery/Template';
import supabase from '../../utils/supabase';



 type Image = {  
    id: number
    imageScr: string
    tags: string
  }

  


  export default function Event({images}: {images: Image[]}) {

  
    return ( 
      <>
      <Menu></Menu>
      <Template images={images}/>
      </>
     );
}


export async function getServerSideProps(context:any) {
    const {params} = context
    const {event} =params
    
const {data:images} = await supabase.from(event).select('*').order('id')

return {
  props: {
    images
  },
}
}