import { useEffect, useState } from "react";
import Input from "./Input";
import TodoList from "./TodoList";
import ITodo from "../../interface/ITodo";
import Filter from "./Filter";
import IFilter from "../../interface/IFilter";
import { getTodos } from "../../service/todoService";

export default function InputTodoFilter() {
  const [todo, setTodo] = useState<ITodo>();
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState<IFilter>({
    value: "All",
    statusFilter: null,
  });
  const [isChecked, setChecked] = useState<boolean>(false);
  const [todosFinish, setTodosFinish] = useState<number>(0);

  useEffect(() => {
    if (todo !== undefined) {
      setTodoList((t) => t.concat(todo));
    }
  }, [todo]);
  useEffect(() => {
    const items = todoList.filter((item) => item.isDone === false);
    const count = items.length;
    setTodosFinish(count);
  }, [todoList]);
  useEffect(() => {
    getTodos()
      .then((data) => {
        setTodoList(data);
      })
      .catch((e) => {
        console.log("Error: ", e);
      });
  }, []);

  return (
    <>
      <Input
        todoList={todoList}
        setTodoList={setTodoList}
        setTodo={setTodo}
        setChecked={setChecked}
      />
      <TodoList
        list={todoList}
        setTodoList={setTodoList}
        setChecked={setChecked}
        isChecked={isChecked}
        filter={filter}
      />
      <Filter
        todosFinish={todosFinish}
        todos={todoList}
        setFilter={setFilter}
        setTodoList={setTodoList}
        filter={filter}
      />
    </>
  );
}
