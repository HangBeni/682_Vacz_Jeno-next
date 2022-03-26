function Farsang() {

    const Images = new Array()
    const LongImages = new Array()
  
       const GetElements= () => {
        for (let i = 1; i < 19; i++) {
        Images.push(`https://ik.imagekit.io/HangBeni/Farsang/Farsang_${i}.JPG?tr=w-600`);
      }
      for (let i = 1; i < 3; i++) {
        LongImages.push(`https://ik.imagekit.io/HangBeni/Farsang/Farsang_long_${i}.JPG?tr=w-300`);
      }
    }
        
        GetElements();
       
      return ( 
          <div >
          {
            Images.map((i,e) => {
             return(
                 e>10 ?
                  <img src={i} loading="lazy"/>
                  :<img src={i} loading="eager"/>
                 );
            })
            
          }   
          { 
          LongImages.map((i,e) => {
              return(
                  e>10 ?
                   <img src={i} loading="lazy"/>
                   :<img src={i} loading="eager"/>
                  );
             })
          }
          </div>
       );
  }

export default Farsang;