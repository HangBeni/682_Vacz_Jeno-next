import { useState } from 'react'
import Image from 'next/image'
import { image } from '../../utils/Types'


function Template({ images }: { images: image[] }) {
  
  const [actuall, setActuall] = useState(-47)
  const [modal, setModal] = useState(false)
  

  const Card = (image:image, index:number) => {
    if(image.imageSrc.includes("long"))
                    return(          
                    
                      <Image
                        sizes="(max-width: 640px) 100vw,
                        (max-width: 1280px) 50vw,
                        (max-width: 1536px) 33vw,
                        25vw"
                      width={340}
                      height={400}
                      quality={80}
                      loading={index < 4 ? "eager" : "lazy"}
                      src={image.imageSrc}
                      key= {index}
                      title={image.tags}
                      alt={image.tags}
                      className='border-border_color_primary border aspect-[3/4] relative selective row-span-2 h-full w-full
                      rounded-md transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-md hover:shadow-black'
                      onClick={() => {
                        setActuall(index)
                        setModal(true)
                      }}/>
                      );
                    else
                      return(
                        
                          <Image
                            sizes="(max-width: 640px) 100vw,
                            (max-width: 1280px) 50vw,
                            (max-width: 1536px) 33vw,
                            25vw"
                            width={340}
                            height={190}
                          quality={80}
                          loading={index < 4 ? "eager" : "lazy"}
                          src={image.imageSrc}
                          key={index}
                          title={image.tags}
                          alt={image.tags}
                          className='border-border_color_secondary border w-full h-min row-span-[1/2] selective
                          rounded-md transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-md hover:shadow-black'
                          onClick={() => {
                            setActuall(index)
                            setModal(true)
                            }}
                            />);
  }

  const Zoom = () => {
    return(
      <div
        className={
          modal
            ? 'fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black '
            : 'hidden'}>
      
       <button className='fixed text-white opacity-70 hover:opacity-100 transition duration-200 w-max text-5xl font-extrabold mx-auto cursor-pointer z-10 left-4 p-2'
       onClick={() => (actuall!==0 ? setActuall(actuall-1) : setActuall(images.length-1))}
        >&#60;</button>
       
      <div className="relative mx-auto box-border block h-full w-full p-3">
        
          {actuall !== -47 && images[actuall].imageSrc.includes('long') ?
              <Image
                className='block h-full mb-2 w-auto object-contain'
                sizes='100vw' fill
                loading='eager'
                id="zoom"
                src={images[actuall].imageSrc}
                alt='Aktuálisan kiemelt kép'
                priority
              /> :

              <Image
                className='block h-full mb-2 w-auto object-contain'
                sizes='100vw' fill
                loading='eager'
                id="zoom"
                src={images[actuall].imageSrc}
                alt='Aktuálisan kiemelt kép'
                priority
              />
          }
          
       </div>
       
      <button
          className="fixed top-5 right-5 h-8 w-8 cursor-pointer p-1 text-5xl text-white"
          onClick={() => (setModal(false), setActuall(Number))}
        >
          &times;
      </button>

        {<button className='fixed text-white opacity-70 hover:opacity-100 transition duration-200 w-max text-5xl font-extrabold mx-auto cursor-pointer z-10 right-4 p-2'
        onClick={() => actuall!==images.length-1 ? setActuall(actuall+1) : setActuall(0)}
        >&#62;</button>}
      
      </div>
    )
  }

  

  return (
    <div
    className='bg-bg dark:bg-bg_dark text-font'>
      
      {actuall !== -47 ? <Zoom/> : null}
      <div className='mx-1'>

      <div 
        className="pt-4 grid relative grid-cols-[repeat(auto-fit,_minmax(300px,2fr))] place-items-center gap-3"
        >
              {images?.map((image:image, i:number) => {
                return(
                  <>
                  {Card(image, i)}
                  </>
              );
              })
            }
          </div>

        </div>
    </div>
  )

  

}

export default Template


