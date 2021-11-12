import logo from './logo.svg';
import './App.css';

import { ClassClick } from './components/ClassClick';
import RegularComp from './components/RegularComp';
import RefsDemo from './components/RefsDemo';
import PureComp from './components/PureComp';
import MemoComp from './components/MemoComp';

function App() {
  return (
    <div className="App">
      <MemoComp/>
      </div>
  );
}

export default App;
