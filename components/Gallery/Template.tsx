import { Suspense, useState } from 'react'
import Image from 'next/image'
import { image } from '../../utils/Types'
import Loading from './Loading'


function Template({ images }: { images: image[] }) {
  
  const [tempimg, setimg] = useState("")
  const [actuall, setActuall] = useState(0)
  const [modal, setModal] = useState(false)
 


   let imageDictionary = new Map<number, string>;
   images.map(img => {
    imageDictionary.set(img.timeLine,img.imageSrc)
   })

  const back = () => {
    setimg('')
    setimg(imageDictionary.get(images.find((img) => img.timeLine == actuall - 1)?.timeLine || 0) || "")
    if(actuall != 1)
      setActuall(actuall - 1)
    else
    setActuall(images.length)
  }

  const forward = () => {
    setimg('')
    setimg(imageDictionary.get(images.find((img) => img.timeLine == actuall + 1)?.timeLine || 0) || "")
    if(actuall != images.length - 1)
      setActuall(actuall + 1)
    else
      setActuall(0)
  }

  return (
    <div
    className='bg-bg dark:bg-bg_dark text-font'>
      <div
        className={
          modal
            ? 'fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black '
            : 'hidden'}>
       
       <span className='fixed text-white w-max text-5xl font-extrabold mx-auto cursor-pointer z-10 left-4 p-2'
       onClick={back}
       >&#60;</span>

      {tempimg && 
      <div className="mx-auto box-border block h-max w-max p-3">
        <Suspense fallback={<Loading/>}>
          {tempimg.includes('long') ?
       <Image
       className='block h-full mb-2 w-auto object-contain' 
       sizes='100vw' fill
        id="zoom"
        src={tempimg}
        alt='Aktuálisan kiemelt kép'
       /> :
       <Image
       className='block h-full mb-2 w-auto object-contain' 
       sizes='100vw' fill
        id="zoom"
        src={tempimg}
        alt='Aktuálisan kiemelt kép'
       />}
       </Suspense>
       </div>}

       
        <span
          className="fixed top-5 right-5 h-8 w-8 cursor-pointer p-1 text-5xl text-white"
          onClick={() => (setimg(''), setModal(false), setActuall(0))}
        >
          &times;
        </span>
        <span className='fixed text-white w-max text-5xl font-extrabold mx-auto cursor-pointer z-10 right-4 p-2'
        onClick={forward}
        >&#62;</span>
        
      </div>

      <div className='mx-1 '>

      <section 
        className="pt-4 grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] place-items-center gap-3 ">
              {images?.map((image:image) => {
                if(image.imageSrc.includes('long'))
                return (          
                    <Image
                    width={300}
                    height={240}
                    quality={80}
                    loading='lazy'
                    src={image.imageSrc}
                    key={image.id}
                    title={image.tags}
                    alt={image.tags}
                    className='border-border_color_primary border
                    block h-full row-span-2 max-h-[95%] max-w-full cursor-pointer rounded-md transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-md hover:shadow-black'
                    onClick={() => {
                      setModal(true)
                      setimg(imageDictionary.get(image.timeLine) || "")
                      setActuall(image.timeLine)
                    }}/>
                  )
                  else
                    return (
                        <Image
                        width={300}
                        height={280}
                        quality={80}
                        loading='lazy'
                        src={image.imageSrc}
                        key={image.id}
                        title={image.tags}
                        alt={image.tags}
                        className=' border-border_color_secondary border
                        block max-h-full max-w-full cursor-pointer rounded-md transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-md hover:shadow-black'
                        onClick={() => {
                          setimg(imageDictionary.get(image.timeLine) || "")
                          setActuall(image.timeLine)
                          setModal(true)}}
                          />
                        )
                        
              })
            }
          </section>

        </div>
    </div>
  )
}

export default Template
