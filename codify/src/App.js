import { Header } from "./components/Header";
import { TaskList } from "./components/Tasklist";
import {AddTask} from "./components/AddTask"
import './App.css';

function App() {
  const concept = "React Course";

  return (
    <div className="App">
      <Header />
      <AddTask/>
      <TaskList concept={concept} />
    </div>
  );
}

export default App;