import Link from "next/link";
import { Field } from "../../pages/Curriculum";

function Module({knowledge}: {knowledge: Field}) {
    return ( 
    <Link href={`Curriculum/${knowledge.Link}`}>
         <div className=" text-font bg-bg w-3/4 h-fit m-2 p-1 shadow-lg rounded-lg hover:translate-y-1 hover:translate-x-1 duration-150 cursor-pointer">
           
                <img className="rounded-lg object-cover" src={knowledge.imageSrc} alt="A Tudásanyag képe" />
           
            <div className="p-3">
                    <h1 className="text-2xl font-bold">{knowledge.id}</h1>
                    <p className="block text-justify">{knowledge.Description}</p>
            </div>
            
        </div>
    </Link>
     );
}





export default Module;