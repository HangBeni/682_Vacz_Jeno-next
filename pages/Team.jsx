import Contacts from '../components/index/Contacts'
import Laws from '../components/Team/Laws'
import TeamMates from '../components/Team/TeamMates'
import Navbar from '../components/index/Navbar'
const Team = () => {
  return (
    <div>
        <Navbar/>
          <Laws/>
          <TeamMates/>
       <Contacts/>
    </div>
  )
}

export default Team