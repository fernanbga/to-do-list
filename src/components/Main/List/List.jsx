import Card from "../Card/Card.jsx";

// List recorre el array de tareas y crea una Card por cada una
export default function List({ tasks, deleteTask, toggleDone, editTask }) {
  return (
    <section>
      {tasks && tasks.length > 0 ? (
        tasks.map((task) => (
          <Card
            key={task._id}
            {...task}
            deleteTask={deleteTask}
            toggleDone={toggleDone}
            editTask={editTask}
          />
        ))
      ) : (
        <p>No tasks to display.</p>
      )}
    </section>
  );
}