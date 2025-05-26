import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
