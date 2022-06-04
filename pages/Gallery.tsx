import Navbar from "../components/index/Navbar"
import Footer from '../components/index/Contacts'
import Head from "next/head"
import Menu from "../components/Gallery/Menu";




 function Gallery() {
  
  return(
 <>
 <Head>
    <title>682 Vácz Jenő</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
  </Head>
 <Navbar></Navbar>
 <Menu></Menu>
 <Footer></Footer>
 </> 
 );
}




export default Gallery