import { useState, useEffect } from "react";

export default function Resenas() {
  const [resena, setResena] = useState("");
  const [lista, setLista] = useState<string[]>([]);

  useEffect(() => {
    const guardadas = localStorage.getItem("resenas");
    if (guardadas) setLista(JSON.parse(guardadas));
  }, []);

  const agregar = () => {
    if (!resena) return;
    const nuevas = [...lista, resena];
    setLista(nuevas);
    localStorage.setItem("resenas", JSON.stringify(nuevas));
    setResena("");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Reseñas de clientes</h2>

      <input
        value={resena}
        onChange={(e) => setResena(e.target.value)}
        placeholder="Escribe tu reseña"
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
