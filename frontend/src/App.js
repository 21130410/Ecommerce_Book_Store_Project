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
import SignInPage from './pages/SignInPage/SignInPage';
import SignUp from './pages/SignUpPage/SignUpPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';
import FavouriteProductsPage from './pages/FavouriteProductsPage/FavouriteProductsPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import CategoryProductListPage from './pages/CategoryProductListPage/CategoryProductListPage';
import ProductsByNamePage from './pages/ProductsByNamePage/ProductsByNamePage';
import ThanksPage from './pages/ThanksPage/ThanksPage';
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage';

function App() {
  return (
    <Router>
      <Header />
      <MainMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/policy" element={<PrivacyPolicyPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/favourite-products" element={<FavouriteProductsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/cart/checkout" element={<CheckoutPage />} />
        <Route path="/categories/:categoryId" element={<CategoryProductListPage />} />
        <Route path="/products/name/:name" element={<ProductsByNamePage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/thanks" element={<ThanksPage />} />
        <Route path="/order-history" element={<OrderHistoryPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
