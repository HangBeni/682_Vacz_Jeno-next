import { useState } from 'react'
import Image from 'next/future/image'
import BackTo from './BackTo'

type Image = {
  id: number
  imageScr: string
  tags: string
}

function Template({ images }: { images: Image[] }) {
  const [tempimg, setimg] = useState('')
  const [modal, setModal] = useState(false)

  return (
    <>
      <div
        className={
          modal
            ? 'fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black '
            : 'hidden'
        }
      >
        <img
          id="zoom"
          src={tempimg}
          className="mx-auto box-border block h-auto max-h-full w-auto max-w-full p-3"
        />

        <span
          className="fixed top-5 right-5 h-8 w-8 cursor-pointer p-1 text-5xl text-white"
          onClick={() => (setModal(false), setimg(''))}
        >
          &times;
        </span>
      </div>

      <div>
        <BackTo></BackTo>

        <div className="mt-4 mx-2 grid grid-cols-[repeat(auto-fit,_minmax(380px,1fr))] place-items-center gap-2">
          {images?.map((image: any) => {
            if (image.imageScr.includes('long'))
              return (
                <Image
                  width={400}
                  height={200}
                  quality={100}
                  src={image.imageScr}
                  key={image.id}
                  title={image.tags}
                  alt={image.tags}
                  loading={'eager'}
                  className="relative block h-full max-h-full max-w-full cursor-pointer rounded-md transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-md hover:shadow-black"
                  onClick={() => (setimg(image.imageScr), setModal(true))}
                />
              )
          })}
        </div>

        <div className="mt-4 mx-3 grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-4 place-items-center">
          {images?.map((image) => {
            if (!image.imageScr.includes('long'))
              return (
                <Image
                  width={450}
                  height={300}
                  quality={80}
                  src={image.imageScr}
                  key={image.id}
                  title={image.tags}
                  alt={image.tags}
                  className="block max-h-full max-w-full cursor-pointer rounded-md transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-md hover:shadow-black"
                  onClick={() => (setimg(image.imageScr), setModal(true))}
                />
              )
          })}
        </div>
      </div>
    </>
  )
}

export default Template
