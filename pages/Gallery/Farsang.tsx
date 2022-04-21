import Image from 'next/image';
import supabase from '../../utils/supabase';

export async function getStaticProps() {

  const {data: farsang} = await supabase.from('Farsang').select('*').order('id')

  return {
    props: {
      farsang
    },
  }
}

 type Image = {  
    id: number
    imageScr: string
    tags: string
  }

export default function Farsang({ farsang }: { farsang: Image[] }) {
  return (
    <div className="m-4">
      <div className="mt-4 grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-4">
        {farsang?.map((image) => {
         if(!image.tags.includes('Long'))
        return(
        <a href={image.imageScr}>
          <Image
            layout="fixed"
            width={400}
            height={300}
            quality={100}
            src={image.imageScr}
            key={image.id}
            className="relative block max-h-80 max-w-full cursor-pointer rounded-md transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-md hover:shadow-black"
          />
        </a>)
        })}
      </div>

      <div className="mt-4 grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-4">
        {farsang?.map((image) => {
          if(image.tags.includes('Long'))
          return <a href={image.imageScr}>
          <Image
           layout="fixed"
           width={240}
           height={400}
           quality={100}
           src={image.imageScr}
           key={image.id}
           className="relative block max-h-80 max-w-full cursor-pointer rounded-md transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-md hover:shadow-black"
           />
         </a>
        })}
      </div>
    </div>
  )
}

