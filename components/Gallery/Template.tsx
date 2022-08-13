import { useState } from 'react'
import Image from 'next/future/image'

type Image = {
  id: number
  imageScr: string
  tags: string
}

function Template({ images }: { images: Image[] }) {
  const [tempimg, setimg] = useState("")
  const [modal, setModal] = useState(false)


  const back = () => {
    images.map((img) => {
      if (images.findIndex(img => img.imageScr == tempimg) == img.id) 
        setimg(img.imageScr)
    })
  }

  const forward = () => {
    images.map((img) => {
      if (images.findIndex(img => img.imageScr == tempimg)+2 == img.id) 
        setimg(img.imageScr)
    })
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

      <div className='mx-2 '>

        <div  className="pt-4 grid grid-cols-[repeat(auto-fit,_minmax(380px,1fr))] place-items-center gap-3 ">
              {images?.map((image:any) => {
              if(image.imageScr.includes('long'))
              return (          
                  
                  <Image
                  width={450}
                  height={200}
                  quality={80}
                  src={image.imageScr}
                  key={image.id}
                  title={image.tags}
                  alt={image.tags}
                  className=' border-border_color_primary border
                  relative block h-full row-span-2 max-h-full max-w-full cursor-pointer rounded-md transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-md hover:shadow-black'
                  onClick={() => (setimg(image.imageScr), setModal(true))}
                  />
                  )
                  else
                  return (
                      <Image
                     
                      width={450}
                      height={300}
                      quality={80}
                      src={image.imageScr}
                      key={image.id}
                      title={image.tags}
                      alt={image.tags}
                      className=' border-border_color_secondary border
                      block max-h-full max-w-full cursor-pointer rounded-md transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-md hover:shadow-black'
                      onClick={() => (setimg(image.imageScr), setModal(true))}
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
