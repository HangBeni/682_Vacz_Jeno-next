import { Head } from "next/document";
import Navbar from "../../components/index/Navbar";
import Footer from '../../components/index/Contacts'
import CurriculumNav from "../../components/Curriculum/Curriculum";

function Curriculum() {
    return ( 
        <>
        <Head>
           <title>682 Vácz Jenő</title>
           <meta name="viewport" content="width=device-width, initial-scale=1"/>
         </Head>
        <Navbar></Navbar>
        <CurriculumNav></CurriculumNav>
        <Footer></Footer>
        </> 
     );
}

export default Curriculum;