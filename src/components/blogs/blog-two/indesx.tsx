import FooterSix from "../../../layouts/footers/FooterSix"
import Header from "../../../layouts/headers/Header"
import BreadCrumb from "../../common/BreadCrumb"
import BlogArea from "./BlogArea"

const BlogTwo = () => {
  return (
    <>
      <Header />
      <main>
        <BreadCrumb title="Blogs" sub_title="Blog" />
        <BlogArea />
      </main>
      <FooterSix />
    </>
  )
}

export default BlogTwo
