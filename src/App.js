import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import './styles/global.css';

// Layout
import Layout from './components/layout/Layout/Layout';

// Pages
import Home from './pages/Home/Home';
import Fortune from './pages/Fortune/Fortune';
import Tarot from './pages/Tarot/Tarot';
import Consultation from './pages/Consultation/Consultation';
import Favorites from './pages/Favorites/Favorites';
import Search from './pages/Search/Search';
import Profile from './pages/Profile/Profile';
import TarotList from './pages/Tarot/TarotList';
import TarotDetail from './pages/Tarot/TarotDetail';
import Payment from './pages/Payment/Payment';
import TarotReading from './pages/TarotReading/TarotReading';

// Admin Pages
import AdminConsultants from './pages/Admin/Consultants/AdminConsultants';
import AdminProducts from './pages/Admin/Products/AdminProducts';

// Font Awesome 라이브러리 설정
library.add(fas, far);

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin/consultants" element={<AdminConsultants />} />
        <Route path="/admin/products" element={<AdminProducts />} />

        {/* Client Routes */}
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="fortune" element={<Fortune />} />
          <Route path="tarot" element={<TarotList />} />
          <Route path="tarot/:id" element={<TarotDetail />} />
          <Route path="payment" element={<Payment />} />
          <Route path="tarot-reading/:id" element={<TarotReading />} />
          <Route path="consultation" element={<Consultation />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="search" element={<Search />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
