import Image from 'next/image'
import { useState } from 'react'

type Image = {  
    id: number
    imageScr: string
    tags: string
  }
 
export default function Farsang({ farsang }: { farsang: Image[] }) {
   
  const [open, setOpen] = useState(false);
  const [tempimg_farsang, setImg_farsang] = useState('');
  const [modal_farsang, setModal_farsang] = useState(false);

  function Show(){
      const fars = document.getElementById('farsi');
      const btn = document.getElementById('bt-far');

      if(!open){
        fars?.classList.remove('hidden');
        setOpen(true);
        btn?.classList.add('h-5');
        btn?.classList.add('bg-red-600');
        btn!.innerHTML="";
      }
      else{
        fars?.classList.add('hidden');
        setOpen(false);
        btn?.classList.remove('h-5');
        btn?.classList.remove('bg-red-600');
        btn!.innerHTML="Farsang";
      }
 }
  
  
  return (
    <>
  <div className="mt-6 ">
  <button id='bt-far' onClick={Show} 
   className="block mx-auto mt-3 h-16 w-1/2 text-lg bg-none 
   border-none rounded-lg shadow-lg shadow-red-600 ">
     Farsang
   </button>
   </div>

   <div 
        className={modal_farsang ? 
        ("flex w-full h-full fixed top-0 left-0 items-center justify-center bg-black z-50")
        :
        ("hidden overflow-hidden")}>
            <img src={tempimg_farsang} className="block w-auto max-w-full h-auto max-h-full box-border p-3 mx-auto my-0" />
            <span className="fixed top-5 right-5 w-8 h-8 p-1 text-white cursor-pointer text-4xl"
             onClick={() =>( setModal_farsang(false), setImg_farsang(''))}>&times;</span>
    </div>

    <div id='farsi' className="m-4 hidden ">

  
      <div className="mt-4 mr-9 grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-4">
        {farsang?.map((image) => {
         if(image.imageScr.includes('long'))
         return (          
             
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
               onClick={() => (setImg_farsang(image.imageScr), setModal_farsang(true))}
               />
            
            )
        })}
      </div>

      <div className="mt-4 mr-9 grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-4">
        {farsang?.map((image) => {
          if(!image.imageScr.includes('long'))
          return (
           
            <Image
              layout="responsive"
              width={450}
              height={300}
              quality={100}
              src={image.imageScr}
              key={image.id}
              title={image.tags}
              alt={image.tags}
              className="block max-h-full max-w-full cursor-pointer rounded-md transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-md hover:shadow-black"
              onClick={() => (setImg_farsang(image.imageScr), setModal_farsang(true))}
              />
            )
          
          
        })}
      </div>
    </div>
    </>
  )
}
