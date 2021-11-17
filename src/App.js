import logo from './logo.svg';
import './App.css';

import { ClassClick } from './components/ClassClick';
import PureComp from './components/PureComp';
import MemoComp from './components/MemoComp';
import Input from './Input';
import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet/>
      </div>
  );
}

export default App;
