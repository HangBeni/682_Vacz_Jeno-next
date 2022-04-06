import Camp from '../components/Gallery/Camp'
import { createClient } from '@supabase/supabase-js'

export async function getStaticProps() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  )
  const { data } = await supabaseAdmin.from('Camp').select('*').order('id')
  return {
    props: {
      camp: data
    },
  }
}

type Image = {  
  id: number
  imageScr: string
  tags: string
}


export default function Gallery({ camp }: { camp: Image[] }) {
 return(
   <>
   <Camp camp={camp}/>
   </>
 )
}




