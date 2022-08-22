import { Poem } from "../../../pages/Curriculum/Magyarsag";

function Poems({poems}:{poems: Poem[]}) {
   console.log(poems)
    return ( 
        <div>
            <h1>Magyar Irodalom</h1>
            
            <div>
                {poems.map((poem) => {
                    return (
                        <div>
                            <h2>{poem.Name}</h2>
                            <p>{poem.Reszlet}</p>
                            <p><em>{poem.Topics}</em></p>
                            <p><a href={poem.Link} className='hover:text-trendy_green'>A teljes művet itt találhatjátok</a></p>
                        </div>
                    )
                })}
            </div>
        </div>
     );
}

  
export default Poems;