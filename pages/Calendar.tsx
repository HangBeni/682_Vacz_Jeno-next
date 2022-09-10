import EventList from "../components/Calendar/EventList";
import supabase from "../utils/supabase";
import {Event} from "../utils/Types"
function Calendar({events}: {events: Event[]}) {
    return ( 
        <div>
            <EventList events={events}></EventList>
        </div>
     );
}



export async function getServerSideProps() {
    const {data:events} = await supabase.from('Event').select('*').order('id')
    return {
      props: {
        events
      },
    }
    }

export default Calendar;