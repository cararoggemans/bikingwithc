import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </div>
    </Router>
  );
}



export default App;
