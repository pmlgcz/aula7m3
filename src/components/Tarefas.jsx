import { useState } from "react";
import axios from "axios";
import Tarefa from "./Tarefa";

export function Tarefas() {
  const [tarefas, setTarefas] = useState([]);

  useState(() => getTasks(), []);

  function getTasks() {
    axios
      .get("https://example-deploy-a-json-server.onrender.com/notas")
      .then((result) => {
        console.log(result);
        setTarefas(result.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  return (
    <div>
      <button onClick={getTasks}>Atualizar tarefas</button>

      <ul>
        {tarefas.map((tarefa) => (
          <Tarefa titulo={tarefa.titulo} />
        ))}
      </ul>
    </div>
  );
}
