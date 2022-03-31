import Enums from '../Enums'

function Farsang() {

    const Images = new Array()
    const LongImages = new Array()
  
       const GetElements= () => {
        for (let i = 1; i < 19; i++) {
        Images.push(`${Enums.FARSANG_IMGS}${i}.JPG?tr=w-600`);
      }
      for (let i = 1; i < 3; i++) {
        LongImages.push(`${Enums.FARSANG_LONG_IMGS}${i}.JPG?tr=w-300`);
      }
    }
        
        GetElements();
       
      return ( 
          <div >
          {
            Images.map((i,e) => {
             return(
                 e>10 ?
                  <img key={e.toString()} src={i} loading="lazy"/>
                  :<img key={e.toString()} src={i} loading="eager"/>
                 );
            })
            
          }   
          { 
          LongImages.map((i,e) => {
              return(
                  e>10 ?
                   <img key={e.toString()} src={i} loading="lazy"/>
                   :<img key={e.toString()} src={i} loading="eager"/>
                  );
             })
          }
          </div>
       );
  }

export default Farsang;