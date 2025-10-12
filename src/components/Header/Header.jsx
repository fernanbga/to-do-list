import Form from "./Form/Form.jsx";

// Header contiene el titulo y el formulario para añadir tareas
export default function Header({ addTask }) {
  return (
    <header>
      <h1>Todo List</h1>
      <Form addTask={addTask} />
    </header>
  );
}