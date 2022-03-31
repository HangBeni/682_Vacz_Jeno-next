import Image from 'next/image';
//import { useState } from 'react';
import Enums from '../Enums'

function Camp() {

  const Images = new Array()
  const LongImages = new Array()
  //const[popup, setpoup] = useState(null);

     const GetElements= () => {
      for (let i = 0; i <= 40; i++) {
      Images.push(`${Enums.CAMP_IMGS}${i}.JPG`);
    }
    for (let i = 0; i < 17; i++) {
      LongImages.push(`${Enums.CAMP_LONG_IMGS}${i}.JPG`);
    }
  }

    return ( 
        <div className="m-4">
          <button onClick={GetElements}>Tábor</button>

          <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-4 mx-auto">
            {
              LongImages.map((i,e) => {
                return(
                    e<10 ?
                    <Image layout="responsive" width={150} height={400}  className='block max-w-full relative cursor-pointer max-h-80 rounded-md  hover:translate-x-1 hover:translate-y-1 hover:shadow-black hover:shadow-md transition-all' src={i}  key={i} loading="lazy" />
                    :<Image layout="responsive" width={150} height={400}  className='block max-w-full relative cursor-pointer max-h-80 rounded-md  hover:translate-x-1 hover:translate-y-1 hover:shadow-black hover:shadow-md transition-all' src={i} key={i} loading="lazy" />
                    );
                })
            }
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-4 mt-4">
          {
              Images.map((i,e) => {
              return(
                  e>10 ?
                  <Image layout="responsive" quality={60} width={300} height={200} src={i} key={i} loading="lazy" className='block max-w-full relative cursor-pointer max-h-80 rounded-md hover:translate-x-1 hover:translate-y-1 hover:shadow-black hover:shadow-md transition-all'/>
                  :<Image layout="responsive" quality={60} width={300} height={200} src={i}  key={i} loading="eager" className='block max-w-full relative cursor-pointer max-h-80 rounded-md  hover:translate-x-1 hover:translate-y-1 hover:shadow-black hover:shadow-md transition-all'/>
                  );
            })
          }
            </div>
          <div>
            {/*Popup or something else*/ }
          </div>
        </div>
     );
}







export default Camp;