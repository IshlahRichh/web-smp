import FooterSix from "../../../../layouts/footers/FooterSix"
import Header from "../../../../layouts/headers/Header"
import BreadCrumb from "../../../common/BreadCrumb"
import ShopDetailsArea from "./ShopDetailsArea"
import ShopDetailsTabArea from "./ShopDetailsTabArea"

const ShopDetails = () => {
   return (
      <>
         <Header />
         <main>
            <BreadCrumb title="Shop Details" sub_title="Bluetooth Headphone" />
            <ShopDetailsArea />
            <ShopDetailsTabArea />
         </main>
         <FooterSix />
      </>
   )
}

export default ShopDetails
