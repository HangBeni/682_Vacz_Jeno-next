import Image from 'next/image'
import { image } from '../../utils/Types';

function About({data}:{data:image[]}) {  
    return ( 
        <>
       
    <div role={'main'} className="inline-block text-font bg-bg dark:bg-bg_dark dark:text-font_dark">

        <div className="w-full mx-auto text-justify items-center text-xl">
            <p className="m-4 px-4"> A 682. számú Váczi Jenő cserkész csapat hivatalosan 2020. októberében alakult meg
            Hosszúhetényben. Valójában viszont már 2011 óta folyik cserkész munka a faluban.
            Kezdetben a 673. sz. Pius és a 47. sz. Szent László cserkész csapat őrsvezetői foglalkoztak a helyi
            gyerekekkel. Majd a 47-es csapat hetényi rajába tartoztak a későbbi csapat tagjai.
            </p>

            <p className="m-4 px-4">
            Az alakulásakor csapatunk névadójának Vácz Jenőt választottuk, aki egy jezsuita atya volt.
            Sok évet szolgált Püspökszentlászlón, az Életrendezés Házának létrehozása az ő nevéhez
            fűződik. Csapatunkból egy öreg cserkész ismerte az atyát személyesen. Vácz Jenő olyan
            ember volt, akihez  közel állt a Jóisten és az embertársai is. Számunkra példa, az ő közbenjárását
            kérjük a csapatért és tagjaiért.
            </p>

            <p className="m-4 px-4">
            A csapatszámnak szintén fontos jelentése van számunkra. A 682-es számot azért választottuk,
            mert ez megegyezik a falu közelében található Zengő hegy magasságával.
            Csapatunknak jelenleg körülbelül 80 aktív tagja van. Első osztályos gyerekektől kezdve az
            egyetemistákig. Emellett számos helyi öreg cserkész is támogat bennünket.
            A gyerekeknek az őrsvezetők hetente tartanak foglalkozásokat. Emellett évközben számos
            programunk van: kirándulások, portyák, csapat karácsony, farsang, nyáron pedig nomád
            tábort tartunk.
            </p>
            <div className='grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] w-[90%] mx-auto gap-2 place-items-center'>
            {
                data?.map((image) => {
                    if(image?.tags?.includes('Csapatunk nyáritáborában'))
                    {
                            return(
                        <Image
                            width={500}
                            height={275}
                            quality={90}
                            src={image.imageSrc}
                            key={image.id}
                            title={image.tags}
                            alt={image.tags}
                            className="rounded-lg"/>
                        )
                    }
                })
            }
            </div>
            <p className="m-4 px-4">
            Alapvető értékeink a kereszténység, a hazaszeretet, természet szeretet. A közösségben és a
            természetben megtapasztalhatjuk a Jóisten irántunk való szeretetét és az ebből fakadó örömet.
            Ezt szeretnénk megosztani a helyi gyerekekkel és fiatalokkal. Hiszen a cserkészet
            alapítójának, Bi-Pi-nek a szavaival élve: <strong> "Hiszem, hogy Isten azért helyezett bennünket ebbe
            a világba, hogy boldogok legyünk és örüljünk az életnek." </strong>
            </p>

        </div>  
    
    </div> 
    </>
    );
}

export default About;