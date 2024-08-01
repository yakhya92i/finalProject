// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import SignIn from './pages/Login/SignIn';
import Dashboard from './pages/Login/Dashboard';
import InStock from './pages/Login/InStocks';
import Users from './pages/Login/Users';



// Routes
const token = localStorage.getItem("token")
const routes = (
  <Router>
    <Routes>
      {/* design dune route simple  */}
      <Route path="/" element={<Home />} />
      {/* design dune route protégé */}
      {token && <Route path="/dashboard" element={<Dashboard />} />}
      {token && <Route path="/instock" element={<InStock />} />}
      {token && <Route path="/users" element={<Users />} />}
      <Route path="/footer" element={<Footer />} />
      <Route path="/Footer" element={<Footer />} />
      {/* <Route path="/dashboard" element={<Home />} />  */}
      <Route path="/login" element={<SignIn />} />
      {/* <Route path="/signup" element={<SignUp />} />  */}
      {/* <Route path="/" element={<Login />} />  */}
    </Routes>
  </Router>
);

const App = () => {
  return (

    <div>
      {routes}
    </div>
  );
};

export default App;

