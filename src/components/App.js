
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Welcome to my website!</h1>
  </div>
);

const About = () => (
  <div>
    <h1>About This Application</h1>
    <p>This is a simple React app demonstrating React Router.</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
