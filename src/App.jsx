import { useState } from "react";
import "./App.css";

import { NovaTarefa } from "./components/NovaTarefa";
import { Tarefas } from "./components/Tarefas";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Tarefas />
      <NovaTarefa />
    </div>
  );
}

export default App;
