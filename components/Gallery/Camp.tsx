import Enums from '../Enums'

function Camp() {

  const Images = new Array()
  const LongImages = new Array()

     const GetElements= () => {
      for (let i = 0; i <= 89; i++) {
      Images.push(`${Enums.CAMP_IMGS}${i}.JPG?tr=w-600`);
    }
    for (let i = 0; i < 17; i++) {
      LongImages.push(`${Enums.CAMP_LONG_IMGS}${i}.JPG?tr=w-300`);
    }
  }
      
      GetElements();
     
    return ( 
        <div className="m-4">
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-4 mx-auto">
        {
          Images.map((i,e) => {
           return(
               e>10 ?
                <img src={i} key={i} loading="lazy" className='block max-w-full relative cursor-pointer max-h-80 rounded-md hover:translate-x-1 hover:translate-y-1 hover:shadow-black hover:shadow-md transition-all'/>
                :<img  src={i}  key={i} loading="eager" className='block max-w-full relative cursor-pointer max-h-80 rounded-md  hover:translate-x-1 hover:translate-y-1 hover:shadow-black hover:shadow-md transition-all'/>
               );
          })
        }  
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-4 mt-4">
        { 
        LongImages.map((i,e) => {
            return(
                e<10 ?
                 <img className='block max-w-full relative cursor-pointer max-h-80 rounded-md  hover:translate-x-1 hover:translate-y-1 hover:shadow-black hover:shadow-md transition-all' src={i}  key={i} loading="eager" />
                 :<img className='block max-w-full relative cursor-pointer max-h-80 rounded-md  hover:translate-x-1 hover:translate-y-1 hover:shadow-black hover:shadow-md transition-all' src={i} key={i} loading="lazy" />
                );
           })
        }
          </div>
        </div>
     );
}







export default Camp;