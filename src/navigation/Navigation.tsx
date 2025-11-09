import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import ProtectedRoute from '../components/common/ProtectedRoute';
import HomeMain from '../pages/HomeMain';
import MICOMain from '../pages/MICOMain';
import Tahfidz from '../pages/TahfidzMain';
import Excellent from '../pages/ExcellentMain';
import BiayaPendaftaranMain from '../pages/BiayaPendaftaranMain';
import NonAkademikMain from '../pages/NonAkademikMain';
import AlurMain from '../pages/AlurMain';
import AngsurExc from '../components/angsuran/angsuran-excellent';
import AngsurTahfidz from '../components/angsuran/angsuran-tahfidz';
import AngsurMico from '../components/angsuran/angsuran-mico';
import AboutUs from '../pages/AboutUsMain';
// import HomeTwoMain from '../pages/HomeTwoMain';
// import HomeThreeMain from '../pages/HomeThreeMain';
// import HomeFourMain from '../pages/HomeFourMain';
// import HomeFiveMain from '../pages/HomeFiveMain';
// import HomeSixMain from '../pages/HomeSixMain';
// import HomeSevenMain from '../pages/HomeSevenMain';
// import HotelGridMain from '../pages/HotelGridMain';
// import TourGridOneMain from '../pages/TourGridOneMain';
// import AboutMain from '../pages/AboutMain';
// import TeamMain from '../pages/TeamMain';
// import TeamDetailsMain from '../pages/TeamDetailsMain';
// import ShopMain from '../pages/ShopMain';
// import ShopDetailsMain from '../pages/ShopDetailsMain';
// import CartMain from '../pages/CartMain';
// import WishlistMain from '../pages/WishlistMain';
// import CheckoutMain from '../pages/CheckoutMain';
// import PricingMain from '../pages/PricingMain';
// import FaqMain from '../pages/FaqMain';
// import RegisterMain from '../pages/RegisterMain';
// import BlogOneMain from '../pages/BlogOneMain';
// import BlogTwoMain from '../pages/BlogTwoMain';
// import ContactMain from '../pages/ContactMain';
import LogInMain from '../pages/LogInMain';
import ErrorMain from '../pages/ErrorMain';

const AppNavigation = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/alur-pendaftaran" element={<AlurMain />} />
          <Route 
            path="/biaya-pendaftaran" 
            element={
              <ProtectedRoute>
                <BiayaPendaftaranMain />
              </ProtectedRoute>
            } 
          />
          <Route path="/nonakademik" element={<NonAkademikMain />} />
          <Route path="/angsuran-excellent" element={<AngsurExc />} />
          <Route path="/angsuran-tahfidz" element={<AngsurTahfidz />} />
          <Route path="/angsuran-mico" element={<AngsurMico />} />
          <Route path="/m-ico" element={<MICOMain />} />
          <Route path="/tahfidz" element={<Tahfidz />} />
          <Route path="/excellent" element={<Excellent />} />
          <Route path="/about-us" element={<AboutUs />} />
          {/* <Route path="/home-two" element={<HomeTwoMain />} />
          <Route path="/home-three" element={<HomeThreeMain />} />
          <Route path="/home-four" element={<HomeFourMain />} />
          <Route path="/home-five" element={<HomeFiveMain />} />
          <Route path="/home-six" element={<HomeSixMain />} />
          <Route path="/home-seven" element={<HomeSevenMain />} />
          <Route path="/hotel-grid" element={<HotelGridMain />} />
          <Route path="/tour-grid-2" element={<TourGridOneMain />} />
          <Route path="/about" element={<AboutMain />} />
          <Route path="/team" element={<TeamMain />} />
          <Route path="/team-details" element={<TeamDetailsMain />} />
          <Route path="/shop" element={<ShopMain />} />
          <Route path="/shop-details" element={<ShopDetailsMain />} />
          <Route path="/cart" element={<CartMain />} />
          <Route path="/wishlist" element={<WishlistMain />} />
          <Route path="/checkout" element={<CheckoutMain />} />
          <Route path="/pricing" element={<PricingMain />} />
          <Route path="/faq" element={<FaqMain />} />
          <Route path="/register" element={<RegisterMain />} />
          <Route path="/blog-grid" element={<BlogOneMain />} />
          <Route path="/blog-standard" element={<BlogTwoMain />} />
          <Route path="/contact" element={<ContactMain />} />  */}
          <Route path="/login" element={<LogInMain />} />
          <Route path="*" element={<ErrorMain />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default AppNavigation;
