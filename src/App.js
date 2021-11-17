import logo from './logo.svg';
import './App.css';

import { ClassClick } from './components/ClassClick';
import Table from './components/Table';
import PortalDemo from './components/portals/PortalDemo';
import ClassCounter from './components/hooks/ClassCounter';
import HookCounter from './components/hooks/HookCounter';
import Greet from './components/Greet';
import welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <welcome/>
      </div>
  );
}

export default App;
