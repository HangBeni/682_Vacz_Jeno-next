import { GetServerSideProps } from 'next';
import Image from 'next/image'
import Menu from '../../components/Gallery/Menu';
import Template from '../../components/Gallery/Template';
import Contacts from '../../components/index/Contacts';
import Navbar from '../../components/index/Navbar';
import supabase from '../../utils/supabase';



type Image = {  
    id: number
    imageScr: string
    tags: string
  }

  


  export default function Event({images}: {images: Image[]}) {

  
    return ( 
      <>
      <Navbar></Navbar>
      <Menu></Menu>
      <Template images={images}/>
      <Contacts></Contacts>
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