// App.tsx - Main component
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';

// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';
// import Footer from './components/Footer';
// import './styles/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <div>
        <Header />
        </div>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
          
          
          </Routes>
        </main>
       =
      </div>
    </Router>
  );
};

export default App;