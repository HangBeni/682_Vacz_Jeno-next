import { useState } from "react";
import {motion, useMotionValue} from "framer-motion"
function Laws() {
   
    const [open, setOpen] = useState(false);
    const x = useMotionValue(0);
    const variants_laws = {
        open: { opacity: 1, y: 0,x:0, transition:{duration: 1}, height:"auto" },
        close: { opacity: 0, y: "-100%",x: "100%", transition:{duration: 2}, height:0},
    }

    return (
       
            <div id="content" className="content-center items-center mt-4"> 
            <motion.div 
            drag
            dragConstraints = {{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
            }}
            >
            <button onClick={() => setOpen(open => !open)} className="block uppercase font-mono text-center my-2 mx-auto text-3xl lg:text-5xl md:text-4xl p-2 w-auto tracking-widest">Törvényeink</button>
            </motion.div>
           
            <motion.div animate={open ? "open":"close" } initial="close" variants={variants_laws}>
                <ol id="laws" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center transition-all duration-500 mb-4 p-3">  
                    <li className="first-letter:text-2xl text-center p-2 text-lg md:text-xl lg:text-2xl  ">1. A cserkész <strong>híven teljesíti kötelességeit </strong>, amelyekkel <strong> Istennek </strong>,<strong>hazájának</strong>  és <strong>embertársainak</strong>  tartozik.</li>
                    <li className="first-letter:text-2xl text-center p-2 text-lg md:text-xl lg:text-2xl  ">2. A cserkész,<strong>ahol tud</strong> ,<strong>segít.</strong></li>
                    <li className="first-letter:text-2xl text-center p-2 text-lg md:text-xl lg:text-2xl  ">3. A cserkész <strong> minden cserkészt testvérének tekint.</strong></li>
                    <li className="first-letter:text-2xl text-center p-2 text-lg md:text-xl lg:text-2xl  ">4. A cserkész <strong> másokkal szemben gyengéd</strong>,<strong> magával szemben szigorú.</strong></li>
                    <li className="first-letter:text-2xl text-center p-2 text-lg md:text-xl lg:text-2xl  ">5. A cserkész <strong> egyeneslelkű </strong>és feltétlenül <strong> igazat </strong> mond.</li>
                    <li className="first-letter:text-2xl text-center p-2 text-lg md:text-xl lg:text-2xl  ">6. A cserkész <strong>szereti a természetet</strong>,<strong> jó az állatokhoz</strong>, és <strong>kíméli a növényeket.</strong></li>
                    <li className="first-letter:text-2xl text-center p-2 text-lg md:text-xl lg:text-2xl  ">7. A cserkész feljebbvalóinak <strong>jó lélekkel</strong> és <strong>készségesen engedelmeskedik.</strong></li>
                    <li className="first-letter:text-2xl text-center p-2 text-lg md:text-xl lg:text-2xl  ">8. A cserkész <strong>vidám</strong> és <strong>meggondolt.</strong></li>
                    <li className="first-letter:text-2xl text-center p-2 text-lg md:text-xl lg:text-2xl  ">9. A cserkész <strong>takarékos.</strong></li>
                    <li className="text-center p-2 text-lg md:text-xl lg:text-2xl "><span className="text-2xl">10</span>. A cserkész <strong>testben</strong> és <strong>lélekben tiszta.</strong></li>
                </ol>
                </motion.div>
            </div>
        
    );
}

export default Laws;