import supabase from "../utils/supabase";

function Calendar() {
    return ( 
        <div>
            
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