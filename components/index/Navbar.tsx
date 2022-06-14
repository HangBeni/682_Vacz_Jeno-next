import { motion } from 'framer-motion';
import Link from 'next/link'
import { useState } from 'react';

export default function Navbar() {
  
  const [visible, setVisible] = useState(false);

  const menu_variants = {
    open: {opacity: 1,x:0},
    closed: {opacity: 0,x:"100%"}
  }
  
    return (
    <nav className=" sticky z-30 top-0 flex rounded-t-none border-4 border-t-0 border-[#76b82a] bg-white text-xl">
      <div className="container mx-auto flex w-11/12 flex-wrap justify-between  sm:py-2 md:py-4">
        <h1 className="flex z-1 lg:text-3xl font-extrabold md:after:content-['_V._J.'] lg:after:content-['_Vácz_Jenő'] md:text-2xl sm:text-xl my-auto -ml-1">
          682{' '}
        </h1>
        <button onClick={() =>setVisible((visible) => !visible)} className="block z-10 my-3 mr-0 space-y-[5px] md:opacity-0 opacity-100">
            <div className="w-7 h-[4px] bg-gray-600 rounded-lg"></div>
            <div className="w-7 h-[4px] bg-gray-600 rounded-lg"></div>
            <div className="w-7 h-[4px] bg-gray-600 rounded-lg"></div>
        </button>
        <div className='hidden md:block ml-auto  text-2xl py-2  
          rounded-xl font-semibold '>
          <ul className="md:flex md:items-center">
            <li key="Főoldal">
              <Link href="/">
                <a className="nav_link">Főoldal</a>
              </Link>
            </li>
            <li key="Csapatunkról">
              <Link href="/Team">
                <a className="nav_link">Csapatunkról</a>
              </Link>
            </li>
            <li key="Galéria">
              <Link href="/Gallery">
                <a className="nav_link">Galéria</a>
              </Link>
            </li>
            <li key="ECSET Naptárunk">
              <Link href="https://ecset.cserkesz.hu/mcssz/682/naptar">
                <a className="nav_link">ECSET Naptár</a>
              </Link>
            </li>
          </ul>
        </div>
        <motion.div 
        variants={menu_variants}
        animate={visible ? "open" : "closed"}
        initial="closed"
        className='md:hidden fixed bg-[#76b82a] h-full text-2xl
          md:bg-white  py-2 md:pl-0 pl-7 top-0 right-0 
          rounded-xl text-right font-semibold '>
          <ul className="block my-[50%] h-fit w-fit">
            <li key="Főoldal">
              <Link href="/">
                <a className="nav_link">Főoldal</a>
              </Link>
            </li>
            <li key="Csapatunkról">
              <Link href="/Team">
                <a className="nav_link">Csapatunkról</a>
              </Link>
            </li>
            <li key="Galéria">
              <Link href="/Gallery">
                <a className="nav_link">Galéria</a>
              </Link>
            </li>
            <li key="ECSET Naptárunk">
              <Link href="https://ecset.cserkesz.hu/mcssz/682/naptar">
                <a className="nav_link">ECSET Naptár</a>
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </nav>
  )
}

