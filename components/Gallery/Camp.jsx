import Image from "next/image";

function Camp() {
    
    const imageKitLoader = ({ src, width, quality }) => {
        if(src[0] === "/") src = src.slice(1);
        const params = [`w-${width}`];
        if (quality) {
          params.push(`q-${quality}`);
        }
        const paramsString = params.join(",");
        var urlEndpoint = "https://ik.imagekit.io/HangBeni/Tábor";
        return `${urlEndpoint}/${src}?tr=${paramsString}`
      }

      const[index, setindex] = useState([0]);

       for (let i = 0; i < 98; i++) {
            setindex(...index,i);
       }
   
   
    return ( 
        <div>
        { index.forEach((i) => {
                <Image
                loader={imageKitLoader}
                src={`img_${i}.JPG`}
                alt="Sample image"
                width={400}
                height={400}
              />
            })}
       
            
        </div>
     );
}







export default Camp;