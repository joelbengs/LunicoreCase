import './App.css';
import {NavLink, Outlet, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import { Welcome } from './components/welcome';
import { Employee } from './components/employee/employee';
import { Car } from './components/car/car.tsx';
import { Sale } from './components/sale/sale';
import { Dashboard } from './components/dashboard/dashboard';
import { Login } from './components/login';
import useToken from './components/useToken'

function App() {
  //Custom hook
  const { token, setToken } = useToken();
  
  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div>
      <center>
        <Header />
        <Navbar />
        <br></br>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="/cars" element={<Car /> } />
          <Route path="/employees" element={<Employee/> } />
          <Route path="/sales" element={<Sale />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employee" />
          <Route path="/*" element={
            <main style={{ padding: "1rem" }}>
              <center><h1>404 - There's nothing here!</h1></center>
            </main> 
          } />
        </Routes>
        <Footer></Footer>
      </center>
    </div>
  );
}

export default App;

function Header() {
  return(
    <header className="pb-3 mb-4 border-bottom justify-content-center">
      <img className="center" src="https://i.pinimg.com/736x/ff/c0/f3/ffc0f3182c18ec063380a32c89a95c3e.jpg" alt="CompanyLogo" width="75" height="75" ></img>
      <span className="fs-4"> Joey's Junkyard </span>
      <img className="center" src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Volkswagen_logo.png" alt="CompanyLogo" width="75" height="75" ></img>
    </header>
  );
}

function Navbar() {
  return(
    <ul className = "nav justify-content-center nav-pills nav-fill">
      <li className="nav-item">
        <NavLink className="nav-link" exact="true" activeclassname="navbar__link--active" to="/">Home</NavLink></li>
      <li className="nav-item">
        <NavLink className ="nav-link" exact="true" activeclassname="navbar__link--active" to = "/cars">Cars</NavLink></li>
      <li className="nav-item">
        <NavLink className="nav-link" exact="true" activeclassname="navbar__link--active" to = "/employees">Employees</NavLink></li>
      <li className="nav-item">
        <NavLink className="nav-link" exact="true" activeclassname="navbar__link--active" to ="/sales">Sales</NavLink></li>
      <li className="nav-item">
        <NavLink className="nav-link" exact="true" activeclassname="navbar__link--active" to ="/dashboard">Dashboard</NavLink></li>
      <Outlet/>
    </ul>
  );
}

function Footer() {
  return(
    <footer className="pt-3 mt-4 text-muted border-top">
      Carshop Case || Lunicore Student Consulting || Joel Bengs 2022
    </footer>
  );
}