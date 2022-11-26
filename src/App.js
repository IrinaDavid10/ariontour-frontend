import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import CustomerByFirstNamePage from './pages/CustomerByFirstNamePage';
import CustomerShowAllPage from './pages/CustomerShowAllPage';
import HomePage from './pages/HomePage';
import UserRegistrationPage from './pages/UserRegistrationPage';
import LoginPage from './pages/LoginPage';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllEventsPage from './pages/AllEventsPage';
import AdminPanelPage from './pages/AdminPanelPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/customer" element={<CustomerByFirstNamePage/>}/>
          <Route path="/customers" element={<CustomerShowAllPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<UserRegistrationPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/events" element={<AllEventsPage/>}/>
          <Route path="/forgotpassword" element={<ForgotPasswordPage/>}/>
          <Route path="/adminpanel" element={<AdminPanelPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
