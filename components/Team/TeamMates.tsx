import { motion} from "framer-motion";
import { useState } from "react";







function Mates() {
    const variants = {
        left: { opacity: 0, y: "-150%",x: "-150%", transition:{duration: 2}, height:0 },
        open: { opacity: 1, y: 0, x: 0, transition:{duration: 1}, height:"auto" },
        right: { opacity: 0, y: "-150%",x: "150%", transition:{duration: 2}, height:0},
    }
   
    const [direction, setDirection] = useState("left");
    const [sw, setsw] = useState(0);
    
    function handleChange(){
        
        
        if(direction=="open")
            {
                if(sw==0)
                {
                    setsw(1);
                    setDirection("left");
                }
                else if(sw==1)
               {    
                   setsw(0);
                   setDirection("right");
                
                }
            }
        else
             setDirection("open");

        
    }

    return (
            
            <div className="mb-24">
                <div className="flex w-4/5  mx-auto ">
                    <button onClick={() => (handleChange(), console.log(sw, direction))} className="relative inline-block h-auto bg-transparent 
                z-0 w-full mx-auto
                 mt-32 pb-6   
                 before:bg-gradient-to-b before:from-yellow-300 before:to-white">
                       <span 
                       className="relative inline-block text-lg lg:text-3xl font-bold uppercase 
                       top-0 left-0 w-full px-4 py-5 border-2 border-black 
                       md:rounded-full rounded-3xl tracking-widest">
                           Csapatunk tagjai
                        </span>
                    </button>
                </div>
                
                 <motion.div animate={direction} initial="left" variants={variants} >   
     
            
           
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(180px,1fr))] place-items-center gap-5 m-10" >

                <div className="mb-auto hover:opacity-100 opacity-70 transition-all duration-200 w-full">
                    <h2 className=" sm:text-2xl text-xl font-bold text-center">Vidra őrs</h2>            
                    <ul className="grid place-items-center gap-2">
                    <li className="team_mate">Hang Benjámin </li>
                    <li className="team_mate">Nyisztor Álmos</li>
                    <li className="team_mate">Merics Imre   </li>
                    <li className="team_mate">Bodó Bendegúz </li>
                    <li className="team_mate">Puxler Mátyás </li>
                    <li className="team_mate">Kernya Szilveszter</li>
                    <li className="team_mate">Bocz Botond  </li>
                    <li className="team_mate">Stolcz Norbi </li>
                    <li className="team_mate">Csimszi Ákos </li>
                </ul>
                </div>

                <div className="mb-auto hover:opacity-100 opacity-70 transition-all duration-200 w-full">
                    <h2 className="sm:text-2xl text-xl font-bold text-center" >Vörös róka őrs</h2>
                    <ul className="grid place-items-center gap-2">
                    <li className="team_mate">Őv: Piffkó Dániel </li>
                    <li className="team_mate">Friedrich Ákos    </li>
                    <li className="team_mate">Friedrich Gergő   </li>
                    <li className="team_mate">Siker András      </li>
                    <li className="team_mate">Siker Mihály      </li>
                    </ul>
                </div>


                <div  className="mb-auto hover:opacity-100 opacity-70 transition-all duration-200 w-full">
                    <h2 className="sm:text-2xl text-xl font-bold text-center" >Tigris őrs</h2>
                    <ul className="grid place-items-center gap-2">
                        <li className="team_mate">Dákai Botond </li>
                        <li className="team_mate">Gábor Dániel </li>
                        <li className="team_mate">Hajdú Kolos  </li>
                        <li className="team_mate">Kaáli-Nagy Koppány </li>
                        <li className="team_mate">Kozmáry Flórián</li>
                        <li className="team_mate">Meretei Soma </li>
                        <li className="team_mate">Szolga Milán </li>
                        <li className="team_mate">Tormási Csanád </li>
                    </ul>
                </div>

            </div> {/*Bois raj*/}
            
        <div  className="grid grid-cols-[repeat(auto-fit,_minmax(180px,1fr))] place-items-center gap-5 m-10">

            <div  className="mb-auto hover:opacity-100 opacity-70 transition-all duration-200 w-full">
                <h2 className="sm:text-2xl text-xl font-bold text-center" >Pisztácia őrs</h2>
                <ul className="grid place-items-center gap-2">
                <li className="team_mate">Kozmáry Kamilla  </li>
                <li className="team_mate">Nyisztor Zselyke </li>
                <li className="team_mate">Kaáli Nagy Villő Janka</li>
                <li className="team_mate">Bergauer Dorina  </li>
                <li className="team_mate">Fehér Rebeka </li>
                <li className="team_mate">Jánosi Emőke </li>
                <li className="team_mate">Piffkó Julianna </li>
                </ul>
            </div>

            <div className="mb-auto hover:opacity-100 opacity-70 transition-all duration-200 w-full">
                <h2 className="sm:text-2xl text-xl font-bold text-center" >Gránátalma őrs</h2>
                <ul className="grid place-items-center gap-2">
                    
                <li className="team_mate">Őv: Jánosi Kincső    </li>
                <li className="team_mate">Bodó Csenge Mária    </li>
                <li className="team_mate">Puxler Flóra         </li>
                <li className="team_mate">Reinhardt Júlia       </li>
                <li className="team_mate">Merics Orsolya Ilona </li>
                <li className="team_mate">Siker Katinka Kincső </li>
                <li className="team_mate">Asztalos Alexandra   </li>
                <li className="team_mate">Závoczky Eszter      </li>
                </ul>
            </div>

        </div> {/*Lány raj*/}
            
        <div  className="grid grid-cols-[repeat(auto-fit,_minmax(180px,1fr))] place-items-center gap-5 m-10">

            <div  className="mb-auto hover:opacity-100 opacity-70 transition-all duration-200 w-full">
                <h2 className="sm:text-2xl text-xl font-bold text-center" >Avokádó őrs</h2>
                <ul className="grid place-items-center gap-2">
                <li className="team_mate">Őv: Bergauer Dorina, Jánosi Emőke </li>
                <li className="team_mate">Bertus Kata </li>
                <li className="team_mate">Bodó Lilla</li>
                <li className="team_mate">Bojtos Lili  </li>
                <li className="team_mate">Mezei Csenge </li>
                <li className="team_mate">Piffkó Annamária</li>
                <li className="team_mate">Pölöte Rebeka   </li>
                <li className="team_mate">Szilágyi Boróka</li>
                </ul>
            </div>
            

        
            
            
            <div className="mb-auto hover:opacity-100 opacity-70 transition-all duration-200 w-full" >
                <h2 className="sm:text-2xl text-xl font-bold text-center" >Tavirózsa őrs</h2>
                <ul className="grid place-items-center gap-2">
                <li className="team_mate">Őv: Nyisztor Zselyke </li>
                <li className="team_mate">Ágotai Gréta </li>
                <li className="team_mate">Bodó Szederke</li>
                <li className="team_mate">Gábor Kata  </li>
                <li className="team_mate">Hajdú Tekla </li>
                <li className="team_mate">Jánosi Zengő</li>
                <li className="team_mate">Kis-Vidéki Bíborka   </li>
                <li className="team_mate">Schumann Réka</li>
                <li className="team_mate">Tóth Zsófia</li>
                </ul>
            </div>

            
                

           

        <div className="mb-auto hover:opacity-100 opacity-70 transition-all duration-200 w-full">
            <h2 className="sm:text-2xl text-xl font-bold text-center" >Levendula őrs</h2>
            <ul className="grid place-items-center gap-2">
                <li className="team_mate">Őv: Fehér Rebeka</li>
                <li className="team_mate">Bizse Kincső</li>
                <li className="team_mate">Bodó Cinka</li>
                <li className="team_mate">Csényi Frida</li>
                <li className="team_mate">Fábos Eszter</li>
                <li className="team_mate">Herner Borbála</li>
                <li className="team_mate">Hoffer Ida</li>
                <li className="team_mate">Oláh Emese</li>
                <li className="team_mate">Schell Noémi</li>
                <li className="team_mate">Vasvári Lilla</li>
            </ul>
        </div>




        <div className="mb-auto hover:opacity-100 opacity-70 transition-all duration-200 w-full">
        <h2 className="sm:text-2xl text-xl font-bold text-center" >Hiúz őrs</h2>
        <ul className="grid place-items-center gap-2">
        <li className="team_mate">Őv: Merics Orsolya, Reinhardt Júlia</li>
        <li className="team_mate">Auth Bálint</li>
        <li className="team_mate">Latschám Botond</li>
        <li className="team_mate">Luzsi Mátyás</li>
        <li className="team_mate">Neukirchner András Noel</li>
        <li className="team_mate">Szőts Márton Soma</li>
        <li className="team_mate">Tisztl Milán</li>
        <li className="team_mate">Vasvári Gyula</li>
        </ul>
        </div>
        
        <div className="mb-auto hover:opacity-100 opacity-70 transition-all duration-200 w-full" >
                <h2 className="sm:text-2xl text-xl font-bold text-center" >Csíkos szöcskeegér őrs</h2>
                <ul className="grid place-items-center gap-2">
                <li className="team_mate">Őv: Merics Imre, Bodó Bendegúz   </li>
                <li className="team_mate">Gyurasics János    </li>
                <li className="team_mate">Grünfeld Bence    </li>
                <li className="team_mate">Jánosi Örs László </li>
                <li className="team_mate">Lieber Csongor    </li>
                <li className="team_mate">Lieber Soma    </li>
                <li className="team_mate">Nyisztor Csanád   </li>    
                <li className="team_mate">Oszterták Balázs  </li>
                <li className="team_mate">Oszterák Marcell  </li>
                <li className="team_mate">Vicze Nimród      </li>
                <li className="team_mate">Baráti Zénó</li>
                <li className="team_mate">Bertus Benedek</li>
                <li className="team_mate">Bertus Botond</li>
                <li className="team_mate">Szigeti Botond</li>
            </ul>
            </div>

        </div>      {/*Kiscseró raj*/}
        
        </motion.div>
        </div>
    );
}

export default Mates;