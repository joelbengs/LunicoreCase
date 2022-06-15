import './App.css';
import {NavLink, Link, Outlet, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import { Welcome } from './components/Welcome';
import { Employee } from './components/employee';
import { Car } from './components/car.tsx';
import { Sale } from './components/sale';

function App() {
  return (
    <div>
      <center>
        <Header />
        <Navbar />
        <br></br>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="/cars" element={<Car></Car>} />
          <Route path="/employees" element={<Employee></Employee>} />
          <Route path="/sales" element={<Sale />} />
          <Route path="/about" element={<Welcome name="about" />} />
          <Route path="/employee" >
            <Route path=":name" element={<Welcome />} />
          </Route>
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
    <img className="center" src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Volkswagen_logo.png
" alt="CompanyLogo" width="75" height="75" ></img>
    </header>
    );
}

function Navbar(){
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
      <NavLink className="nav-link" exact="true" activeclassname="navbar__link--active" to ="/about">About</NavLink></li>
      <Outlet/>
      </ul>
);
}

function Footer() {
  return(
    //<React.Fragment>
    <footer className="pt-3 mt-4 text-muted border-top">
      Carshop Case || Built with Node.js, SQLite, Knex, Express, Bootstrap React and React || Lunicore Student Consulting || Joel Bengs
    </footer>
    //</React.Fragment>
  );
}