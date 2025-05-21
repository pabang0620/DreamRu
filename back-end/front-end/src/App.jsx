import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "./styles/global.css";

// Layout
import Layout from "./components/layout/Layout/Layout";

// Pages
import Home from "./pages/Home/Home";
import Fortune from "./pages/Fortune/Fortune";
import Tarot from "./pages/Tarot/Tarot";
import Consultation from "./pages/Consultation/Consultation";
import Favorites from "./pages/Favorites/Favorites";
import Search from "./pages/Search/Search";
import Profile from "./pages/Profile/Profile";
import TarotList from "./pages/Tarot/TarotList";
import TarotDetail from "./pages/Tarot/TarotDetail";
import Payment from "./pages/Payment/Payment";
import TarotReading from "./pages/TarotReading/TarotReading";
import TarotResultPage from "./pages/TarotReading/TarotResultPage";

// Admin Pages
import AdminConsultants from "./pages/Admin/Consultants/AdminConsultants";
import AdminProducts from "./pages/Admin/Products/AdminProducts";

// 심리테스트 페이지
import Psychology from "./pages/Psychology/Psychology";
import TestRunner from "./pages/Psychology/TestRunner";

// 결과 페이지
import MbtiResult from "./pages/Psychology/MbtiResult";
import ADHDResult from "./pages/Psychology/ADHDResult";
import DepressionResult from "./pages/Psychology/DepressionResult";
import TravelResult from "./pages/Psychology/TravelResult";
import StressResult from "./pages/Psychology/StressResult";
import TestDescription from "./pages/Psychology/TestDescription";
import DualOptionTestRunner from "./pages/Psychology/DualOptionTestRunner";
import IdealTypeResult from "./pages/Psychology/IdealTypeResult";
import FortuneDetail from "./pages/Fortune/FortuneDetail";
import ChatSession from "./pages/Fortune/ChatSession";

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
          {/* 사주 */}
          <Route path="fortune" element={<Fortune />} />
          <Route path="/fortune/:type" element={<FortuneDetail />} />{" "}
          <Route path="/fortune/chat" element={<ChatSession />} />
          {/* 상세 경로 */}
          {/* 타로  */}
          <Route path="tarot" element={<TarotList />} />
          <Route path="tarot/:id" element={<TarotDetail />} />
          <Route path="tarot-reading/:id" element={<TarotReading />} />
          <Route
            path="tarot-reading/:id/result"
            element={<TarotResultPage />}
          />{" "}
          // 추가
          {/* 심리테스트 */}
          <Route path="/psychology" element={<Psychology />} />
          <Route path="/psychology/:testId" element={<TestDescription />} />
          <Route path="/psychology/:testId/run" element={<TestRunner />} />
          {/* 2지 선다 */}
          <Route
            path="/psychology/:testId/dual-run"
            element={<DualOptionTestRunner />}
          />
          {/* 심리 결과 페이지  */}
          <Route path="/psychology/mbti/result" element={<MbtiResult />} />
          <Route path="/psychology/adhd/result" element={<ADHDResult />} />
          <Route
            path="/psychology/depression/result"
            element={<DepressionResult />}
          />
          <Route path="/psychology/travel/result" element={<TravelResult />} />
          <Route path="/psychology/stress/result" element={<StressResult />} />
          <Route
            path="/psychology/idealType/result"
            element={<IdealTypeResult />}
          />
          {/* 결제 */}
          <Route path="payment" element={<Payment />} />
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
