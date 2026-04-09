import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/layout/header";
import JsPage from "./features/js/pages/js-page";
import KtPage from "./features/kt/pages/kt-page";
function App() {
  const location = useLocation();
  return (
    <section className="bg-[rgb(0,0,3)] min-h-screen text-white font-open-sans">
      <Header />
      <Routes location={location}>
        <Route path="/" element={<JsPage />} />
        <Route path="/kt" element={<KtPage />} />
      </Routes>
    </section>
  );
}

export default App;
