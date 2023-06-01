import { Suspense, useEffect, useState } from 'react'
import Image from 'next/image'
import { image } from '../../utils/Types'
import Loading from './Loading'


function Template({ images }: { images: image[] }) {
  
  const [tempimg, setimg] = useState("")
  const [actuall, setActuall] = useState(0)
  const [modal, setModal] = useState(false)
  
  

  const Card = (image:image, index:number) => {
    if(image.imageSrc.includes("long"))
                    return(          
                      <Image
                      width={340}
                      height={380}
                      quality={80}
                      loading='lazy'
                      src={image.imageSrc}
                      key= {index}
                      title={image.tags}
                      alt={image.tags}
                      className='border-border_color_primary border aspect-[3/4]
                      row-span-2 h-auto max-w-full cursor-pointer rounded-md transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-md hover:shadow-black'
                      onClick={() => {
                        setModal(true)
                        setimg(image.imageSrc)
                        setActuall(index)
                      }}/>);
                    else
                      return(
                          <Image
                          width={340}
                          height={190}
                          quality={80}
                          loading='lazy'
                          src={image.imageSrc}
                          key={index}
                          title={image.tags}
                          alt={image.tags}
                          className='border-border_color_secondary border row-span-[1/2]
                          max-h-full  max-w-full cursor-pointer rounded-md transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-md hover:shadow-black'
                          onClick={() => {
                            setModal(true)
                            setimg(image.imageSrc)
                            setActuall(index)
                            }}
                            />)
  }

   
/*
  const back = () => {
    setimg('')
    setimg(imageDictionary.get(images.find((img) => img.timeLine === actuall - 1)?.timeLine || 0) || "")
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
*/
  return (
    <div
    className='bg-bg dark:bg-bg_dark text-font'>
      <div
        className={
          modal
            ? 'fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black '
            : 'hidden'}>
      
       {/*<span className='fixed text-white w-max text-5xl font-extrabold mx-auto cursor-pointer z-10 left-4 p-2'
       onClick={back}
        >&#60;</span>*/}

<Suspense fallback={<Loading/>}>
      {tempimg && 
      <div className="relativ mx-auto box-border block h-max w-max p-3">
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
       </div>}
       </Suspense>

       
      <span
          className="fixed top-5 right-5 h-8 w-8 cursor-pointer p-1 text-5xl text-white"
          onClick={() => (setimg(''), setModal(false), setActuall(0))}
        >
          &times;
        </span>
{/*
        <span className='fixed text-white w-max text-5xl font-extrabold mx-auto cursor-pointer z-10 right-4 p-2'
        onClick={forward}
        >&#62;</span>*/}
      </div>

      <div className='mx-1'>

      <section 
        className="pt-4 grid relative grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] place-items-center gap-3"
        >
              {images?.map((image:image, i:number) => {
                return(
                  <>
                  {Card(image, i)}
                  </>
              );
              })
            }
          </section>

        </div>
    </div>
  )

  

}

export default Template


