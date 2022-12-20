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
import PanelPage from './pages/PanelPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ContactPage from './pages/LiveSupport';
import AboutPage from './pages/AboutPage';
import MainFooter from './components/MainFooter';
import TicketPage from './pages/TicketPage';
import LiveSupport from './pages/LiveSupport';


function App() {
  return (
    <div className="App bg-dark">
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
          <Route path="/panel" element={<PanelPage/>}/>
          <Route path="/contact" element={<LiveSupport/>}/>
          <Route path="/tickets" element={<TicketPage/>}/>
        </Routes>
        <MainFooter/>
      </Router>
    </div>
  );
}

export default App;
