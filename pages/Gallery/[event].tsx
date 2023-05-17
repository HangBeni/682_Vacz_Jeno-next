import { GetServerSideProps } from 'next';
import { useRouter } from 'next/dist/client/router';
import Menu from '../../components/Gallery/Menu';
import Template from '../../components/Gallery/Template';
import supabase from '../../utils/supabase';
import { image } from '../../utils/Types';

  export default function Event({images}: {images:image[]}) {
    return(
      <>
    <Menu></Menu>
    <Template images={images}/> 
    </>
     )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }:any) => {
  const router = useRouter();
  const {pid} = router.query
  const {data:images} = await supabase.from(pid!.toString()).select('*').order('timeLine')

  return {
    props: {
      images,
    },
  }
}

/*
export async function getServerSideProps(context:any) {
    const {params} = context
    const {event} =params
  const {data:images} = await supabase.from(event).select('*').order('timeLine')
  return {
    props: {
      images,
    },
    
  }

}*/