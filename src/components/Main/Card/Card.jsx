import { useState } from "react";

// Card muestra la informacion de cada tarea y permite acciones como editar, borrar y marcar como hecha
export default function Card({ title, desc, isDone, _id, deleteTask, toggleDone, editTask }) {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newDesc, setNewDesc] = useState(desc);

  // Maneja el envio del formulario de edicion
  function handleEdit(e) {
    e.preventDefault();
    editTask(_id, newTitle, newDesc);
    setEditing(false);
  }

  return (
    <article>
      {editing ? (
        // Formulario para editar titulo y descripcion
        <form onSubmit={handleEdit}>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            type="text"
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
          />
          <button type="submit">SAVE</button>
          <button type="button" onClick={() => setEditing(false)}>CANCEL</button>
        </form>
      ) : (
        <>
          {/* Muestra los datos de la tarea, tachados si esta completada */}
          <h3 style={isDone ? { textDecoration: "line-through" } : {}}>{title}</h3>
          <p style={isDone ? { textDecoration: "line-through" } : {}}>{desc}</p>
          <p>
            Status: <strong>{isDone ? "Completed" : "Pending"}</strong>
          </p>
          {/* Boton para marcar/desmarcar la tarea */}
          <button onClick={() => toggleDone(_id)}>
            {isDone ? "UNCHECK" : "CHECK"}
          </button>
          {/* Boton para editar la tarea */}
          <button onClick={() => setEditing(true)}>EDIT</button>
          {/* Boton para borrar la tarea */}
          <button onClick={() => deleteTask(_id)}>DELETE</button>
        </>
      )}
    </article>
  );
}