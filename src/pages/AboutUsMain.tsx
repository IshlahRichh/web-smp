import AboutUs from "../components/features/feature-details-one"
import SEO from "../components/SEO"
import Wrapper from "../layouts/Wrapper"

const TourDetailsOneMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'About Us'} />
         <AboutUs />
      </Wrapper>
   )
}

export default TourDetailsOneMain
