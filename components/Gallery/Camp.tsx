import Image from 'next/image'
  
  type Image = {  
    id: number
    imageScr: string
    tags: string
  }
 
 


export default function Camp({ camp }: { camp: Image[] }) {
  
  console.log(camp);
  return (
    <div className="m-4">
      <div className="mt-4 grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-4">
        {camp?.map((image) => {
          return <CampImage key={image.id} camp2={image} />
        })}
      </div>
    </div>
  )
}

function CampImage({ camp2 }: { camp2: Image }) {
  return camp2.tags.includes('Long') ? (
   <a href={camp2.imageScr}>
     <Image
      layout="fixed"
      width={240}
      height={400}
      quality={100}
      src={camp2.imageScr}
      key={camp2.id}
      className="relative block max-h-80 max-w-full cursor-pointer rounded-md transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-md hover:shadow-black"
      />
    </a>
  ) : (
   <a href={camp2.imageScr}>
      <Image
        layout="fixed"
        width={400}
        height={300}
        quality={100}
        src={camp2.imageScr}
        key={camp2.id}
        className="relative block max-h-80 max-w-full cursor-pointer rounded-md transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-md hover:shadow-black"
      />
    </a>
  )
}