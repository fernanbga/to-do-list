import { useEffect, useState } from "react";
import tasksData from "./data/tasks.json";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [tasks, setTasks] = useState([]);

  // Precarga JSON
  useEffect(() => {
    setTasks(tasksData);
  }, []);

  // Agrega una nueva tarea al inicio
  function addTask(task) {
    setTasks((prevTasks) => [task, ...prevTasks]);
  }

  // Borra una tarea por su id
  function deleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
  }

  // Borra todas las tareas
  function clearTasks() {
    setTasks([]);
  }

  // Restaura las tareas del JSON
  function resetTasks() {
    setTasks(tasksData);
  }

  // Marca o desmarca una tarea como completada
  function toggleDone(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  }

  // Edita el titulo y descripcion de una tarea
  function editTask(id, newTitle, newDesc) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === id
          ? { ...task, title: newTitle, desc: newDesc }
          : task
      )
    );
  }

  return (
    <>
      {/* El formulario está en Header */}
      <Header addTask={addTask} />
      {/* La lista y acciones de tareas estan en Main */}
      <Main
        tasks={tasks}
        deleteTask={deleteTask}
        clearTasks={clearTasks}
        resetTasks={resetTasks}
        toggleDone={toggleDone}
        editTask={editTask}
      />
      <Footer />
    </>
  );
}

export default App;