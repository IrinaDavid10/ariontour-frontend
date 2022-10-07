import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import CustomerByLastNamePage from './pages/CustomerByLastNamePage';
import CustomerShowAllPage from './pages/CustomerShowAllPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<CustomerShowAllPage/>}/>
          <Route path="/customer" element={<CustomerByLastNamePage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
