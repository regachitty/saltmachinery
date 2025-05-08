import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./CommonComponent/Navbar.jsx";
import Footer from "./CommonComponent/Footer.jsx";
import LogoSlider from "./CommonComponent/LogoSlider.jsx";
// import Testimonal from './Component/Testimonial.jsx';
import Home from "./Pages/Home.jsx";
import StepsCard from "./Component/StepsCard.jsx";
import ScoreComponent from "./Component/ScoreComponent.jsx";
import Carousel from "./Component/Carousel.jsx";
import ContactComponent from "./Component/ContactComponent.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Map from "./Component/Map.jsx";
import Testimonals from "./Component/Testimonials.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import WhiteNav from "./CommonComponent/WhiteNav.jsx";
import AboutUsLogoSlider from "./Component/AboutUsLogoslider.jsx";
import AboutUsPage from "./Pages/AboutUsPage.jsx";
import Gallery from "./Component/Gallery.jsx";
import { Parallax } from "react-scroll-parallax";
import OurVideoPage from "./Pages/OurVideoPage.jsx";
import { VideoFile } from "./Component/VideoFile.jsx";
import { SingleVideo } from "./Component/SingleVideo.jsx";
// import SaltWorkDesign from '/src/Pages/SaltWorkDesign.jsx';
import SaltDesign from "./Pages/SaltDesign.jsx";
import Trading from "./Pages/Trading.jsx";
import BannerOfAbout from "./Component/BannerOfAbout.jsx";
import LogosSliders from "./CommonComponent/LogosSliders.jsx";
import RefineryPage from "./Pages/RefineryPage.jsx";
import ProductSpecific from "./CommonComponent/ProductSpecific.jsx";
import TrustedSection from "./CommonComponent/TrustedSection.jsx";
import ProductSimplySlider from "./CommonComponent/ProductSimplySlider.jsx";
import ReadyToBuild from "./CommonComponent/ReadyToBuild.jsx";
import FrequentlyAsked from "./CommonComponent/FrequentlyAsked.jsx";
import StillHaveQuestion from "./CommonComponent/StillHaveQuestion.jsx";
import { Avatar } from "antd";
import AvatarProfile from "./CommonComponent/AvatarProfile.jsx";
import ImageSlider from "./CommonComponent/ImageSlider.jsx";
import PureVacuumSaltPlant from "./Pages/PureVacuumSaltPlant.jsx";
import SaltWasheryPlant from "./Pages/SaltWasheryPlant.jsx";
import SaltIodizationPlant from "./Pages/SaltIodizationPlant.jsx";
import PharmaSaltPlant from "./Pages/PharmaSaltPlant.jsx";
import DoubleFortifiedSalt from "./Pages/DoubleFortifiedSalt.jsx";
import LowSodiumSaltPlant from "./Pages/LowSodiumSaltPlant.jsx";
import GlobeComponent from "./CommonComponent/GlobeComponent.jsx";
import ScrollStickyImage from "./Component/ScrollStickyImage.jsx";
// import MachinerySaltRefinery from './Pages/MachinerySaltRefinery.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/nav" element={<Navbar />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/logoSlider" element={<LogoSlider />} />
          {/* <Route path="/testimonial" element={<Testimonal />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/stepsCard" element={<StepsCard />} />
          <Route path="/score" element={<ScoreComponent />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/contactComp" element={<ContactComponent />} />
          <Route path="/map" element={<Map />} />
          <Route path="/testimonials" element={<Testimonals />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/whiteNav" element={<WhiteNav />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/aboutUsLogo" element={<AboutUsLogoSlider />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/ourvideo" element={<OurVideoPage />} />
          <Route path="/videoFile" element={<VideoFile />} />
          <Route path="/singleVideoFile" element={<SingleVideo />} />
          {/*<Route path="/salt-work-design" element={<SaltWorkDesign />} /> */}
          <Route path="/saltDesign" element={<SaltDesign />} />
          <Route path="/trading" element={<Trading />} />
          <Route path="/bannerOdAbout" element={<BannerOfAbout />} />
          <Route path="/logossliders" element={<LogosSliders />} />
          <Route path="/refineryPage" element={<RefineryPage />} />
          <Route path="/productSpecific" element={<ProductSpecific />} />
          <Route path="/trustedWorld" element={<TrustedSection />} />
          <Route path="/productSlidershow" element={<ProductSimplySlider />} />
          <Route path="/readyToBuild" element={<ReadyToBuild />} />
          <Route path="/frequentlyask" element={<FrequentlyAsked />} />
          <Route path="/stillHaveQuestion" element={<StillHaveQuestion />} />
          <Route path="/avatar" element={<AvatarProfile />} />
          <Route path="/imageSlider" element={<ImageSlider />} />
          <Route path="/purvaccumSalt" element={<PureVacuumSaltPlant />} />
          <Route path="/saltWasheryPlant" element={<SaltWasheryPlant />} />
          <Route path="/saltIodization" element={<SaltIodizationPlant />} />
          <Route path="/pharmaSaltPlant" element={<PharmaSaltPlant />} />
          <Route
            path="/doubleFortifiedSalt"
            element={<DoubleFortifiedSalt />}
          />
          <Route path="/lowSodiumSaltPlant" element={<LowSodiumSaltPlant />} />
          <Route path="/globeComponent" element={<GlobeComponent />} />
          <Route path="/scrollSticky" element={<ScrollStickyImage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
