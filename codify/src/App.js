import { Header } from "./components/Header";
import { TaskList } from "./components/Tasklist";
import './App.css';

function App() {
  const concept = "React Course";

  return (
    <div className="App">
      <Header />
      <TaskList concept={concept} />
    </div>
  );
}

export default App;