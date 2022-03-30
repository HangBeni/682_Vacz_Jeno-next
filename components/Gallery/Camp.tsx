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
        <div className="">
        {
          Images.map((i,e) => {
           return(
               e>10 ?
                <img src={i} key={i} loading="lazy"/>
                :<img  src={i}  key={i} loading="eager"/>
               );
          })
        }  

        { 
        LongImages.map((i,e) => {
            return(
                e>10 ?
                 <img  src={i}  key={i} loading="lazy"/>
                 :<img src={i} key={i} loading="eager"/>
                );
           })
        }
        </div>
     );
}







export default Camp;