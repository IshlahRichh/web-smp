import Excellent from "../components/pages/excellent"
import SEO from "../components/SEO"
import Wrapper from "../layouts/Wrapper"

const BlogDetailsMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Excellent'} />
         <Excellent />
      </Wrapper>
   )
}

export default BlogDetailsMain
