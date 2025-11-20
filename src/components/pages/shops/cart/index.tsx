import FooterSix from "../../../../layouts/footers/FooterSix"
import Header from "../../../../layouts/headers/Header"
import BreadCrumb from "../../../common/BreadCrumb"
import CartArea from "./CartArea"

const Cart = () => {
   return (
      <>
         <Header />
         <main>
            <BreadCrumb title="Cart Page" sub_title="Cart" />
            <CartArea />
         </main>
         <FooterSix />
      </>
   )
}

export default Cart
