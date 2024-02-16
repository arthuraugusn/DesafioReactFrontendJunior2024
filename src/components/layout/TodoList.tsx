import { useState, useEffect } from "react";
import ITodo from "../../interface/ITodo";
import TodoComponent from "./TodoComponent";
import IFilter from "../../interface/IFilter";

export default function TodoList(todos: {
  list: ITodo[];
  setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  isChecked: boolean;
  filter: IFilter | undefined;
}) {
  const [listTodo, setListTodo] = useState<ITodo[]>([]);

  useEffect(() => {
    todos.setTodoList(listTodo);
  }, [listTodo]);

  return (
    <main className="">
      <ul className="border-y w-[622px]  bg-white">
        {todos.list.map((item) => {
          return (
            <TodoComponent
              key={item.id}
              todo={item}
              todos={todos.list}
              setListTodo={setListTodo}
              setChecked={todos.setChecked}
              isChecked={todos.isChecked}
              filter={todos.filter}
            />
          );
        })}
      </ul>
    </main>
  );
}
