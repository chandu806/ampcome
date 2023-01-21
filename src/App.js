import logo from './logo.svg';
import './App.css';
import {Appointment} from './components/appointment';
import {User} from './components/user';

function App() {
  return (
    <div className="App">
      <User />
      <Appointment />
    </div>
  );
}

export default App;