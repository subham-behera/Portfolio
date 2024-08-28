import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./pages/About/Profile";
import Form from "./pages/Contact/Form";
import Index from "./pages/Projects/Index";
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Index />} />
        <Route path="/about" element={<Profile />} />
        <Route path="/contact" element={<Form />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
