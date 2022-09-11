import {Event} from "../../utils/Types"
import Image from "next/future/image";
function EventList({events}: {events: Event[]}) {
    return ( 
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(450px,1fr))] place-items-center
                        mt-10 text-font">
            {events.map((event) => {
                return(
                    <div className="w-[35ch] rounded-lg m-5 border-türkisz border-solid border-2">
                        <Image
                        src={event.Img}
                        width={300}
                        height={250}
                        className='rounded-lg'
                        />
                        <div className="p-5 bg-[#44de444d]">
                            <h2 className="after:absolute after:h-[3px] after:left-0 after:bottom-[-2px] after:w-full after:bg-türkisz
                                            relative text-2xl">{event.ProgramNeve}</h2>
                            <p className="text-lg leading-7 mt-2">{event.Részletek}</p>
                            <p className="font-bold">{event.Program_Kezdete.toString()} <strong>-</strong> {event.Program_Vege.toString()}</p>
                        </div>
                    </div>
                )
            })}
        </div>
     );
}

export default EventList;