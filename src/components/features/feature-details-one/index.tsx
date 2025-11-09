import Breadcrumb from "./Breadcrumb"
import AboutUsArea from "./AboutUsArea"
import FeatureAboutArea from "./FeatureAboutArea"
import Header from "../../../layouts/headers/Header"
import Footer from "../../../layouts/footers/Footer"

const AboutUs = () => {
   return (
      <>
         <Header />
         <main>
            <Breadcrumb />
            <AboutUsArea />
            <FeatureAboutArea />
         </main>
         <Footer />
      </>
   )
}

export default AboutUs
