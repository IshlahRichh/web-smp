import Hero from "./Hero"
import Choose from "./Choose"
import Counter from "./Counter"
import Ads from "./Ads"
import Testimonial from "../home-four/Testimonial"
import Blog from "./Blog"
import CtaTwo from "./CtaTwo"
import Listing from "./Listing"
import Location from "./Location"
import CtaThree from "./CtaThree"
import Footer from "../../../layouts/footers/Footer"
import HeaderFive from "../../../layouts/headers/HeaderFive"

const HomeFive = () => {
   return (
      <>
         <HeaderFive />
         <Hero />
         <Location />
         <CtaThree />
         <Choose />
         <Counter />
         <Listing />
         <Ads />
         <Testimonial style={true} />
         <Blog />
         <CtaTwo />
         <Footer />
      </>
   )
}

export default HomeFive
