import Form from "./Form/Form.jsx";

// Header contiene el titulo y el formulario para añadir tareas
export default function Header({ addTask }) {
  return (
    <header>
      {/* Logo arriba del título */}
      <img
        src="/TODO1.png"
        alt="Todo List Logo"
        style={{
          width: "70px",
          height: "auto",
          marginBottom: "0.5rem",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto"
        }}
        />
      <h1>Todo List</h1>
      <Form addTask={addTask} />
    </header>
  );
}