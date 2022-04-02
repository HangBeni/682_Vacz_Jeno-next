import Enums from '../Enums'
import Farsang from './Farsang'
import Camp from './Camp'
export default function LoadUp(){


const Images = new Array()
const LongImages = new Array()
const Far_Images = new Array()
const Far_LongImages = new Array()
  
     const GetElements= () => {
      for (let i = 0; i <= 89; i++) {
      Images.push(`${Enums.CAMP_IMGS}${i}.JPG`);
    }
    for (let i = 0; i < 17; i++) {
      LongImages.push(`${Enums.CAMP_LONG_IMGS}${i}.JPG`);
    }

    for (let i = 1; i < 19; i++) {
        Far_Images.push(`${Enums.FARSANG_IMGS}${i}.JPG`);
      }
      for (let i = 1; i <= 3; i++) {
        Far_LongImages.push(`${Enums.FARSANG_LONG_IMGS}${i}.JPG`);
      }
  }

return(
  <>
<Camp images={Images} longs={LongImages}/>
<Farsang images={Far_Images} longs={Far_LongImages}/>
</>
)
}