import { motion } from "framer-motion";
import Link  from "next/link";
import { useState } from "react";
import ScrollToTop from "react-scroll-to-top";






function EventHandler() {

  const [direction_Gallery, setDirection] = useState(true);

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
      variants={variants_Gallery} initial="down" animate={direction_Gallery ? "down" : "up"}
      className="w-11/12 mx-auto rounded-b-xl bg-[#009a93]">
        <div className="flex justify-around flex-wrap w-1/2 mx-auto text-center">
            <Link
          href={{
            pathname: '/Gallery/[event]',
            query: { event: 'Camp' },
          }}
        >
              <motion.a
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
              className="lg:text-2xl text-xl p-4 mx-1 font-semibold cursor-pointer outline-2 outline-dashed rounded-xl m-2">Táborunk</motion.a>
            </Link>
            <Link
          href={{
            pathname: '/Gallery/[event]',
            query: { event: 'Farsang' },
          }}
        >
              <motion.a
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
              className="lg:text-2xl text-xl p-4 mx-1 font-semibold cursor-pointer outline-2 outline-dashed rounded-xl m-2">Farsang</motion.a>
            </Link>
            <Link
          href={{
            pathname: '/Gallery/[event]',
            query: { event: 'Locsoló_Bál' },
          }}
        >
              <motion.a
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
              className="lg:text-2xl text-xl p-4 mx-1 font-semibold cursor-pointer outline-2 outline-dashed rounded-xl m-2">Locsoló Bál</motion.a>
            </Link>
            <Link
          href={{
            pathname: '/Gallery/[event]',
            query: { event: 'May_Portya' },
          }}
        >
              <motion.a
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
              className="lg:text-2xl text-xl p-4 mx-1 font-semibold cursor-pointer outline-2 outline-dashed rounded-xl m-2">Májusi Portya</motion.a>
            </Link>
        </div>
    
      </motion.div>
      <motion.span
       variants={variants_arrow_Gallery} initial="up" animate={direction_Gallery ? "up" : "down"}
      onClick={() => setDirection(direction_Gallery=> !direction_Gallery)}
      className="absolute cursor-pointer font-bold text-xl right-10 top-24 md:top-24 md:right-16 lg:right-20 outline-double bg-[#009a93] p-2 m-1 rounded-full translate-y-0 z-20">&#8593;</motion.span>
      </>
     );
}

export default EventHandler;


