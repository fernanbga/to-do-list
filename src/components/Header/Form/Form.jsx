import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

// Formulario para añadir nuevas tareas
export default function Form({ addTask }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  const inputTimer = useRef(null);
  const successTimer = useRef(null);

  // Muestra el botón ADD solo si hay texto en el input
  useEffect(() => {
    setShowAdd(title.length > 0);

    // Reinicia el timer de 20 segundos cada vez que se escribe en los inputs.
    if (title.length > 0 || desc.length > 0) {
      clearTimeout(inputTimer.current);
      inputTimer.current = setTimeout(() => {
        setTitle("");
        setDesc("");
        setShowAdd(false);
      }, 20000); // 20 segundos
    }

    // Limpia el timer al desmontar o cambiar los inputs
    return () => clearTimeout(inputTimer.current);
  }, [title, desc]);

  // El mensaje de exito se borra después de 5 segundos
  useEffect(() => {
    if (success) {
      successTimer.current = setTimeout(() => setSuccess(false), 5000);
    }
    return () => clearTimeout(successTimer.current);
  }, [success]);

  // Maneja el envio del formulario y las validaciones
  function handleSubmit(e) {
    e.preventDefault();
    if (title.length < 6) {
      setError("Title must be at least 6 characters.");
      return;
    }
    setError("");
    const newTask = {
      title,
      desc,
      isDone: false,
      _id: uuidv4(),
    };
    addTask(newTask);
    setTitle("");
    setDesc("");
    setShowAdd(false);
    setSuccess(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      {showAdd && (
        <button type="submit">ADD</button>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Task added!</p>}
    </form>
  );
}