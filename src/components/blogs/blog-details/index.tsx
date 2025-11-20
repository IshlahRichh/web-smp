import BlogDetailsArea from "./BlogDetailsArea"
import Footer from "../../../layouts/footers/Footer"
import Header from "../../../layouts/headers/Header"
import BreadCrumb from "../../common/BreadCrumb"

const BlogDetails = () => {
  return (
    <>
      <Header />
      <main>
        <BreadCrumb title="Blog Details" sub_title="Exploring The Green Spac Realar Residence Area Harmony" />
        <BlogDetailsArea />
      </main>
      <Footer />
    </>
  )
}

export default BlogDetails
