import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { image } from '../../utils/Types'
import { debounce } from 'lodash'
import supabase from '../../utils/supabase'
import { useRouter } from 'next/router'

function Template({ images }: { images: image[] }) {



  const [tempimg, setimg] = useState("")
  const [actuall, setActuall] = useState(0)
  const [modal, setModal] = useState(false)
  
  const COUNT = 30
  const router = useRouter()
  const containerRef = useRef(null)
  const [loadedTickets, setLoadedTickets] = useState(tickets)
  const [offset, setOffset] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [isInView, setIsInView] = useState(false)


    const handleScroll = () =>{
    if (containerRef.current && typeof window !== 'undefined') {
    const container = containerRef.current
    const { bottom } = container.getBoundingClientRect()
    const { innerHeight } = window
    setIsInView((prev) => bottom <= innerHeight)
  }
    }
 //Infinit

    useEffect(() => {
      const handleDebouncedScroll = debounce(() => handleScroll(), 200);

      window.addEventListener('scroll', handleDebouncedScroll);

      return () => {
        window.removeEventListener('scroll', handleDebouncedScroll)
      };
    }, [])

    useEffect(() => {
      if (isInView) {
        loadMoreTickets(offset)
      }
    }, [isInView])
  
    const loadMoreTickets = async (offset: number) => {
      setIsLoading(true)
      setOffset((prev) => prev + 1)
      const {data} = await fetchImages();
      setLoadedTickets((prevTickets: any) => [...prevTickets, ...newTickets])
      setIsLoading(false)
    }

    const fetchImages = async () => {
      const {pid} = router.query
      const from = offset * COUNT
      const to = from + COUNT - 1
      const {data:images} = await supabase.from(pid!.toString()).select('*').range(from,to).order('timeLine')
      return images;
    }


   let imageDictionary = new Map<number, string>;
   images.map(img => {
    imageDictionary.set(img.timeLine,img.imageSrc)
   })

  const back = () => {
    setimg(imageDictionary.get(images.find((img) => img.timeLine == actuall - 1)?.timeLine || 0) || "")
    if(actuall != 1)
      setActuall(actuall - 1)
    else
    setActuall(images.length)
  }

  const forward = () => {
    setimg(imageDictionary.get(images.find((img) => img.timeLine == actuall + 1)?.timeLine || 0) || "")
    if(actuall != images.length - 1)
      setActuall(actuall + 1)
    else
      setActuall(0)
  }

  return (
    <div className='bg-bg dark:bg-bg_dark text-font' ref={containerRef}>
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
          onClick={() => (setModal(false), setimg(''), setActuall(0))}
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
                loading && if(image.imageSrc.includes('long'))
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
                    onClick={() => {
                      setimg(imageDictionary.get(image.timeLine) || "")
                      setActuall(image.timeLine)
                      setModal(true)}}
                    />)
                    
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
                        onClick={() => {
                          setimg(imageDictionary.get(image.timeLine) || "")
                          setActuall(image.timeLine)
                          setModal(true)}}
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
