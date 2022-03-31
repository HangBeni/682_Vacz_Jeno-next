import type { NextPage } from 'next'
import Camp from '../components/Gallery/Camp'
import Navbar from '../components/index/Navbar'
import Contacts from '../components/index/Contacts'
import Farsang from '../components/Gallery/Farsang'

const Gallery: NextPage = () => {
  return (
    <div>
      <Navbar/>
       <Camp/>
      <Contacts/>
    </div>
  )
}

export default Gallery