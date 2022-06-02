import Contacts from '../components/index/Contacts'
import Laws from '../components/Team/Laws'
import TeamMates from '../components/Team/TeamMates'
import Navbar from '../components/index/Navbar'
import Head from 'next/head'
const Team = () => {
  return (
    <div className='block justify-center'>
    <Head>
        <title>682 Vácz Jenő</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </Head>
        <Navbar/>
          <Laws/>
          <TeamMates/>
       <Contacts/>
    </div>
  )
}

export default Team