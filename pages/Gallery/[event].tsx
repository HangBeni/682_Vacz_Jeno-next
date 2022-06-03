import { GetServerSideProps } from 'next';
import Image from 'next/image'
import { useState } from 'react';
import supabase from '../../utils/supabase';



type Image = {  
    id: number
    imageScr: string
    tags: string
  }

  


    function Event({images}: {images: Image[]}) {

  const [tempimg, setimg] = useState('');
  const [modal, setModal] = useState(false);

    
    return ( 
<>
    <div 
            className={modal ? 
            ("flex w-full h-full fixed top-0 left-0 items-center justify-center bg-black z-50")
            :
            ("hidden overflow-hidden")}>
                <img src={tempimg} className="block w-auto max-w-full h-auto max-h-full box-border p-3 mx-auto my-0" />
                <span className="fixed top-5 right-5 w-8 h-8 p-1 text-white cursor-pointer text-4xl"
                onClick={() =>( setModal(false), setimg(''))}>&times;</span>
        </div>




        <div className="m-4 ">
    
        <div  className="mt-4 grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-4">
            {images?.map((image:any) => {
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
            {images?.map((image) => {
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

     );
}

export default Event;


export async function getServerSideProps(context:any) {
    const {params} = context
    const {event} = params
    console.log(event);
const {data:images} = await supabase.from(event).select('*').order('id')

return {
  props: {
    images
  },
}
}