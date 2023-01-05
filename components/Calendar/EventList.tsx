import {Event} from "../../utils/Types"
import Image from "next/image";

function EventList({events}: {events: Event[]}) {
    return ( 
        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,_minmax(440px,1.5fr))] gap-2 mt-10 mx-3 text-font place-items-center">
            { events?.map((event) => {
                return(
                    <div className="lg:flex lg:flex-wrap rounded-2xl m-2 w-8/12 md:w-3/4  sm:w-full border-türkisz border-solid border-2 bg-[#00ec004d]"
                    key={event.ProgramNeve}>
                        
                        <div className="relative w-full h-20 lg:h-30">

                            <Image
                            alt="Illusztráció a programról"
                            src={event.Img}
                            sizes="100vw" fill
                            quality={95}
                            className='relative rounded-xl w-full object-cover '
                            />

                        </div>
                        <div className="p-3">
                            <h2 className="after:absolute after:h-[3px] after:left-0 after:bottom-[-2px] after:w-full after:bg-türkisz after:scale-x-0 after:origin-left hover:after:scale-x-100 after:duration-300
                                            [@media(hover:none)]:after:scale-x-100
                                            relative text-2xl lg:text-3xl">{event.ProgramNeve}</h2>
                            <p className="text-lg lg:text-xl leading-7 mt-2">{event.Részletek}</p>
                            <p className="text-xl lg:text-2xl font-bold">Kezdete: <span className="relative after:absolute after:h-[3px] after:left-0 after:bottom-[-2px] after:w-full after:bg-regos after:scale-x-0 after:origin-left hover:after:scale-x-100 after:duration-300 [@media(hover:none)]:after:scale-x-100">{event.Program_Kezdete.toString()}</span></p>
                            {
                            event.Program_Vege == null? null : <p className="text-xl lg:text-2xl font-bold">Vége: <span className="relative after:absolute after:h-[3px] after:left-0 after:bottom-[-2px] after:w-full after:bg-regos after:scale-x-0 after:origin-left hover:after:scale-x-100 after:duration-300 [@media(hover:none)]:after:scale-x-100">{event.Program_Vege.toString()}</span></p>
                        }
                            </div>
                    </div>
                )
            })}
        </div>
     );
}



export default EventList;