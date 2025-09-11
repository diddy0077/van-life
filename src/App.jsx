import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import Vans from "./pages/Vans.jsx";
import VanDetail from "./pages/VanDetail.jsx";
import Layout from "./components/Layout.jsx";
import Dashboard from "./pages/Host/Dashboard.jsx";
import Reviews from "./pages/Host/Reviews.jsx";
import Income from "./pages/Host/Income.jsx";
import HostLayout from "./components/HostLayout.jsx";
import HostVans from "./pages/Host/Vans.jsx";
import HostVansDetails from "./pages/Host/HostVansDetails.jsx";
import HostVanDetails from "./pages/Host/HostVanDetails.jsx";
import HostVanPhotos from "./pages/Host/HostVanPhotos.jsx";
import HostVanPricing from "./pages/Host/HostVanPricing.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="income" element={<Income />} />
            <Route path="host-vans" element={<HostVans />} />
            <Route path="host-vans/:id" element={<HostVansDetails />} >
              <Route index element={<HostVanDetails />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
