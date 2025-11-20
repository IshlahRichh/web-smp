import FaqArea from "./FaqArea"
import Cta from "../pricing/Cta"
import Header from "../../../layouts/headers/Header"
import BreadCrumb from "../../common/BreadCrumb"
import FooterThree from "../../../layouts/footers/FooterThree"

const Faq = () => {
   return (
      <>
         <Header />
         <main>
            <BreadCrumb title="Frequently Asked Question" sub_title="Faq’s" />
            <FaqArea />
            <Cta />
         </main>
         <FooterThree />
      </>
   )
}

export default Faq
