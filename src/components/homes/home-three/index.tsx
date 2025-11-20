import About from "./About"
import Banner from "./Banner"
import Blog from "./Blog"
import Choose from "./Choose"
import CtaThree from "./Cta"
import CtaTwo from "./CtaTwo"
import Location from "./Location"
import Testimonial from "./Testimonial"
import Cta from "../home-one/Cta"
import Header from "../../../layouts/headers/Header"
import BannerFormThree from "../../common/banner-form/BannerForm"
import FooterThree from "../../../layouts/footers/FooterThree"
import Listing from"./Listing";

const HomeThree = () => {
   return (
      <>
         <Header />
         <main>
            <Banner />
            <BannerFormThree />
            <About />
            <Listing />
            <Choose />
            <CtaThree />
            <Location />
            <CtaTwo />
            <Testimonial />
            <Blog />
            <Cta />
         </main>
         <FooterThree />
      </>
   )
}

export default HomeThree
