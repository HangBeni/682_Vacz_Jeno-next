import { motion } from 'framer-motion';
import Link from 'next/link'
import { useState } from 'react';

export default function Navbar() {
  
  const [visible, setVisible] = useState(false);
  
  const menu_variants = {
    open: {opacity: 1,x:0},
    closed: {opacity: 0,x:"100%"}
  }

 if (typeof window !== 'undefined')
 {
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]') as HTMLInputElement || null;;
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
    
      if (currentTheme === 'dark') {
          toggleSwitch!.checked = true;
      }
  }

  
  
  toggleSwitch!.addEventListener('change', switchTheme, false);
}

function switchTheme(e:any) {
  if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
  }
  else {        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
  }    
}

    return (
    <nav className="sticky w-full h-min text-font bg-bg z-30 top-0 flex rounded-t-none border-4 border-t-0 border-trendy_green text-xl ">
      
      <div className="theme-switch-wrapper">
          <label className="theme-switch" >
            <input type="checkbox" id="checkbox" />
            <div className="slider round"></div>
          </label>
      </div>
      
      
      <div className="container mx-auto flex w-11/12 flex-wrap justify-between sm:py-2 md:py-3 z-30">
  
        <h1 className="flex z-1 lg:text-3xl font-extrabold md:after:content-['_V._J.'] lg:after:content-['_Vácz_Jenő'] md:text-2xl sm:text-xl my-auto -ml-1">
          682{' '}
        </h1>
        <button id='menu_bt' onClick={() => setVisible((visible) => !visible)} className="block z-10 my-3 mr-2 space-y-[5px] md:opacity-0 opacity-100 md:cursor-default">
            <div className="w-7 h-[4px] bg-gray-600 rounded-lg"></div>
            <div className="w-7 h-[4px] bg-gray-600 rounded-lg"></div>
            <div className="w-7 h-[4px] bg-gray-600 rounded-lg"></div>
        </button>
        <div className='hidden md:block ml-auto text-2xl py-2 rounded-xl font-semibold '>
          <ul className="md:flex md:items-center">
            <li key="Főoldal">
              <Link href="/">
                <span className="nav_link">Főoldal</span>
              </Link>
            </li>
            <li key="Tudasanyag">
              <Link  href="/Curriculum">
                <span className="nav_link">Tudástár</span>
              </Link>
            </li>
            <li key="Galéria">
              <Link  href="/Gallery">
                <span className="nav_link">Galéria</span>
              </Link>
            </li>
            <li key="Naptárunk">
              <Link  href="/Calendar">
                <span className="nav_link">Naptárunk</span>
              </Link>
            </li>
          </ul>
        </div>
        <motion.div 
        variants={menu_variants}
        animate={visible ? "open" : "closed"}
        initial="closed"
        className='md:hidden fixed bg-trendy_green h-full text-2xl
          md:bg-white  py-2 md:pl-0 pl-7 top-0 right-0 
          rounded-xl text-right font-semibold '>
          <ul className="block my-[50%] h-fit w-fit">
            <li key="Főoldal">
              <Link href="/">
                <span onClick={() => setVisible( (visible) => !visible)} className="nav_link">Főoldal</span>
              </Link>
            </li>
            <li key="Tudásanyag">
              <Link  href="/Curriculum">
                <span onClick={() => setVisible( (visible) => !visible)} className="nav_link">Tudástár</span>
              </Link>
            </li>
            <li key="Galéria">
              <Link href="/Gallery">
                <span onClick={() => setVisible( (visible) => !visible)} className="nav_link">Galéria</span>
              </Link>
            </li>
            <li key="Naptárunk">
              <Link href="/Calendar">
                <span onClick={() => setVisible( (visible) => !visible)} className="nav_link">Naptárunk</span>
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </nav>
  )
}

