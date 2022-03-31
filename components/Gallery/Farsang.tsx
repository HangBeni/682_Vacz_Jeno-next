import Image from 'next/image';
import { useEffect, useState } from 'react';
import Enums from '../Enums'

function Farsang() {

    const Images = new Array()
    const LongImages = new Array()
    const[show,setShow] = useState(false);
       const GetElements= () => {
        for (let i = 1; i < 19; i++) {
        Images.push(`${Enums.FARSANG_IMGS}${i}.JPG`);
      }
      for (let i = 1; i <= 3; i++) {
        LongImages.push(`${Enums.FARSANG_LONG_IMGS}${i}.JPG`);
      }
      
    }
        
        GetElements();
      const Show = () =>{

        if(show)
        return(
          Images.map((i,e) => {
            return(
                e>10 ?
                 <Image width={500} height={300} key={e} src={i} loading="lazy" className='block max-w-full relative cursor-pointer max-h-80 rounded-md hover:translate-x-1 hover:translate-y-1 hover:shadow-black hover:shadow-md transition-all'/>
                 :<Image width={500} height={300} key={e} src={i} loading="eager" className='block max-w-full relative cursor-pointer max-h-80 rounded-md hover:translate-x-1 hover:translate-y-1 hover:shadow-black hover:shadow-md transition-all'/>
                );
           })
        );
      }

      const showHandler = () => {
        setShow(show => !show)
        Show();
      }
      useEffect(()=>{
        [show]
      })
      return ( 
          <div className="m-4">
            <button onClick={showHandler}>Farsang</button> 

            <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-4">
            {Show}
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-4">
            {
          LongImages.map((i,e) => {
            return(
                e>10 ?
                <Image width={150} height={400} key={e} src={i} loading="lazy" className='block max-w-full relative cursor-pointer max-h-80 rounded-md hover:translate-x-1 hover:translate-y-1 hover:shadow-black hover:shadow-md transition-all'/>
                :<Image width={150} height={400} key={e} src={i} loading="eager" className='block max-w-full relative cursor-pointer max-h-80 rounded-md hover:translate-x-1 hover:translate-y-1 hover:shadow-black hover:shadow-md transition-all'/>
                );
          })
        }
            </div> 

          </div>
       );
  }

export default Farsang;