import logo from './logo.svg';
import './App.css';
import {NavLink, Link, Outlet, Route, Routes} from 'react-router-dom';
//import Home from './routes/Home';
//import About from './routes/About';
import 'bootstrap/dist/css/bootstrap.css';


import { Welcome } from './components/Welcome';
import { Employee } from './components/employee';
import { Car } from './components/car.tsx';
import { LoadData } from './components/data-script';

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
          <Route path="/sales" element={<Welcome name="sales" />} />
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
        
        <div>
          <LoadData></LoadData>
        </div>
        <Footer></Footer>
      </center>
    </div>
  );
}

/* function renderRouter() {
  return(
    <>
    <Routes>
      <Route index element={<Welcome />} />
      <Route path="/cars" element={<Welcome name="Cars" />} />
      <Route path="/employees" element={<Employee></Employee>} />
      <Route path="/sales" element={<Welcome name="sales" />} />
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
    </>
  );
} */

export default App;

function Header() {
  return(
  <header className="pb-3 mb-4 border-bottom justify-content-center">
    <img className="center" src="https://res.cloudinary.com/teepublic/image/private/s--grEO0Z0C--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1590666026/production/designs/1648652_2.jpg
" alt="CompanyLogo" width="75" height="75" ></img>
      <span className="fs-4"> Bengs Car Shop! </span>
      <img className="center" src="https://res.cloudinary.com/teepublic/image/private/s--grEO0Z0C--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1590666026/production/designs/1648652_2.jpg
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

function CompanyLogo() {
  return(
    //<React.Fragment>
    //<br></br>
    <img src="https://res.cloudinary.com/teepublic/image/private/s--grEO0Z0C--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1590666026/production/designs/1648652_2.jpg" alt="CompanyLogo" width="630" height="630" ></img>
    //</React.Fragment>
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