import { motion } from "framer-motion";
import Link  from "next/link";
import { useState } from "react";
import ScrollToTop from "react-scroll-to-top";






function EventHandler() {

  const [direction_Gallery, setDirection] = useState(false);

  const variants_Gallery = {
    up:{y:"-200%", transition:{duration:1}},
    down:{y:0,transition:{duration:1}}
  }

  const variants_arrow_Gallery = {
    down:{ transition:{duration:1}, rotate: 180,},
    up:{transition:{duration:1}, rotate: 0,}
  }
    return ( 
      <>
      <motion.div 
      variants={variants_Gallery} initial="up" animate={direction_Gallery ? "down" : "up"}
      className="w-11/12 mx-auto rounded-b-xl bg-[#009a93]">
        <div className="flex justify-between w-1/2 mx-auto">
            <Link
          href={{
            pathname: '/Gallery/[event]',
            query: { event: 'Camp' },
          }}
        >
              <a className="lg:text-2xl text-lg p-4 mx-1 font-semibold">Táborunk</a>
            </Link>
            <Link
          href={{
            pathname: '/Gallery/[event]',
            query: { event: 'Farsang' },
          }}
        >
              <a className="lg:text-2xl text-lg p-4 mx-1 font-semibold">Farsang</a>
            </Link>
        </div>
    
      </motion.div>
      <motion.span
       variants={variants_arrow_Gallery} initial="up" animate={direction_Gallery ? "down" : "up"}
      onClick={() => setDirection(direction_Gallery=> !direction_Gallery)}
      className="absolute cursor-pointer font-bold text-xl right-10 top-auto bg-[#009a93] p-2 m-1 rounded-full translate-y-0 z-20">&#8593;</motion.span>
      </>
     );
}

export default EventHandler;


