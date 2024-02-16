import ITodo from "../interface/ITodo";

function updateStatusTodo(
  todos: ITodo[],
  todo: ITodo,
  setListTodo: React.Dispatch<React.SetStateAction<ITodo[]>>
) {
  const updTodos = [...todos];
  updTodos.forEach((e) => {
    if (e.id === todo.id) {
      e.isDone = !e.isDone;
    }
  });

  setListTodo(updTodos);
}

function updateAllStatusTodo(
  todos: ITodo[],
  setListTodo: React.Dispatch<React.SetStateAction<ITodo[]>>
) {
  const todosTodosTrue = todos.every((e) => e.isDone);

  const updTodos = todos.map((e) => ({
    ...e,
    isDone: todosTodosTrue ? false : true,
  }));

  setListTodo(updTodos);
}

export { updateStatusTodo, updateAllStatusTodo };
