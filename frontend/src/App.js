import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage/PrivacyPolicyPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import CartPage from './pages/CartPage/CartPage';
import MainMenu from './components/MainMenu/MainMenu';
import SignInPage from './pages/SignIn/SignInPage';
import SignUpPage from './pages/SignUp/SignUpPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';

function App() {
  return (
     <Router>
      <Header />
      <MainMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/policy" element={<PrivacyPolicyPage/>} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
