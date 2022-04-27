import Image from 'next/image'
import { useState } from 'react'


  type Image = {  
    id: number
    imageScr: string
    tags: string
  }
 
export default function Camp({ camp }: { camp: Image[] }) {
  const [open, setOpen] = useState(false);

  
 function ShowCamp(){
    const camp = document.getElementById('camp');
    if(!open){
      camp?.classList.remove('hidden');
    setOpen(true);
    }
    else{
      camp?.classList.add('hidden');
      setOpen(false);
    }
}

  return (
    <>
    <div>
   <button onClick={ShowCamp} className="block mx-auto h-20 w-1/2 text-lg bg-none border-none rounded-lg shadow-lg shadow-red-600">Táborunk
   </button>   
    </div>

    <div id='camp' className="m-4 hidden">
      <div  className="mt-4 grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-4">
        {camp?.map((image) => {
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
               title={image.tags}
               alt={image.tags}
               className="relative block max-h-full max-w-full cursor-pointer rounded-md transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-md hover:shadow-black"
               />
            </a> 
            )
        })}
      </div>

      <div className="mt-4 grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-4">
        {camp?.map((image) => {
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
              title={image.tags}
               alt={image.tags}
              className=" block max-h-full max-w-full cursor-pointer rounded-md transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-md hover:shadow-black"
              />
          </a>
            )
        })}
      </div>
    </div>
    </>
  )
}





