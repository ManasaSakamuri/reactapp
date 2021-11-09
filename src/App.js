import logo from './logo.svg';
import './App.css';
import Great from './components/Great';
import { ClassClick } from './components/ClassClick';
import ParentComponent from './components/ParentComponent';
import ChildComponent from './components/ChildComponent';
import Counter from './components/Counter';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      <EventBind/>
    </div>
  );
}

export default App;
