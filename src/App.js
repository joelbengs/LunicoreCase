import logo from './logo.svg';
import './App.css';
import { Welcome } from './components/Welcome';
import { Employee } from './components/employee';
import { Car } from './components/car.tsx';

function App() {
  return (
    <div>
        <div>
          <Employee></Employee>
        </div>
        <div>
          <Car></Car>
        </div>
    </div>
  );
}

export default App;
