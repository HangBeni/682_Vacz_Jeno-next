import Link from 'next/link'

export default function Navbar() {
  
  const menu= () => {
      const list = document.querySelector('ul');
    list?.id=== 'menu' ? 
    (list.id='close',list?.classList.remove('hidden'),list?.classList.add('right-0')) 
    :(list!.id='menu', list?.classList.add('hidden'));
  }
  
    return (
    <nav className=" sticky z-30 top-0 flex rounded-lg border-b-4 border-r-4 border-l-8 border-[#76b82a] bg-white text-xl">
      <div className="container mx-auto flex w-11/12 flex-wrap justify-between  sm:py-2 md:py-4">
        <h1 className="flex z-1 lg:text-3xl font-extrabold md:after:content-['_V._J.'] md:mx-auto md:text-2xl lg:after:content-['_Vácz_Jenő']  sm:text-xl my-auto ">
          682{' '}
        </h1>
        <button onClick={menu} className="block z-10 my-3 mr-0 space-y-[5px] md:opacity-0 opacity-100">
            <div className="w-7 h-[4px] bg-gray-600 rounded-lg"></div>
            <div className="w-7 h-[4px] bg-gray-600 rounded-lg"></div>
            <div className="w-7 h-[4px] bg-gray-600 rounded-lg"></div>
        </button>
        <ul id='menu' className="absolute bg-[#76b82a]
         md:static md:ml-auto md:flex md:items-center text-2xl
        md:bg-white md:py-0 py-2 md:pl-0 pl-7 hidden top-0
         transition-all ease-in duration-300 rounded-xl text-right font-semibold pt-32 pb-32 ">
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
          <li key="Tananyagunk">
            <Link href="/Curriculum">
              <a className="nav_link">Tananyagaink</a>
            </Link>
          </li>
          <li key="ECSET Naptárunk">
            <Link href="https://ecset.cserkesz.hu/mcssz/682/naptar">
              <a className="nav_link">ECSET Naptár</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}