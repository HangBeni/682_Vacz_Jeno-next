import Module from "./Module";
import { Field } from "../../pages/Curriculum";


function Courses({knowledge}: {knowledge:Field[]}) {
    return ( 
        <div className="bg-regos py-5 rounded-b-3xl">
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-4 place-items-center ">
                {knowledge.filter((item) => item.Aktív == true).map((item) => {
                    return <Module knowledge={item} />
                })}
            </div>
        </div>
     );
}





export default Courses;