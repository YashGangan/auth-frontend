import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/index.css';
import SignUp from './pages/SignUp'; 
import Login from './pages/Login';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </StrictMode>,
);
