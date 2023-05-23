'server'
import { GetServerSideProps } from 'next';
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router';
import Menu from '../../components/Gallery/Menu';
import Template from '../../components/Gallery/Template';
import supabase from '../../utils/supabase';
import { image } from '../../utils/Types';
import { useEffect, useRef, useState } from 'react'
import { debounce } from 'lodash';
import { motion } from 'framer-motion'
import { ppid } from 'process';





  export default function Event({images}: {images:image[]}) {
    
    const router = useRouter();
    
    console.log(router.query.event)

    let currentOffset = 0;
    const [loadedImages, setImages] = useState<image[]>(images);
  


    const [tempimg, setimg] = useState("")
  const [actuall, setActuall] = useState(0)
  const [modal, setModal] = useState(false)
    


  let imageDictionary = new Map<number, string>;
  
  loadedImages.map(img => {
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
  
    const handleScroll = (e:any) => {
      console.log(e.target.documentElement.scrollTop);
      console.log(window.innerHeight);
      console.log(e.target.documentElement.scrollHeight);
      // console.log(
      //   Math.ceil(e.target.documentElement.scrollTop + window.innerHeight)
      // );
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight = Math.ceil(
        e.target.documentElement.scrollTop + window.innerHeight
      );
      if (currentHeight + 1 >= scrollHeight) {
        fetchImages();
      }
    };
  
    useEffect(() => {
      console.log("Hej")
      window.addEventListener("scroll", handleScroll);
    }, []);
    
    //#endregion

    async function fetchImages (){
      
      const {data} = await supabase!
      .from(router.query.event!.toString()).select('*').order('timeLine').range(currentOffset,currentOffset+=10)
     
    setImages((prev) => [...prev, ...data]);     
      
    }

    return(
      <>
    <Menu/>

    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.25, 0, 1],
          delay: 0.2,
        }}
        >
    {loadedImages!.map((image:image,i) => {
    
            if(image.imageSrc.includes('long'))
                return (          
                    <Image
                    width={300}
                    height={240}
                    quality={80}
                    src={image.imageSrc}
                    key={i}
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
                        
      }           )
    }

    </motion.div>
    
    </>
     )
}


export async function getServerSideProps(context:any) {
  const {params} = context
  const {event} =params
const {data:images} = await supabase
.from(event).select('*').order('timeLine').limit(1)

return {
  props: {
    images,
  },
  
  }
}
