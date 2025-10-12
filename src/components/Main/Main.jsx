import List from "./List/List.jsx";

// Main muestra los botones de CLEAR y RESET y la lista de tareas
export default function Main({ tasks, deleteTask, clearTasks, resetTasks, toggleDone, editTask }) {
  return (
    <main>
      <div>
        {/* Botones para borrar todas las tareas y restaurar las originales */}
        <button onClick={clearTasks}>CLEAR</button>
        <button onClick={resetTasks}>RESET</button>
      </div>
      {/* La lista recibe todas las funciones para manipular tareas */}
      <List
        tasks={tasks}
        deleteTask={deleteTask}
        toggleDone={toggleDone}
        editTask={editTask}
      />
    </main>
  );
}