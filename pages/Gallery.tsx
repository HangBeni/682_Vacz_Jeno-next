import Link from "next/link";



 function Gallery() {
 return(
 <div>
   <Link as='/Gallery/Camp' href='/Gallery/[event]'><a>Táborunk</a></Link>
   <Link as='/Gallery/Farsang' href='/Gallery/[event]'><a>Farsang</a></Link>   
 </div> 
 );
}




export default Gallery