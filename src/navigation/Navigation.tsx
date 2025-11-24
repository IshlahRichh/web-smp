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
          <Route path="/login" element={<LogInMain />} />
          <Route path="*" element={<ErrorMain />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default AppNavigation;
