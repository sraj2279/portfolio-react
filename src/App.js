import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Education from './pages/Education';
import Navbar from './components/Navbar'
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
