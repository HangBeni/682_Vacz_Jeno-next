import { motion } from "framer-motion";
import Link from "next/link";

function CurriculumNav() {

    return (
        <>

            <div className="sm:w-fit rounded-lg sm:ml-auto">
                <motion.div

                    className="text-3xl font-bold tracking-widest h-fit w-full ml-auto text-center rounded-t-full bg-[#93130a] pb-0 pt-3 px-6">
                    <span>Tudás Anyagaink</span>
                </motion.div>
                <div

                    className=" flex justify-around flex-col text-center bg-[#009a93] ">
                    <Link href=
                        {{
                            pathname: '/Curriculum/[theme]',
                            query: { theme: 'Csomozas' },
                        }}>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 m-2 font-bold  text-2xl "
                        >Csomozás</motion.a>
                    </Link>

                    <Link href={{
                        pathname: '/Curriculum/[theme]',
                        query: { theme: 'Terkep' },
                    }}>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 m-2 font-bold  text-2xl"
                        >Térképészet</motion.a>
                    </Link>

                    <Link href={{
                        pathname: '/Curriculum/[theme]',
                        query: { theme: 'Magyarsag' },
                    }}>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 m-2 font-bold  text-2xl"
                        >Magyarság Ismeretek</motion.a>
                    </Link>

                    <Link href={{
                        pathname: '/Curriculum/[theme]',
                        query: { theme: 'CserkeszIsmeretek' },
                    }}>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 m-2 font-bold  text-2xl"
                        >Cserkész Ismeretek</motion.a>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default CurriculumNav;