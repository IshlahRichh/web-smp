import FooterSix from "../../../../layouts/footers/FooterSix"
import Header from "../../../../layouts/headers/Header"
import BreadCrumb from "../../../common/BreadCrumb"
import TeamArea from "./TeamArea"

const Team = () => {
   return (
      <>
         <Header />
         <main>
            <BreadCrumb title="Our Local Guyeds" sub_title="Guyeds" />
            <TeamArea />
         </main>
         <FooterSix />
      </>
   )
}

export default Team
