import { useState } from "react";
import {motion, useMotionValue} from "framer-motion";

function Laws() {
   
    const [open, setOpen] = useState(false);
    const x = useMotionValue(0);

    const variants_laws = {
        open: { opacity: 1, y: 0,x:0, transition:{duration: 1}, height:"auto" },
        close: { opacity: 0, y: "-100%",x: "100%", transition:{duration: 2}, height:0},
    }

    return (
            <div id="content" className="content-center items-center mt-4 text-font dark:text-font_dark"> 
            <motion.div 
            drag
            dragConstraints = {{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
            }}
            >
            <motion.button 
                onClick={() => setOpen(open => !open)}
                whileHover={{scale:1.1}}
                className="block uppercase font-mono  text-center my-2 mx-auto text-3xl lg:text-5xl md:text-4xl p-2 w-auto tracking-widest">
                    Törvényeink
                </motion.button>
               
            </motion.div>
           
            <motion.div animate={open ? "open":"close" } initial="close" variants={variants_laws}>
                <ol id="laws" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center transition-all duration-500 mb-4 p-3">  
                    <li className="first-letter:text-2xl text-center p-2 text-lg md:text-xl lg:text-2xl  ">1. A cserkész <strong className="hover:text-trendy_green duration-300 [@media(hover:none)]:text-trendy_green">híven teljesíti kötelességeit </strong>, amelyekkel <strong className="hover:text-trendy_green duration-300 [@media(hover:none)]:text-trendy_green"> Istennek </strong>,<strong className="hover:text-trendy_green duration-300 [@media(hover:none)]:text-trendy_green">hazájának</strong>  és <strong className="hover:text-trendy_green duration-300 [@media(hover:none)]:text-trendy_green">embertársainak</strong>  tartozik.</li>
                    <li className="first-letter:text-2xl text-center p-2 text-lg md:text-xl lg:text-2xl  ">2. A cserkész,<strong className="hover:text-trendy_green duration-300 [@media(hover:none)]:text-trendy_green">ahol tud</strong> ,<strong className="hover:text-trendy_green duration-300 [@media(hover:none)]:text-trendy_green">segít.</strong></li>
                    <li className="first-letter:text-2xl text-center p-2 text-lg md:text-xl lg:text-2xl  ">3. A cserkész <strong className="hover:text-trendy_green duration-300 [@media(hover:none)]:text-trendy_green"> minden cserkészt testvérének tekint.</strong></li>
                    <li className="first-letter:text-2xl text-center p-2 text-lg md:text-xl lg:text-2xl  ">4. A cserkész <strong className="hover:text-trendy_green duration-300 [@media(hover:none)]:text-trendy_green"> másokkal szemben gyengéd</strong>,<strong className="hover:text-trendy_green duration-300 [@media(hover:none)]:text-trendy_green"> magával szemben szigorú.</strong></li>
                    <li className="first-letter:text-2xl text-center p-2 text-lg md:text-xl lg:text-2xl  ">5. A cserkész <strong className="hover:text-trendy_green duration-300 [@media(hover:none)]:text-trendy_green"> egyeneslelkű </strong>és feltétlenül <strong className="hover:text-trendy_green duration-300 [@media(hover:none)]:text-trendy_green"> igazat </strong> mond.</li>
                    <li className="first-letter:text-2xl text-center p-2 text-lg md:text-xl lg:text-2xl  ">6. A cserkész <strong className="hover:text-trendy_green duration-300 [@media(hover:none)]:text-trendy_green">szereti a természetet</strong>,<strong className="hover:text-trendy_green duration-300 [@media(hover:none)]:text-trendy_green"> jó az állatokhoz</strong>, és <strong className="hover:text-trendy_green duration-300 [@media(hover:none)]:text-trendy_green">kíméli a növényeket.</strong></li>
                    <li className="first-letter:text-2xl text-center p-2 text-lg md:text-xl lg:text-2xl  ">7. A cserkész feljebbvalóinak <strong className="hover:text-trendy_green duration-300 [@media(hover:none)]:text-trendy_green">jó lélekkel</strong> és <strong className="hover:text-trendy_green duration-300 [@media(hover:none)]:text-trendy_green">készségesen engedelmeskedik.</strong></li>
                    <li className="first-letter:text-2xl text-center p-2 text-lg md:text-xl lg:text-2xl  ">8. A cserkész <strong className="hover:text-trendy_green duration-300 [@media(hover:none)]:text-trendy_green">vidám</strong> és <strong className="hover:text-trendy_green duration-300 [@media(hover:none)]:text-trendy_green">meggondolt.</strong></li>
                    <li className="first-letter:text-2xl text-center p-2 text-lg md:text-xl lg:text-2xl  ">9. A cserkész <strong className="hover:text-trendy_green duration-300 [@media(hover:none)]:text-trendy_green">takarékos.</strong></li>
                    <li className="text-center p-2 text-lg md:text-xl lg:text-2xl "><span className="text-2xl">10</span>. A cserkész <strong className="hover:text-trendy_green duration-300 [@media(hover:none)]:text-trendy_green">testben</strong> és <strong className="hover:text-trendy_green duration-300 [@media(hover:none)]:text-trendy_green">lélekben tiszta.</strong></li>
                </ol>
                </motion.div>
            </div>
        
    );
}

export default Laws;