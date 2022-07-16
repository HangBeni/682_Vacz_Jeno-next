import { motion } from "framer-motion";
import Link  from "next/link";
import { useState } from "react";






function EventHandler() {

  const [direction_Gallery, setDirection] = useState(true);

  const variants_Gallery = {
    up:{y:"-200%", transition:{duration:1}},
    down:{y:0,transition:{duration:1}}
  }

  
    return ( 
      <>
      <motion.div 
      variants={variants_Gallery} initial="down" animate={direction_Gallery ? "down" : "up"}
      className="w-11/12 mx-auto rounded-b-xl bg-[#009a93]">
        <div className="flex justify-around flex-wrap w-1/2 h-max pb-5 mx-auto text-center">
            <Link
          href={{
            pathname: '/Gallery/[event]',
            query: { event: 'Camp' },
          }}
        >
              <motion.a
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
              className="lg:text-2xl m-5 text-xl p-4 mx-1 font-semibold cursor-pointer outline-2 outline-dashed rounded-xl">Táborunk</motion.a>
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
              className="lg:text-2xl m-5 text-xl p-4 mx-1 font-semibold cursor-pointer outline-2 outline-dashed rounded-xl">Farsang</motion.a>
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
              className="lg:text-2xl m-5 text-xl p-4 mx-1 font-semibold cursor-pointer outline-2 outline-dashed rounded-xl ">Locsoló Bál</motion.a>
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
              className="lg:text-2xl m-5 text-xl p-4 mx-1 font-semibold cursor-pointer outline-2 outline-dashed rounded-xl ">Májusi Portya</motion.a>
            </Link>

            <Link
          href={{
            pathname: '/Gallery/[event]',
            query: { event: 'KNT' },
          }}
        >
              <motion.a
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
              className="lg:text-2xl m-5 text-xl p-4 mx-1 font-semibold cursor-pointer outline-2 outline-dashed rounded-xl ">Kerületi Nagytábor</motion.a>
            </Link>
        </div>
    
      </motion.div>
      </>
     );
}

export default EventHandler;


