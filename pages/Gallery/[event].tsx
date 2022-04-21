import Image from 'next/image'
import supabase from '../../utils/supabase'
import { useRouter } from 'next/router'



export async function getStaticProps() {
  const router = useRouter();
  const {data} = await supabase.from(`${router.query.event}`).select('*').order('id')

  return {
    props: {
      data,
    },
  }
}

  type Image = {  
    id: number
    imageScr: string
    tags: string
  }
 
export default function Camp({ data }: { data: Image[] }) {
    return (
    <div className="m-4">
      <div className="mt-4 grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-4">
        {data.map((image) => {
         if(image.tags.includes('Long'))
         return (          
              <a href={image.imageScr} >
              <Image
               layout="responsive"
               width={150}
               height={250}
               quality={100}
               src={image.imageScr}
               key={image.id}
               className="relative block max-h-full max-w-full cursor-pointer rounded-md transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-md hover:shadow-black"
               />
            </a> 
            )
        })}
      </div>

      <div className="mt-4 grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-4">
        {data.map((image) => {
          if(!image.tags.includes('Long'))
          return (
            <a href={image.imageScr}  >
            <Image
              layout="responsive"
              width={450}
              height={300}
              quality={100}
              src={image.imageScr}
              key={image.id}
              className=" block max-h-full max-w-full cursor-pointer rounded-md transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-md hover:shadow-black"
              />
          </a>
            )
        })}
      </div>
    </div>
  )
}





