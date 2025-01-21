import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Contact from './components/Contact';
import Projects from './components/Projects';
//import './App.css'; // Import the CSS file for styling

function App() {
  return (
    <Router>
      <div className="app-container d-flex flex-column min-vh-100">
        {/* Navbar */}
        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-lg">
          <div className="container">
            <a className="navbar-brand fw-bold" href="/">My Portfolio</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/education">Education</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/projects">Projects</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}

        {/* Main Content */}
        {/* <main className="flex-grow-1"> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        {/* </main> */}

        {/* Footer */}
        <footer className="bg-dark text-center text-white py-3">
          <div className="container">
            <p>&copy; 2025 My Portfolio. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
