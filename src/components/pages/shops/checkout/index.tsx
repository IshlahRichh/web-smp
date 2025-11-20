import FooterSix from "../../../../layouts/footers/FooterSix"
import Header from "../../../../layouts/headers/Header"
import BreadCrumb from "../../../common/BreadCrumb"
import CheckoutArea from "./CheckoutArea"

const Checkout = () => {
   return (
      <>
         <Header />
         <main>
            <BreadCrumb title="Checkout Page" sub_title="Checkout Page" />
            <CheckoutArea />
         </main>
         <FooterSix />
      </>
   )
}

export default Checkout
