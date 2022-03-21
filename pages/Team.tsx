import type { NextPage } from 'next'
import Laws from '../components/Team/Laws'
import TeamMates from '../components/Team/TeamMates'
const Team: NextPage = () => {
  return (
    <div>
       <Laws/>
       <TeamMates/>
    </div>
  )
}

export default Team