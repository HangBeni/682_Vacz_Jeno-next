import { useState } from 'react'
import Image from 'next/image'
import { image } from '../../utils/Types'



function Template({ images }: { images: image[] }) {
  const [tempimg, setimg] = useState("")
  const [modal, setModal] = useState(false)


  const back = () => {
    var switched = false;
    images.map((img) => {
      if (images.findIndex(img => img.imageSrc == tempimg) == img.id){ 
        setimg(img.imageSrc)        
        switched = true;
      }
    })
    if(!switched)
    {
      images.map((img) => {
        if (images.length == img.id)
          setimg(img.imageSrc)         
      })
    }
  }

  const forward = () => {
    var switched = false;
    images.map((img) => {
      if (images.findIndex(img => img.imageSrc == tempimg)+2 == img.id){
        setimg(img.imageSrc)
        switched = true;
      }
    })
    if(!switched)
    {
      images.map((img) => {
        if (1 == img.id)
          setimg(img.imageSrc)         
      })
    }
  }

  return (
    <div className='bg-bg text-font'>
      <div
        className={
          modal
            ? 'fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black '
            : 'hidden'}>
       
       <span className='fixed text-white text-6xl font-extrabold p-2 cursor-pointer z-10 left-4'
       onClick={back}
       >&#8249;</span>
        
          <img
            id="zoom"
            src={tempimg}
            className="mx-auto box-border block h-auto max-h-full w-auto p-3"
          />
        
        <span
          className="fixed top-5 right-5 h-8 w-8 cursor-pointer p-1 text-5xl text-white"
          onClick={() => (setModal(false), setimg(''))}
        >
          &times;
        </span>
        <span className='fixed text-white text-6xl font-extrabold p-2 cursor-pointer z-10 right-4'
        onClick={forward}
        >&#8250;</span>
        
      </div>

      <div className='mx-1 '>

        <div  className="pt-4 grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] place-items-center gap-3 ">
              {images?.map((image:any) => {
              if(image.imageSrc.includes('long'))
              return (          
                  
                  <Image
                  width={300}
                  height={240}
                  quality={80}
                  src={image.imageSrc}
                  key={image.id}
                  title={image.tags}
                  alt={image.tags}
                  className='border-border_color_primary border
                  block h-full row-span-2 max-h-[95%] max-w-full cursor-pointer rounded-md transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-md hover:shadow-black'
                  onClick={() => (setimg(image.imageSrc), setModal(true))}
                  />
                  )
                  else
                  return (
                      <Image
                     
                      width={300}
                      height={280}
                      quality={80}
                      src={image.imageSrc}
                      key={image.id}
                      title={image.tags}
                      alt={image.tags}
                      className=' border-border_color_secondary border
                      block max-h-full max-w-full cursor-pointer rounded-md transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-md hover:shadow-black'
                      onClick={() => (setimg(image.imageSrc), setModal(true))}
                      />
                  
                      )
              })
              }
          </div>
        </div>
    </div>
  )
}

export default Template
