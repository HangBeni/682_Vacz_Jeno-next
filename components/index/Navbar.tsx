import Link  from "next/link";

export default function Navbar(){
    return(
        <nav className="flex bg-white sticky top-0 z-40 text-xl border-[#76b82a] border-b-4 border-r-4 border-l-8 rounded-lg">
        <div className="container self-center flex flex-wrap md:py-4 sm:py-2 justify-between mx-auto  w-11/12 sm:place-content-center">
        
            <h1 className="flex font-extrabold text-3xl md:after:content-['_V._J.'] lg:after:content-['_Vácz_Jenő'] ">682 </h1>
            
            <ul className="flex justify-between items-center w-auto ml-auto">
               <li key="Főoldal">
                   <Link  href="/">
                   <a className="nav_link">Főoldal</a>
                   </Link>
               </li>
               <li key="Csapatunkról">
                <Link  href="/Team">
                <a className="nav_link">Csapatunkról</a>
                </Link>
            </li>
            <li key="Galéria">
                <Link  href="/Gallery">
                <a className="nav_link">Galéria</a>
                </Link >
            </li>
            <li key="ECSET Naptárunk">
                <Link  href="https://ecset.cserkesz.hu/mcssz/682/naptar">
                <a className="nav_link">ECSET Naptár</a>
                </Link >
            </li>
            </ul>
        </div>
        
    </nav>
    );
}





/*
.navbar{
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
    background: linear-gradient(to right, var(--trendy-green) 75%, white 100%);
}
.navbar__container{
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
max-width: 1300px;
margin: 0 auto;
padding: 0 55px 0 45px;
}

#navbar__logo{
    background-color: black;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color:transparent;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: default;
    font-size: 1.8rem;
}

.navbar__menu{
display: flex;
align-items: center;
list-style: none;
}
.navbar__item{
    height: 100%;
}
.navbar__links{
color: black;
display: flex;
align-items: center;
justify-content: center;
width: 125px;
text-decoration: none;
height: 100%;
transition: all 0.3s ease;
}



.navbar__link s:hover{
    color: var(--regos);
    transform: translateX(10px);
    list-style: none;
    transition: all 200ms ease-in-out;
    opacity: 1;
}
.navbar__link s::after{
    height: 2px;
position: absolute;
content: "";
left: 0;
bottom: 0;
width: 100%;
background-color: orange;
transform: scaleX(0);
transform-origin: right;
transition: all 200ms ease-in;
}
.navbar__link s:hover::after{
transform: scaleX(1);
transform-origin: left;
}
*/