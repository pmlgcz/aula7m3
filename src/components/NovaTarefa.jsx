import axios from "axios";
import { useState } from "react";
export function NovaTarefa() {
  const [titulo, setTitulo] = useState("");
  function postApi() { 
    axios.post("https://example-deploy-a-json-server.onrender.com/notas", {
      titulo: titulo,
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <h1>{titulo}</h1>
      <input type='text' onChange={(e) => setTitulo(e.target.value)} />
      <button onClick={postApi}>Enviar</button>
    </div>
  );
}
