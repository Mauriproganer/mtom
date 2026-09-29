import { useState, useEffect } from "react";

export default function Resenas() {
  const [resena, setResena] = useState("");
  const [lista, setLista] = useState<string[]>([]);

  useEffect(() => {
    const guardades = localStorage.getItem("resenas");
    if (guardades) setLista(JSON.parse(guardades));
  }, []);

  const agregar = () => {
    if (!resena) return;
    const noves = [...lista, resena];
    setLista(noves);
    localStorage.setItem("resenas", JSON.stringify(noves));
    setResena("");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Ressenyes de clients</h2>

      <input
        value={resena}
        onChange={(e) => setResena(e.target.value)}
        placeholder="Escriu la teva ressenya"
      />
      <button onClick={agregar}>Enviar</button>

      <ul>
        {lista.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
    </div>
  );
}
