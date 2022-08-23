import { Poem } from '../../../pages/Curriculum/Magyarsag'

function Poems({ poems }: { poems: Poem[] }) {
  
  return (
    <div className="text-font">
      <h1 className="mb-3 w-full text-center text-3xl font-black uppercase tracking-widest">
        Magyar Irodalom
      </h1>

      <div className="mx-5 grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-5">
        {poems.map((poem) => {
          return (
            <div className="text-lg font-semibold">
              <h2 className="text-2xl font-extrabold">{poem.Name}</h2>
              <p className="text-justify">
                <em>{poem.Reszlet}</em>
              </p>
              
              <p className="p-0.5 m-2 hover:outline [@media(hover:none)]:outline w-fit rounded-xl">
              {poem.Topics.split(',').map((topic) => {
                    return(<span className='p-1 hover:underline decoration-slice decoration-2 decoration-regos duration-300'><em>{topic} </em></span>)
              })}
                
              </p>

              <p
                className="w-fit rounded-xl p-1 text-xl font-bold outline
                duration-300 hover:bg-black hover:text-trendy_green [@media(hover:none)]:bg-black [@media(hover:none)]:text-trendy_green     "
              >
                <a href={poem.Link}>A teljes művet itt találhatjátok</a>
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Poems
