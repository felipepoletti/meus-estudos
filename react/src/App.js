import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Empresa from './Pages/Empresa';
import Contato from './Pages/Contato';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/empresa" element={<Empresa />}  />
        <Route path="/contato" element={<Contato />}  />
      </Routes>
      <Footer/ >
    </Router>
  );
}

export default App;
