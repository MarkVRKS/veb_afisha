import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navigation/Navbar';
import LoginPopup from './components/Popups/LoginPopup';
import RegisterPopup from './components/Popups/RegisterPopup';
import React, { useState } from 'react';

const App: React.FC = () => {
const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
const [isRegisterPopupOpen, setRegisterPopupOpen] = useState(false);

return (
  <Router>
    <div className="app">
      <Navbar 
        onLoginClick={() => setLoginPopupOpen(true)}
        onRegisterClick={() => setRegisterPopupOpen(true)}
      />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      {isLoginPopupOpen && (
        <LoginPopup onClose={() => setLoginPopupOpen(false)} />
      )}

      {isRegisterPopupOpen && (
        <RegisterPopup onClose={() => setRegisterPopupOpen(false)} />
      )}
    </div>
  </Router>
);
};

export default App;