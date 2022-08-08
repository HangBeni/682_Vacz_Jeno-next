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
      className="relative w-11/12 mx-auto rounded-b-xl bg-türkisz z-10">
        <div className="flex justify-around flex-wrap w-1/2 h-max pb-5 mx-auto text-center ">
            <Link
          href={{
            pathname: '/Gallery/[event]',
            query: { event: '2021_Camp' },
          }}
        >
              <motion.a
              onClick={ () => setDirection((direction_Gallery => !direction_Gallery))}
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
              className="lg:text-2xl m-5 text-xl p-4 mx-1 font-semibold cursor-pointer outline-2 outline-dashed rounded-xl">2021-es Táborunk</motion.a>
            </Link>
            <Link
          href={{
            pathname: '/Gallery/[event]',
            query: { event: '2021_Farsang' },
          }}
        >
              <motion.a
              onClick={ () => setDirection((direction_Gallery => !direction_Gallery))}
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
              className="lg:text-2xl m-5 text-xl p-4 mx-1 font-semibold cursor-pointer outline-2 outline-dashed rounded-xl">Farsang</motion.a>
            </Link>
            <Link
          href={{
            pathname: '/Gallery/[event]',
            query: { event: '2022_Locsolo_Bal' },
          }}
        >
              <motion.a
              onClick={ () => setDirection((direction_Gallery => !direction_Gallery))}
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
              className="lg:text-2xl m-5 text-xl p-4 mx-1 font-semibold cursor-pointer outline-2 outline-dashed rounded-xl ">Locsoló Bál</motion.a>
            </Link>
            <Link
          href={{
            pathname: '/Gallery/[event]',
            query: { event: '2022_May_Portya' },
          }}
        >
              <motion.a
              onClick={ () => setDirection((direction_Gallery => !direction_Gallery))}
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
              className="lg:text-2xl m-5 text-xl p-4 mx-1 font-semibold cursor-pointer outline-2 outline-dashed rounded-xl ">Májusi Portya</motion.a>
            </Link>

            <Link
          href={{
            pathname: '/Gallery/[event]',
            query: {event : '2022_KNT'}
          }}
        >
              <motion.a
              onClick={ () => setDirection((direction_Gallery => !direction_Gallery))}
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
              className="lg:text-2xl m-5 text-xl p-4 mx-1 font-semibold cursor-pointer outline-2 outline-dashed rounded-xl ">Kerületi Nagytábor</motion.a>
            </Link>
        </div>
          
      </motion.div>
      <motion.div 
      className="grid place-items-center">
      <motion.span 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
          onClick={ () => setDirection((direction_Gallery => !direction_Gallery))}
          className="absolute top-20 font-extrabold text-4xl cursor-pointer bg-türkisz p-5 px-12 rounded-b-full ">
          &#8595;
          </motion.span>
      </motion.div>
      </>
     );
}

export default EventHandler;


