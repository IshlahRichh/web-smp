import BiayaArea from "./BiayaArea"
import BreadCrumb from "./BreadCrumb"
// import BannerForm from "./BannerForm"
import Header from "../../layouts/headers/Header"
import Footer from "../../layouts/footers/Footer"

const BiayaPendaftaran = () => {
   return (
      <>
         <Header />
         <main>
            <BreadCrumb />
            {/* <BannerForm /> */}
            <BiayaArea />
         </main>
         <Footer />
      </>
   )
}

export default BiayaPendaftaran
