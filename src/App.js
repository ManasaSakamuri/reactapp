import logo from './logo.svg';
import './App.css';

import { ClassClick } from './components/ClassClick';

import Person from './components/Person';
import Parentcomp from './components/ParentComp';
import PureComp from './components/PureComp';
import RegularComp from './components/RegularComp';

function App() {
  return (
    <div className="App">
      <RegularComp/>
      </div>
  );
}

export default App;
