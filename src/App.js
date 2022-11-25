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
import ForgotPasswordPage from './pages/ForgotPasswordPage';


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
          <Route path="/events" element={<AllEventsPage/>}/>
          <Route path="/forgotpassword" element={<ForgotPasswordPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
