import Link from "next/link";
import { Field } from "../../pages/Curriculum";

function Module({knowledge}: {knowledge: Field}) {
    return ( 
    <Link className="grid place-items-center" href={`Curriculum/${knowledge.Link}`}>
         <div className="text-font bg-bg dark:bg-bg_dark dark:text-font_dark w-3/4 h-fit m-2 p-1 shadow-lg rounded-lg hover:translate-y-1 hover:translate-x-1 duration-150 cursor-pointer">
           
                <img className="rounded-lg object-cover" src={knowledge.imageSrc} alt="A Tudásanyag képe" />
           
            <div className="w-full p-2">
                    <h1 className="text-2xl font-bold w-full">{knowledge.id}</h1>
                    <p className="block text-justify text-lg">{knowledge.Description}</p>
            </div>
            
        </div>
    </Link>
     );
}





export default Module;