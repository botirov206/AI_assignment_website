import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import AITheory from './pages/AITheory';
import DataPreparation from './pages/DataPreparation';
import ModelDevelopment from './pages/ModelDevelopment';
import CodeShowcase from './pages/CodeShowcase';
import Conclusion from './pages/Conclusion';
import References from './pages/References';
import Developer from './pages/Developer';

function NavContent() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "bg-blue-800" : "";
  };

  return (
    <div className="flex-col md:flex-row hidden md:flex mt-2 md:mt-0">
      <Link to="/" className={`block px-4 py-2 md:py-1 hover:bg-blue-800 rounded ${isActive('/')}`}>Home</Link>
      <Link to="/ai-theory" className={`block px-4 py-2 md:py-1 hover:bg-blue-800 rounded ${isActive('/ai-theory')}`}>AI Theory</Link>
      <Link to="/data-preparation" className={`block px-4 py-2 md:py-1 hover:bg-blue-800 rounded ${isActive('/data-preparation')}`}>Data Preparation</Link>
      <Link to="/model-development" className={`block px-4 py-2 md:py-1 hover:bg-blue-800 rounded ${isActive('/model-development')}`}>Model Development</Link>
      <Link to="/code-showcase" className={`block px-4 py-2 md:py-1 hover:bg-blue-800 rounded ${isActive('/code-showcase')}`}>Code Showcase</Link>
      <Link to="/conclusion" className={`block px-4 py-2 md:py-1 hover:bg-blue-800 rounded ${isActive('/conclusion')}`}>Conclusion</Link>
      <Link to="/references" className={`block px-4 py-2 md:py-1 hover:bg-blue-800 rounded ${isActive('/references')}`}>References</Link>
      <Link to="/developer" className={`block px-4 py-2 md:py-1 hover:bg-blue-800 rounded ${isActive('/developer')}`}>Developer</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-blue-700 text-white shadow-md">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div className="flex justify-between items-center">
                <div className="text-xl font-bold">Pittsburgh Bridges AI Project</div>
                <div className="md:hidden">
                  <button className="focus:outline-none">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                      <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <NavContent />
            </div>
          </div>
        </nav>

        <main className="py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai-theory" element={<AITheory />} />
            <Route path="/data-preparation" element={<DataPreparation />} />
            <Route path="/model-development" element={<ModelDevelopment />} />
            <Route path="/code-showcase" element={<CodeShowcase />} />
            <Route path="/conclusion" element={<Conclusion />} />
            <Route path="/references" element={<References />} />
            <Route path="/developer" element={<Developer />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p>© 2025 Pittsburgh Bridges AI Classification Project</p>
                <p className="text-sm text-gray-400">Created for Introduction to AI Assignment</p>
              </div>
              <div className="flex space-x-4">
                <a href="#/references" className="hover:text-blue-300">References</a>
                <a href="https://archive.ics.uci.edu/dataset/18/pittsburgh+bridges" className="hover:text-blue-300" target="_blank" rel="noopener noreferrer">Dataset Source</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
