export default function Contacts() {
    return(
    <footer className="h-full">
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css'/>
        <div
        className="grid grid-cols-2 sm:grid-cols-3 place-items-center 
         transition-all mt-10 text-base lg:text-lg gap-3 sm:gap-0">
            <p className="text-center col-span-2 sm:col-span-1 p-2">Nyisztor Sarolta csph. <br/> +36 30 276 8427 nyisztorsari@gmail.com</p>
            <p className="text-center col-span-2 sm:col-span-1 p-2">A 682 Vácz Jenő cserkészcsapat a Magyar Cserkészszövetség tagja <i> www.cserkesz.hu</i></p>
            <p className="text-center col-span-2 sm:col-span-1">Nyisztor Zsolt csp. <br/>+36 30 820 5693 nyisztorzsolt77@gmail.com</p>
            <p className="text-center col-span-2 sm:col-span-3">Created by: Hang Benjámin</p>
        </div>

        <div className="bg-black w-full h-full p-4">
            <div className="flex justify-between w-full md:w-1/2 mx-auto">
                <a href="https://www.facebook.com/682-V%C3%A1cz-Jen%C5%91-cserk%C3%A9sz-csapat-108332291535654" className="icon facebook m-auto">
            <span><i className="fab fa-facebook-f  bg-white p-5 rounded-full m-5 sm:m-2 text-2xl"></i></span>
                </a>
                <a href="https://www.cserkesz.hu" className="block">
                    <span><img src="https://viiudujcvsyrgxwatpxm.supabase.co/storage/v1/object/public/images/liliom_D3k2o81c_.jpg" 
                    className="bg-white rounded-full m-2 w-28"></img></span>
                </a>
                <a href="https://www.instagram.com/682.sz.vaczjeno" className="icon instagram m-auto">
                    <span><i className="fab fa-instagram bg-white p-5 rounded-full m-5 sm:m-2 text-2xl"></i></span>
                </a>
                
            </div>
        </div>
    </footer>
    );
}
