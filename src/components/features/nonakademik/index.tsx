import FeatureArea from "./FeatureArea"
import Breadcrumb from "./BreadCrumb"
import Header from "../../../layouts/headers/Header"
import Footer from "../../../layouts/footers/Footer"

const NonAkademik = () => {
   return (
      <>
         <Header />
         <main>
            <Breadcrumb />
            <FeatureArea />
         </main>
         <Footer />
      </>
   )
}

export default NonAkademik
