import Footer from "../../layouts/footers/Footer"
import Header from "../../layouts/headers/Header"
import BreadCrumb from "../common/BreadCrumb"
import ContactArea from "./ContactArea"

const Contact = () => {
   return (
      <>
         <Header />
         <main>
            <BreadCrumb title="Contact With Us" sub_title="Contact" />
            <ContactArea />
         </main>
         <Footer />
      </>
   )
}

export default Contact
