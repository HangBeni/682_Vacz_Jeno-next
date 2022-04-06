import Image from 'next/image';


type Image = {  
    id: number
    imageScr: string
    tags: string
  }

export default function Farsang({ images }: { images: Image[] }) {
  return (
    <div className="m-4">
      <div className="mt-4 grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-4">
        {images.map((image) => {
          return <CampImage key={image.id} image={image} />
        })}
      </div>
    </div>
  )
}

function CampImage({ image }: { image: Image }) {
  return image.tags.includes('Long') ? (
   <a href={image.imageScr}>
     <Image
      layout="fixed"
      width={240}
      height={400}
      src={image.imageScr}
      key={image.id}
      className="relative block max-h-80 max-w-full cursor-pointer rounded-md transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-md hover:shadow-black"
      />
    </a>
  ) : (
   <a href={image.imageScr}>
      <Image
        layout="fixed"
        width={400}
        height={300}
        src={image.imageScr}
        key={image.id}
        className="relative block max-h-80 max-w-full cursor-pointer rounded-md transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-md hover:shadow-black"
      />
    </a>
  )
}
