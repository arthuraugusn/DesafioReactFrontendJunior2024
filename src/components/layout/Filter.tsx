import { useState } from "react";
import IFilter from "../../interface/IFilter";
import ITodo from "../../interface/ITodo";
import FilterOptions from "./FilterOptions";

export default function Filter(todos: {
  todosFinish: number;
  todos: ITodo[];
  setFilter: React.Dispatch<React.SetStateAction<IFilter>>;
  setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>;
  filter: IFilter;
}) {
  const [activeFilter, setActive] = useState<string | null>("all");

  return (
    <footer className="border w-[625px] p-2 flex justify-between items-center bg-white">
      <span className="ml-3 text-sm">{todos.todosFinish} items left! </span>
      <ul className="flex gap-4">
        <FilterOptions
          isClicked={activeFilter?.toLowerCase() === "all"}
          setActive={setActive}
          filter={todos.filter}
          value={"All"}
          setFilter={todos.setFilter}
        />
        <FilterOptions
          isClicked={activeFilter?.toLowerCase() === "active"}
          setActive={setActive}
          filter={todos.filter}
          value={"Active"}
          setFilter={todos.setFilter}
        />
        <FilterOptions
          isClicked={activeFilter?.toLowerCase() === "completed"}
          setActive={setActive}
          filter={todos.filter}
          value={"Completed"}
          setFilter={todos.setFilter}
        />
      </ul>
      <button
        onClick={() => {
          todos.setTodoList(
            todos.todos.filter((item) => item.isDone === false)
          );
        }}
        className="mr-3"
      >
        Clear completed
      </button>
    </footer>
  );
}
