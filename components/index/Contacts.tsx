export default function Contacts() {
    return(
    <footer>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css'/>
        <div
        className="grid grid-cols-2 sm:grid-cols-3 place-items-center 
         transition-all mt-10 text-base lg:text-lg gap-3 sm:gap-0">
            <p className="text-center col-span-2 sm:col-span-1 p-2">Nyisztor Sarolta csph. <br/> +36 30 276 8427 nyisztorsari@gmail.com</p>
            <p className="text-center col-span-2 sm:col-span-1 p-2">A 682 Vácz Jenő cserkészcsapat a Magyar Cserkészszövetség tagja <i> www.cserkesz.hu</i></p>
            <p className="text-center col-span-2 sm:col-span-1">Nyisztor Zsolt csp. <br/>+36 30 820 5693 nyisztorzsolt77@gmail.com</p>
            <p className="text-center col-span-2 sm:col-span-3">Created by: Hang Benjámin</p>
        </div>

        <div className="sticky bottom-0 bg-black w-full h-full">
            <div className="flex justify-between w-full md:w-1/2 mx-auto">
                <a href="https://www.facebook.com/682-V%C3%A1cz-Jen%C5%91-cserk%C3%A9sz-csapat-108332291535654" className="icon facebook">
            <span><i className="fab fa-facebook-f  bg-white p-5 rounded-full m-5 sm:m-2 text-2xl"></i></span>
                </a>
                <a href="https://www.cserkesz.hu" className="block">
                    <span><img src="https://ik.imagekit.io/HangBeni/Tabor/liliom_D3k2o81c_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649005932775" 
                    className="bg-white rounded-full m-2 w-28"></img></span>
                </a>
                <a href="https://www.instagram.com/682.sz.vaczjeno" className="icon instagram ">
                    <span><i className="fab fa-instagram bg-white p-5 rounded-full m-5 sm:m-2 text-2xl"></i></span>
                </a>
                
            </div>
        </div>
    </footer>
    );
}
