import FooterSix from "../../../../layouts/footers/FooterSix"
import Header from "../../../../layouts/headers/Header"
import BreadCrumb from "../../../common/BreadCrumb"
import WishlistArea from "./WishlistArea"

const Wishlist = () => {
  return (
    <>
      <Header />
      <main>
        <BreadCrumb title="Wishlist Page" sub_title="Wishlist" />
        <WishlistArea />
      </main>
      <FooterSix />
    </>
  )
}

export default Wishlist
