import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Herosection from './Components/Herosec';
import Brands from './Components/Brands';
import Secchero from './Components/Sechero';
import BrowseByStyle from './Components/BrowserDressStyle';
import Reviews from './Components/Reviews';
import Footer from './Components/Footer';
import ProductDetailPage from './Components/Details';
import Addtocart from './Components/Addtocart';
import ScrollToTop from './Components/ScrollToTop';  
import StylishLoginForm from './Components/LoginFoam';

// Home page function
function HomePage() {
  return (
    <>
      <Herosection />
      <Brands />
      <Secchero />
      <BrowseByStyle />
      <Reviews />
    </>
  );
}

// Login page function
function LoginPage() {
  return (
    <>
      <StylishLoginForm />
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        {/* Login page - only this page, no navbar/footer */}
        <Route path="/login" element={<LoginPage />} />
        <Route 
          path="/*" 
          element={
            <>
              <Navbar />
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/brands" element={<Brands />} />
                <Route path="/secchero" element={<Secchero />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/Addtocart" element={<Addtocart />} />
              </Routes>
              <Footer />
            </>
          } 
        />
      </Routes>
    </>
  );
}

export default App;
