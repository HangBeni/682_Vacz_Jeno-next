import { motion } from "framer-motion";
import Link  from "next/link";
import { useState } from "react";

function CurriculumNav() {
    

    const [direction, setDirection] = useState(false);

    const curriculum_variants= {
        in:{},
        out:{x:"100%"}
    }
    const header_variants= {
        in:{},
        out:{x:0, }
    }
    { /* animate={direction ? "in" : "out"} initial="out" variants={header_variants}}
            {/*animate={direction ? "in" : "out"} initial="out" variants={curriculum_variants}*/}
    return (
        <> 
           
            <div className="w-fit rounded-lg float-right">
                <motion.div 
                
                className="text-2xl sm:text-3xl h-fit w-full ml-auto text-center rounded-t-full bg-[#93130a] pb-0 pt-3 px-6">
                    <span>Tudás Anyagaink</span>
                </motion.div>
                <div
        
                className=" flex justify-around flex-col text-center bg-[#009a93] ">
                    <Link href="Curriculum/Csomozas">
                        <motion.a
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.9}}
                        className="p-3 m-2 font-bold sm:text-2xl text-lg "
                        >Csomozás</motion.a>
                    </Link>

                    <Link href='Curriculum/Terkepeszet'>
                        <motion.a
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.9}}
                        className="p-3 m-2 font-bold sm:text-2xl text-lg"
                        >Térképészet</motion.a>
                    </Link>

                    <Link href='Curriculum/Magyarsag'>
                        <motion.a
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.9}}
                        className="p-3 m-2 font-bold sm:text-2xl text-lg"
                        >Magyarság Ismeretek</motion.a>
                    </Link>

                    <Link href='Curriculum/Cserkeszismeretek'>
                    <motion.a
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                    className="p-3 m-2 font-bold sm:text-2xl text-lg"
                    >Cserkész Ismeretek</motion.a>
                    </Link>
                </div>
            </div>
        </>
     );
}

export default CurriculumNav;