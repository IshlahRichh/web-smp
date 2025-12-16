import Home from "../components/home";
import SEO from "../components/SEO";
import Wrapper from "../layouts/Wrapper";

const HomeMain = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home'} />
      <Home />
    </Wrapper>
  );
};

export default HomeMain;
