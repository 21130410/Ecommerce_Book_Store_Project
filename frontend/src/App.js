import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage/PrivacyPolicyPage';

function App() {
  return (
     <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/policy" element={<PrivacyPolicyPage/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
