import FooterSix from "../../../../layouts/footers/FooterSix"
import Header from "../../../../layouts/headers/Header"
import BreadCrumb from "../../../common/BreadCrumb"
import TeamDetailsArea from "./TeamDetailsArea"

const TeamDetails = () => {
   return (
      <>
         <Header />
         <main>
            <BreadCrumb title="Esther Howard" sub_title="Esther Howard" />
            <TeamDetailsArea />
         </main>
         <FooterSix />
      </>
   )
}

export default TeamDetails
