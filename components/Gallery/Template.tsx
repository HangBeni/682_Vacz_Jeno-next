import { useState } from 'react'
import Image from 'next/image'
import { image } from '../../utils/Types'


function Template({ images }: { images: image[] }) {
  
  const [tempimg, setimg] = useState("")
  const [actuall, setActuall] = useState(Number)
  const [modal, setModal] = useState(false)
  

  const Card = (image:image, index:number) => {
    if(image.imageSrc.includes("long"))
                    return(          
                      <Image
                      width={340}
                      height={400}
                      quality={80}
                      loading='lazy'
                      src={image.imageSrc}
                      key= {index}
                      title={image.tags}
                      alt={image.tags}
                      className='border-border_color_primary border aspect-[3/4] selective
                      row-span-2 h-full cursor-pointer rounded-md transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-md hover:shadow-black'
                      onClick={() => {
                        setActuall(index)
                        setimg(image.imageSrc)
                        setModal(true)
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
                          className='border-border_color_secondary border row-span-[1/2] selective
                          cursor-pointer rounded-md transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-md hover:shadow-black'
                          onClick={() => {
                            setActuall(index)
                            setimg(image.imageSrc)
                            setModal(true)
                            }}
                            />)
  }


  const back = () => {
  if(actuall-1 >= 0 ){
   setActuall(actuall-1);
   setimg(images[actuall].imageSrc)}
  else{
    setActuall((images.length-1))
    setimg(images[actuall].imageSrc)}
  }

  const forward = () => {
  if(actuall+1 < images.length ){
   setActuall(actuall+1);
   setimg(images[actuall].imageSrc)}
  else{
   setActuall(0);
   setimg(images[actuall].imageSrc)}
  }

  return (
    <div
    className='bg-bg dark:bg-bg_dark text-font'>
      <div
        className={
          modal
            ? 'fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black '
            : 'hidden'}>
      
       <button className='fixed text-white w-max text-5xl font-extrabold mx-auto cursor-pointer z-10 left-4 p-2'
       onClick={back}
        >&#60;</button>
       
      <div className="relative mx-auto box-border block h-full w-full p-3">
          {tempimg && tempimg.includes('long') ?
              <Image
                className='block h-full mb-2 w-auto object-contain' 
                sizes='100vw' fill
                loading='eager'
                id="zoom"
                src={tempimg}
                alt='Aktuálisan kiemelt kép'
              /> :

              <Image
                className='block h-full mb-2 w-auto object-contain' 
                sizes='100vw' fill
                loading='eager'
                id="zoom"
                src={tempimg}
                alt='Aktuálisan kiemelt kép'
              />
          }
       </div>
       
      <button
          className="fixed top-5 right-5 h-8 w-8 cursor-pointer p-1 text-5xl text-white"
          onClick={() => (setimg(''), setModal(false), setActuall(Number))}
        >
          &times;
      </button>

        <button className='fixed text-white w-max text-5xl font-extrabold mx-auto cursor-pointer z-10 right-4 p-2'
        onClick={forward}
        >&#62;</button>
      
      </div>

      <div className='mx-1'>

      <section 
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
          </section>

        </div>
    </div>
  )

  

}

export default Template


