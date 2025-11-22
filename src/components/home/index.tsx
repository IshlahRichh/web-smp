// import About from "./About"
// import Blog from "./Blog"
// import CtaThree from "./Cta"
// import CtaTwo from "./CtaTwo"
// import Cta from "./Cta"
import ProgramKelas from "./ProgramKelas"
import Banner from "./Banner"
import Nonakademik from "./Nonakademik"
import Testimonial from "./Testimonial"
import Header from "../../layouts/headers/Header"
import BannerForm from "./BannerForm"
import Footer from "../../layouts/footers/Footer"
// import Alur from"./Alur";

const HomeThree = () => {
   return (
      <>
         <Header />
         <main>
            <Banner />
            <BannerForm />
            <ProgramKelas />
            <Nonakademik />
            <Testimonial />
         </main>
         <Footer />
      </>
   )
}

export default HomeThree
