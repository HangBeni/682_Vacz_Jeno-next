export default function Navbar() {
    return(
        <nav  >
        <div  >
        
            <h1 >682 Vácz Jenő</h1>
                               
            <div >
            <span></span>
            <span></span>
            <span></span>
            </div>
            <ul >
               <li >
                   <a>Főoldal</a>
               </li>
               <li >
                <a >Csapatunkról</a>
            </li>
            <li >
                <a >Galéria</a>
            </li>
            <li >
                <a href="https://ecset.cserkesz.hu/mcssz/682/naptar">ECSET Naptárunk</a>
            </li>
            </ul>
        </div>
        
    </nav>
    )
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



.navbar__links:hover{
    color: var(--regos);
    transform: translateX(10px);
    list-style: none;
    transition: all 200ms ease-in-out;
    opacity: 1;
}
.navbar__links::after{
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
.navbar__links:hover::after{
transform: scaleX(1);
transform-origin: left;
}

*/