import About from '../components/pages/m-ico';
import SEO from '../components/SEO';
import Wrapper from '../layouts/Wrapper';

const AboutMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'About'} />
         <About />
      </Wrapper>
   );
};

export default AboutMain;