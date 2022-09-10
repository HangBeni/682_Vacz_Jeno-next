import {Event} from "../../utils/Types"
import Image from "next/future/image";
function EventList({events}: {events: Event[]}) {
    return ( 
        <div>
            {events.map((event) => {
                return(
                    <div>
                        <Image
                        src={event.Img}
                        width={300}
                        height={250}
                        />
                        <h2>{event.ProgramNeve}</h2>
                        <p>{event.Részletek}</p>
                        <p>{event.Program_Kezdete.toString()} {event.Program_Vege.toString()}</p>
                        <button>{event.Tetszikelések}</button>
                    </div>
                )
            })}
        </div>
     );
}

export default EventList;