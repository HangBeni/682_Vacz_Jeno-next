import Module from "./Module";
import { Field } from "../../pages/Curriculum";


function Courses({knowledge}: {knowledge:Field[]}) {
    return ( 
        <div className="bg-regos py-5 dark:rounded-b-3xl">
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-4 place-items-center ">
                {knowledge.map((item) => {
                    return <Module knowledge={item} />
                })}
            </div>
        </div>
     );
}





export default Courses;