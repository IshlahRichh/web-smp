import Footer from "../../../layouts/footers/Footer"
import Header from "../../../layouts/headers/Header"
import BreadCrumb from "../../common/BreadCrumb"
import ErrorArea from "./ErrorArea"

const NotFound = () => {
  return (
    <>
      <Header />
      <main>
        <BreadCrumb title="404 Error Page" sub_title="404" />
        <ErrorArea />
      </main>
      <Footer />
    </>
  )
}

export default NotFound
