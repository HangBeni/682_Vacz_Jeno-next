
function Camp() {

  const Images = new Array()
  const LongImages = new Array()

     const GetElements= () => {
      for (let i = 0; i < 89; i++) {
      Images.push(`https://ik.imagekit.io/HangBeni/Tábor/img_${i}.JPG?tr=w-600`);
    }
    for (let i = 0; i < 14; i++) {
      LongImages.push(`https://ik.imagekit.io/HangBeni/Tábor/long_pic${i}.JPG?tr=w-300`);
    }
  }
      
      GetElements();
     
    return ( 
        <div>
          <div className="grid">
        {
          Images.map((i,e) => {
           return(
               e>10 ?
                <img src={i} loading="lazy"/>
                :<img src={i} loading="eager"/>
               );
          })
          
        }  
        </div> 
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







export default Camp;