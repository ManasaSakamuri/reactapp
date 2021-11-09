import logo from './logo.svg';
import './App.css';
import Great from './components/Great';
import { ClassClick } from './components/ClassClick';
import ParentComponent from './components/ParentComponent';
import ChildComponent from './components/ChildComponent';

function App() {
  return (
    <div className="App">
      <ChildComponent/>
    </div>
  );
}

export default App;
