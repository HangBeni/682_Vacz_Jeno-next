import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";







function Mates() {
    const variants = {
        left: { opacity: 0, y: "-150%", x: "-150%", transition: { duration: 2, delayChildren: 2 } },
        open: { opacity: 1, y: 0, x: 0, transition: { duration: 2 } },
        right: { opacity: 0, y: "-150%", x: "150%", transition: { duration: 2, delayChildren: 2 } },
    }

    const [direction, setDirection] = useState("left");
    const [sw, setsw] = useState(0);

    const x = useMotionValue(0);
    const background = useTransform(
        x,
        [-200, 0, 100],
        ["hsl(133, 74.2%, 32%)", "#ffff", "hsl(4, 87.3%, 30.8%)"]
    )
    function handleChange() {

        if (direction != "open") {
            setDirection("open");
        }
        else {
            if (sw == 0) {
                setsw(1);
                setDirection("right");
            }
            else {
                setsw(0);
                setDirection("left");

            }
        }
    }



    return (
        <div className="mb-24">
            <div

                className="flex w-4/5  mx-auto ">
                <motion.button
                    style={{ background }}
                    onClick={() => handleChange()}
                    className="relative inline-block h-auto bg-transparent 
                z-0 w-full mx-auto  justify-content-center
                 mt-32  border-2 border-black md:rounded-full rounded-3xl">
                    <motion.span
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        style={{ x }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="relative inline-block text-lg lg:text-3xl font-bold uppercase 
                        w-full px-4 py-5 tracking-widest ">
                        Csapatunk tagjai
                    </motion.span>
                </motion.button>
            </div>

            <motion.div animate={direction} initial="left" variants={variants} >


                <motion.li transition={direction == "left" || direction == "right" ? { delay: 1 } : { delay: 0.5 }} animate={direction == "left" || direction == "right" ? { display: "none" } : { display: "block" }} initial="grid">
                    <div className="grid grid-cols-[repeat(auto-fit,_minmax(180px,1fr))] place-items-center gap-5 m-10" >

                        <div className="mb-auto hover:opacity-100 opacity-70 transition-all duration-200 w-full">
                            <h2 className=" sm:text-2xl text-xl font-bold text-center">Vidra ??rs</h2>
                            <ul className="grid place-items-center gap-2">
                                <li className="team_mate">Hang Benj??min </li>
                                <li className="team_mate">Nyisztor ??lmos</li>
                                <li className="team_mate">Merics Imre   </li>
                                <li className="team_mate">Bod?? Bendeg??z </li>
                                <li className="team_mate">Puxler M??ty??s </li>
                                <li className="team_mate">Kernya Szilveszter</li>
                                <li className="team_mate">Bocz Botond  </li>
                                <li className="team_mate">Stolcz Norbi </li>
                                <li className="team_mate">Csimszi ??kos </li>
                            </ul>
                        </div>

                        <div className="mb-auto hover:opacity-100 opacity-70 transition-all duration-200 w-full">
                            <h2 className="sm:text-2xl text-xl font-bold text-center" >V??r??s r??ka ??rs</h2>
                            <ul className="grid place-items-center gap-2">
                                <li className="team_mate">??v: Piffk?? D??niel </li>
                                <li className="team_mate">Friedrich ??kos    </li>
                                <li className="team_mate">Friedrich Gerg??   </li>
                                <li className="team_mate">Siker Andr??s      </li>
                                <li className="team_mate">Siker Mih??ly      </li>
                            </ul>
                        </div>


                        <div className="mb-auto hover:opacity-100 opacity-70 transition-all duration-200 w-full">
                            <h2 className="sm:text-2xl text-xl font-bold text-center" >Tigris ??rs</h2>
                            <ul className="grid place-items-center gap-2">
                                <li className="team_mate">D??kai Botond </li>
                                <li className="team_mate">G??bor D??niel </li>
                                <li className="team_mate">Hajd?? Kolos  </li>
                                <li className="team_mate">Ka??li-Nagy Kopp??ny </li>
                                <li className="team_mate">Kozm??ry Fl??ri??n</li>
                                <li className="team_mate">Meretei Soma </li>
                                <li className="team_mate">Szolga Mil??n </li>
                                <li className="team_mate">Torm??si Csan??d </li>
                            </ul>
                        </div>

                    </div> {/*Bois raj*/}

                    <div className="grid grid-cols-[repeat(auto-fit,_minmax(180px,1fr))] place-items-center gap-5 m-10">

                        <div className="mb-auto hover:opacity-100 opacity-70 transition-all duration-200 w-full">
                            <h2 className="sm:text-2xl text-xl font-bold text-center" >Piszt??cia ??rs</h2>
                            <ul className="grid place-items-center gap-2">
                                <li className="team_mate">Kozm??ry Kamilla  </li>
                                <li className="team_mate">Nyisztor Zselyke </li>
                                <li className="team_mate">Ka??li Nagy Vill?? Janka</li>
                                <li className="team_mate">Bergauer Dorina  </li>
                                <li className="team_mate">Feh??r Rebeka </li>
                                <li className="team_mate">J??nosi Em??ke </li>
                                <li className="team_mate">Piffk?? Julianna </li>
                            </ul>
                        </div>

                        <div className="mb-auto hover:opacity-100 opacity-70 transition-all duration-200 w-full">
                            <h2 className="sm:text-2xl text-xl font-bold text-center" >Gr??n??talma ??rs</h2>
                            <ul className="grid place-items-center gap-2">

                                <li className="team_mate">??v: J??nosi Kincs??    </li>
                                <li className="team_mate">Bod?? Csenge M??ria    </li>
                                <li className="team_mate">Puxler Fl??ra         </li>
                                <li className="team_mate">Reinhardt J??lia       </li>
                                <li className="team_mate">Merics Orsolya Ilona </li>
                                <li className="team_mate">Siker Katinka Kincs?? </li>
                                <li className="team_mate">Asztalos Alexandra   </li>
                                <li className="team_mate">Z??voczky Eszter      </li>
                            </ul>
                        </div>

                    </div> {/*L??ny raj*/}

                    <div className="grid grid-cols-[repeat(auto-fit,_minmax(180px,1fr))] place-items-center gap-5 m-10">

                        <div className="mb-auto hover:opacity-100 opacity-70 transition-all duration-200 w-full">
                            <h2 className="sm:text-2xl text-xl font-bold text-center" >Avok??d?? ??rs</h2>
                            <ul className="grid place-items-center gap-2">
                                <li className="team_mate">??v: Bergauer Dorina, J??nosi Em??ke </li>
                                <li className="team_mate">Bertus Kata </li>
                                <li className="team_mate">Bod?? Lilla</li>
                                <li className="team_mate">Bojtos Lili  </li>
                                <li className="team_mate">Mezei Csenge </li>
                                <li className="team_mate">Piffk?? Annam??ria</li>
                                <li className="team_mate">P??l??te Rebeka   </li>
                                <li className="team_mate">Szil??gyi Bor??ka</li>
                            </ul>
                        </div>





                        <div className="mb-auto hover:opacity-100 opacity-70 transition-all duration-200 w-full" >
                            <h2 className="sm:text-2xl text-xl font-bold text-center" >Tavir??zsa ??rs</h2>
                            <ul className="grid place-items-center gap-2">
                                <li className="team_mate">??v: Nyisztor Zselyke </li>
                                <li className="team_mate">??gotai Gr??ta </li>
                                <li className="team_mate">Bod?? Szederke</li>
                                <li className="team_mate">G??bor Kata  </li>
                                <li className="team_mate">Hajd?? Tekla </li>
                                <li className="team_mate">J??nosi Zeng??</li>
                                <li className="team_mate">Kis-Vid??ki B??borka   </li>
                                <li className="team_mate">Schumann R??ka</li>
                                <li className="team_mate">T??th Zs??fia</li>
                            </ul>
                        </div>






                        <div className="mb-auto hover:opacity-100 opacity-70 transition-all duration-200 w-full">
                            <h2 className="sm:text-2xl text-xl font-bold text-center" >Levendula ??rs</h2>
                            <ul className="grid place-items-center gap-2">
                                <li className="team_mate">??v: Feh??r Rebeka</li>
                                <li className="team_mate">Bizse Kincs??</li>
                                <li className="team_mate">Bod?? Cinka</li>
                                <li className="team_mate">Cs??nyi Frida</li>
                                <li className="team_mate">F??bos Eszter</li>
                                <li className="team_mate">Herner Borb??la</li>
                                <li className="team_mate">Hoffer Ida</li>
                                <li className="team_mate">Ol??h Emese</li>
                                <li className="team_mate">Schell No??mi</li>
                                <li className="team_mate">Vasv??ri Lilla</li>
                            </ul>
                        </div>




                        <div className="mb-auto hover:opacity-100 opacity-70 transition-all duration-200 w-full">
                            <h2 className="sm:text-2xl text-xl font-bold text-center" >Hi??z ??rs</h2>
                            <ul className="grid place-items-center gap-2">
                                <li className="team_mate">??v: Merics Orsolya, Reinhardt J??lia</li>
                                <li className="team_mate">Auth B??lint</li>
                                <li className="team_mate">Latsch??m Botond</li>
                                <li className="team_mate">Luzsi M??ty??s</li>
                                <li className="team_mate">Neukirchner Andr??s Noel</li>
                                <li className="team_mate">Sz??ts M??rton Soma</li>
                                <li className="team_mate">Tisztl Mil??n</li>
                                <li className="team_mate">Vasv??ri Gyula</li>
                            </ul>
                        </div>

                        <div className="mb-auto hover:opacity-100 opacity-70 transition-all duration-200 w-full" >
                            <h2 className="sm:text-2xl text-xl font-bold text-center" >Cs??kos sz??cskeeg??r ??rs</h2>
                            <ul className="grid place-items-center gap-2">
                                <li className="team_mate">??v: Merics Imre, Bod?? Bendeg??z   </li>
                                <li className="team_mate">Gyurasics J??nos    </li>
                                <li className="team_mate">Gr??nfeld Bence    </li>
                                <li className="team_mate">J??nosi ??rs L??szl?? </li>
                                <li className="team_mate">Lieber Csongor    </li>
                                <li className="team_mate">Lieber Soma    </li>
                                <li className="team_mate">Nyisztor Csan??d   </li>
                                <li className="team_mate">Osztert??k Bal??zs  </li>
                                <li className="team_mate">Oszter??k Marcell  </li>
                                <li className="team_mate">Vicze Nimr??d      </li>
                                <li className="team_mate">Bar??ti Z??n??</li>
                                <li className="team_mate">Bertus Benedek</li>
                                <li className="team_mate">Bertus Botond</li>
                                <li className="team_mate">Szigeti Botond</li>
                            </ul>
                        </div>

                    </div>      {/*Kiscser?? raj*/}
                </motion.li>
            </motion.div>

        </div>
    );
}

export default Mates;