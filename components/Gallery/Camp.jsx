
function Camp() {

  const Images = new Array()
  const LongImages = new Array()

     const GetElements= () => {
      for (let i = 0; i < 89; i++) {
      Images.push(`https://ik.imagekit.io/HangBeni/Tábor/img_${i}.JPG`);
    }
    for (let i = 0; i < 14; i++) {
      LongImages.push(`https://ik.imagekit.io/HangBeni/Tábor/long_pic${i}.JPG`);
    }
  }
      
      GetElements();
     
    return ( 
        <div>
        {
          Images.map((e) => {
           return( <img src={e} loading="lazy"/>)
          })
          
        }   
        { 
        LongImages.map((e) => {
            return( <img src={e} loading="lazy"/>)
           })
        }
        </div>
     );
}







export default Camp;