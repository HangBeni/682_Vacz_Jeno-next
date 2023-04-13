import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from 'react';

function EventHandler() {

  const [direction_Gallery, setDirection] = useState(true);

  const variants_Gallery = {
    up: { y: "-200%", transition: { duration: 1 }, display: 'none' },
    down: { y: 0, transition: { duration: 1 } }
  }

  const events = [
    ["2021_Camp","2021 Nyári Táborunk"],
    ["2021_Farsang","2021 Farsangi mulatság"], 
    ["2022_Locsolo_Bal","2022 Locsolóbál"],
    ["2022_May_Portya","2022 Májusi Portya"],
    ["2022_KNT","Kerületi Nagytábor"],
    ["2022_Winter","2022 Téli Portya"],
    ["Regos_Napok","2022 Regös Napok"],
    [ "2023_March_Portya", "2023 Márciusi Portya"],
    ["2023_Locsolobal", "2023 Locsolóbál"]
    ];



  return (
    <div className="bg-bg dark:bg-bg_dark text-black">
      <motion.div
        variants={variants_Gallery} initial="down" animate={direction_Gallery ? "down" : "up"}
        className="relative w-11/12 mx-auto rounded-b-xl bg-türkisz z-10">
        <div className="flex flex-wrap gap-3 justify-evenly w-4/6 h-max py-5 mx-auto text-center ">
          {
            events.map((actual) =>{
              return(
                <Link
                      className="hover:scale-110 transition-all text-xl p-3.5 font-semibold cursor-pointer outline-2 outline-dashed rounded-xl"
                      scroll={false}
                      href={{
                        pathname: '/Gallery/[event]',
                        query: { event: (actual[0])},
                      }}
                    >
                      <motion.span
                        onClick={() => setDirection((direction_Gallery => !direction_Gallery))}
                      >{actual[1]}</motion.span>
                    </Link>
            )})
    }
        </div>
      </motion.div>
      <motion.div
        className="grid place-items-center bg-bg dark:bg-bg_dark text-font m-12">
        <motion.span
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setDirection((direction_Gallery => !direction_Gallery))}
          className="absolute top-20 font-extrabold text-4xl cursor-pointer bg-türkisz p-5 px-12 rounded-b-full ">
          &#8595;
        </motion.span>
      </motion.div>
    </div>
  )
}

export default EventHandler;


