import Footer from "../../../layouts/footers/Footer"
import Header from "../../../layouts/headers/Header"
import BreadCrumb from "./BreadCrumb"
import AboutArea from "./AboutArea"
import Galery from "./Galery"
// import Choose from "./Choose"
// import Cta from "./Cta"

const About = () => {
   return (
      <>
         <Header />
         <main>
            <BreadCrumb />
            <AboutArea />
            {/* <Choose /> */}
            {/* <Cta /> */}
            <Galery />
         </main>
         <Footer />
      </>
   )
}

export default About
