import EventList from "../components/Calendar/EventList";
import supabase from "../utils/supabase";
import {Event} from "../utils/Types"
function Calendar({events}: {events: Event[]}) {
    return ( 
        <>
            <EventList events={events}></EventList>
        </>
     );
}

function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}

function formatDate(date: Date) {
  return (
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-')
    )
  }

export async function getServerSideProps() {
  const now = new Date();
  
    const {data:events} = await supabase.from('Event').select('*').gte('Program_Kezdete',formatDate(now)).order('Program_Kezdete')
    console.log(formatDate(now))
    return {
      props: {
        events
      },
    }
    }

export default Calendar;