import type { NextPage } from 'next'
import Navbar from '../components/index/Navbar'
import Contacts from '../components/index/Contacts'
import GalleryLoadUp from '../components/Gallery/GallerysLoadUp'
const Gallery: NextPage = () => {
  return (
    <div>
      <Navbar/>
       <GalleryLoadUp/>
      <Contacts/>
    </div>
  )
}

export default Gallery