import { motion } from "framer-motion"

function Donation() {
  return (
    <motion.div
    initial={{opacity: 0, x:'40%'}}
    whileInView={{opacity:1, x:0}}
    transition={{duration: 0.5}}
    className="block h-full py-8 bg-trendy_green text-justify">
      <h1 className="text-3xl font-extrabold pt-4 ml-6 text-center sm:text-left">Támogatási lehetőség</h1>
      <p className="text-lg mt-5 px-5 ">
        Amennyiben támogatni szeretné csapatunkat, azt ezen a számlára utalva
        teheti meg: <strong>11773315-02097341</strong>, a <strong> Hosszúhetényi Cserkész Barátikör</strong> számára. Ezekkel a
        támogatásokkal felszereléseket vásárolunk és a programjainkat
        finanszírozzuk, amiket a gyerekek részére csinálunk. Az adományozás
        teljesen önkéntes, mindent hálával fogadunk.
      </p>
    </motion.div>
  )
}

export default Donation
