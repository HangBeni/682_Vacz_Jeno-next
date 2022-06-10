import supabase from "../../utils/supabase";

type Curriculum = {
    id: number
    type: string
    content: string
}



function Theme({theme}: {theme: Curriculum[]}) {
    return ( 
        <div>

        </div>
     );
}

export default Theme;



export async function getServerSideProps(context:any) {
    const {params} = context
    const {theme} = params
    console.log(theme);
const {data} = await supabase.from(theme).select('*').order('id')

return {
  props: {
    data:theme
  },
}
}