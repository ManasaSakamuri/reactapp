import logo from './logo.svg';
import './App.css';

import { ClassClick } from './components/ClassClick';
import welcome from './components/Welcome';
import RefsDemo from './components/refs/RefsDemo';
import FrParentInput from './components/refs/FrParentInput';

function App() {
  return (
    <div className="App">
      <FrParentInput/>
      </div>
  );
}

export default App;
