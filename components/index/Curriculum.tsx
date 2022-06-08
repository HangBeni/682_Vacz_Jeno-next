import Link  from "next/link";

function Curriculum() {
    return ( 
        <div>
            <div>
                <Link href="Curriculum/Csomozas">
                <a>Csomozás</a>
                </Link>

                <Link  href='Curriculum/Terkepeszet'>
                <a>Térképészet</a>
                </Link>

                <Link href='Curriculum/Magyarsag'>
                <a>Magyarság Ismeretek</a>
                </Link>

                <Link  href='Curriculum/Cserkeszismeretek'>
                   <a>Cserkész Ismeretek</a>
                </Link>
            </div>
        </div>
     );
}

export default Curriculum;