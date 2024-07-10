import './App.css';
import { Tasks } from './components/Tasks.jsx';
import { AddTask } from './components/AddTask.jsx';

function App() {
  return (
    <div className="App">
      <Tasks />
      <AddTask />
    </div>
  );
}

export default App;