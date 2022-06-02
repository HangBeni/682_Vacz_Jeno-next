import Image from 'next/image'
import { useState } from 'react'


  type Image = {  
    id: number
    imageScr: string
    tags: string
  }
 
export default function Camp({ camp }: { camp: Image[] }) {
  const [open, setOpen] = useState(false);
  const [tempimg, setimg] = useState('');
  const [modal, setModal] = useState(false);

 function ShowCamp(){
   const camp = document.getElementById('camp');
   const btn = document.getElementById('bt-camp');
   if(!open){
      camp?.classList.remove('hidden');
      setOpen(true);
      btn?.classList.add('h-5');
      btn?.classList.add('bg-red-600');
      btn!.innerHTML="";
    }
    else{
      camp?.classList.add('hidden');
      btn?.classList.remove('h-5');
      btn?.classList.remove('bg-red-600');
      btn!.innerHTML="Táborunk";
      setOpen(false);
    }
}



  return (
    <>
    
    <div>
   <button id='bt-camp' onClick={ShowCamp} 
   className="block mx-auto mt-3 h-16 w-1/2 text-lg bg-none 
   border-none rounded-lg shadow-lg shadow-red-600 ">
     Táborunk
   </button>   
    </div>
    
    <div id='camp' className="m-4 hidden">
    <a className='hidden md:block sticky top-28 float-right 
    font-extrabold p-2 ml-1 text-xl rounded-full bg-slate-800 text-red-600 hover:bg-red-700 hover:text-black
    cursor-pointer'
    href='#bt-camp'>
    🡡
    </a>
     
   
    <div 
        className={modal ? 
        ("flex w-full h-full fixed top-0 left-0 items-center justify-center bg-black z-50")
        :
        ("hidden overflow-hidden")}>
            <img src={tempimg} className="block w-auto max-w-full h-auto max-h-full box-border p-3 mx-auto my-0" />
            <span className="fixed top-5 right-5 w-8 h-8 p-1 text-white cursor-pointer text-4xl"
             onClick={() =>( setModal(false), setimg(''))}>&times;</span>
    </div>

      <div  className="mt-4 grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-4">
        {camp?.map((image) => {
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
               onClick={() => (setimg(image.imageScr), setModal(true))}
               />
            
            )
        })}
      </div>

      <div className="mt-4 mr-9 grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-4">
        {camp?.map((image) => {
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
              onClick={() => (setimg(image.imageScr), setModal(true))}
             />
          
            )
        })}
      </div>
      
    </div>
   
    </>
  )
}





