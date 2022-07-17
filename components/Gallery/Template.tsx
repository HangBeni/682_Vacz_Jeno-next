import { useState } from "react";
import Image from "next/future/image";
import BackTo from "./BackTo";


type Image = {  
    id: number
    imageScr: string
    tags: string
  }

function Template({images}: {images: Image[]}) {
    const [tempimg, setimg] = useState('');
    const [modal, setModal] = useState(false);
  
      return ( 
  <>
      <div 
              className={modal ? 
              ("flex w-full h-full fixed top-0 left-0 items-center justify-center bg-black z-50 ")
              :
              ("hidden")}>
               
                  <img id="zoom" src={tempimg} className="block w-auto max-w-full h-auto max-h-full box-border p-3 mx-auto" />
               
                  <span className="fixed top-5 right-5 w-8 h-8 p-1 text-white cursor-pointer text-4xl"
                  onClick={() =>( setModal(false), setimg(''))}>&times;</span>
          </div>
  
  
         
  
          <div className="">
                
          <BackTo></BackTo>

          <div  className="mt-4 grid grid-cols-[repeat(auto-fit,_minmax(380px,1fr))] place-items-center gap-1">
              {images?.map((image:any) => {
              if(image.imageScr.includes('long'))
              return (          
                  
                  <Image
                  width={400}
                  height={200}
                  quality={80}
                  src={image.imageScr}
                  key={image.id}
                  title={image.tags}
                  alt={image.tags}
                  loading={'eager'}
                  className="relative block h-full max-h-full max-w-full cursor-pointer rounded-md transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-md hover:shadow-black"
                  onClick={() => (setimg(image.imageScr), setModal(true))}
                  />
                  
                  )
              })}
          </div>
  
          <div className="mt-4 mr-9 grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-4">
              {images?.map((image) => {
              if(!image.imageScr.includes('long'))
              return (
              
                  <Image
                 
                  width={450}
                  height={300}
                  quality={80}
                  src={image.imageScr}
                  key={image.id}
                  title={image.tags}
                  alt={image.tags}
                  loading={'lazy'}
                  className="block max-h-full max-w-full cursor-pointer rounded-md transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-md hover:shadow-black"
                  onClick={() => (setimg(image.imageScr), setModal(true))}
                  />
              
                  )
              })}
          </div>
          </div>
        </>
  
       );
}

export default Template;