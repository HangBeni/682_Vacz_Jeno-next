import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Link from 'next/link'
import { useState } from 'react';
import Image from 'next/image';
export default function Navbar() {
  
  const [visible, setVisible] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;


  const menu_variants = {
    open: {opacity: 1,x:0},
    closed: {opacity: 0,x:"100%"}
  }

  const navLinks = [['Főoldal' , '/'], ['Tudástár', '/Curriculum'], ['Galéria', '/Gallery'], ['Naptárunk', '/Calendar']]


    return (
    <nav className="sticky w-full h-min z-30 top-0 flex rounded-t-none border-4 border-t-0 border-trendy_green text-xl bg-bg text-font dark:bg-bg_dark dark:text-font_dark">
      <div>
        <button onClick={() => theme == 'dark' ? setTheme('light'): (setTheme('dark'))}>
          <Image src='/day-and-night.png' alt="Theme changer"
          width={75}
          height={75} 
          className="mx-3 dark:invert"/>
        </button>
      </div>
      
      <div className="container mx-auto flex w-11/12 flex-wrap justify-between sm:py-2 md:py-3 z-30">
  
        <h1 className="flex z-1 lg:text-3xl font-extrabold md:after:content-['_V._J.'] lg:after:content-['_Vácz_Jenő'] md:text-2xl sm:text-xl my-auto ml-3">
          682{' '}
        </h1>
        <button id='menu_bt' onClick={() => setVisible((visible) => !visible)} className="block z-10 my-3 mr-2 space-y-[5px] md:opacity-0 opacity-100 md:cursor-default">
            <span className="block w-7 h-[4px] bg-gray-600 rounded-lg"></span>
            <span className="block w-7 h-[4px] bg-gray-600 rounded-lg"></span>
            <span className="block w-7 h-[4px] bg-gray-600 rounded-lg"></span>
        </button>
        <div className='hidden md:block ml-auto text-2xl py-2 rounded-xl font-semibold '>
          <ul className="md:flex md:items-center">
            {navLinks.map((link) => {
              return(
              <li key={link[0]}>
                <Link href={link[1]}>
                  <span className="nav_link">{link[0]}</span>
                </Link>
              </li>)
            })}
          </ul>
        </div>
        <motion.div 
        variants={menu_variants}
        animate={visible ? "open" : "closed"}
        className='md:hidden fixed bg-trendy_green h-full text-2xl
          md:bg-white  py-2 md:pl-0 pl-7 top-0 right-0 
          rounded-xl text-right font-semibold '>
          <ul className="block my-[50%] h-fit w-fit">
          {navLinks.map((link) => {
              return(
              <li key={link[0]}>
                <Link href={link[1]}>
                  <span onClick={() => setVisible( (visible) => !visible)} className="nav_link">{link[0]}</span>
                </Link>
              </li>)
            })}
          </ul>
        </motion.div>
      </div>
    </nav>
  )
}

