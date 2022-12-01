import { motion } from "framer-motion";
import Link  from "next/link";
import { useState } from "react";






function EventHandler() {

  const [direction_Gallery, setDirection] = useState(true);

  const variants_Gallery = {
    up:{y:"-200%", transition:{duration:1}, display: 'none'},
    down:{y:0,transition:{duration:1}}
  }

  
    return ( 
      <div className="bg-bg text-black">
      <motion.div 
      variants={variants_Gallery} initial="down" animate={direction_Gallery ? "down" : "up"}
      className="relative w-11/12 mx-auto rounded-b-xl bg-türkisz z-10">
        <div className="flex flex-wrap justify-around w-1/2 h-max py-5 mx-auto text-center ">
            <Link
            className="hover:scale-110 transition-all lg:text-2xl text-xl p-4 m-1 my-1 font-semibold cursor-pointer outline-2 outline-dashed rounded-xl"
            scroll={false}
            href={{
              pathname: '/Gallery/[event]',
              query: { event: '2021_Camp' },
            }}
            >
              <motion.span
              onClick={ () => setDirection((direction_Gallery => !direction_Gallery))}
              >2021-es Táborunk</motion.span>
            </Link>
            <Link
            scroll={false}
            className="hover:scale-110 transition-all lg:text-2xl text-xl p-4 m-1 font-semibold cursor-pointer outline-2 outline-dashed rounded-xl"
          href={{
            pathname: '/Gallery/[event]',
            query: { event: '2021_Farsang' },
          }}
        >
              <motion.span
              onClick={ () => setDirection((direction_Gallery => !direction_Gallery))}
              >Farsang</motion.span>
            </Link>
            <Link
            scroll={false}
            className="hover:scale-110 transition-all lg:text-2xl text-xl p-4 m-1  font-semibold cursor-pointer outline-2 outline-dashed rounded-xl"
          href={{
            pathname: '/Gallery/[event]',
            query: { event: '2022_Locsolo_Bal' },
          }}
            >
              <motion.span
              onClick={ () => setDirection((direction_Gallery => !direction_Gallery))}
              >Locsoló Bál</motion.span>
            </Link>

            <Link
            scroll={false}
            className="hover:scale-110 transition-all lg:text-2xl text-xl p-4 m-1 font-semibold cursor-pointer outline-2 outline-dashed rounded-xl "
          href={{
            pathname: '/Gallery/[event]',
            query: { event: '2022_May_Portya' },
          }}
            >
              <motion.span
              onClick={ () => setDirection((direction_Gallery => !direction_Gallery))}
                >2022-es Májusi Portya</motion.span>

            </Link>

            <Link
            scroll={false}
            className="hover:scale-110 transition-all lg:text-2xl text-xl p-4 m-1 font-semibold cursor-pointer outline-2 outline-dashed rounded-xl"
          href={{
            pathname: '/Gallery/[event]',
            query: {event : '2022_KNT'}
          }}
        >
              <motion.span
              onClick={ () => setDirection((direction_Gallery => !direction_Gallery))}
              >Kerületi Nagytábor</motion.span>

            </Link>

            <Link
            scroll={false}
            className="hover:scale-110 transition-all lg:text-2xl text-xl p-4 m-1 font-semibold cursor-pointer outline-2 outline-dashed rounded-xl "
          href={{
            pathname: '/Gallery/[event]',
            query: {event : '2022_Winter'}
          }}>

              <motion.span
              onClick={ () => setDirection((direction_Gallery => !direction_Gallery))}
              >2022-es téli Portya</motion.span>

            </Link>

        </div>
          
      </motion.div>
      <motion.div 
      className="grid place-items-center bg-bg text-font m-12">
      <motion.span 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
          onClick={ () => setDirection((direction_Gallery => !direction_Gallery))}
          className="absolute top-20 font-extrabold text-4xl cursor-pointer bg-türkisz p-5 px-12 rounded-b-full ">
          &#8595;
          </motion.span>
      </motion.div>
      </div>
     );
}

export default EventHandler;


