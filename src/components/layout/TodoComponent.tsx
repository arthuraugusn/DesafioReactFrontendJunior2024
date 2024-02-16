import { useState } from "react";
import { handleExclude } from "../../functions/HandleFunctions";
import ITodo from "../../interface/ITodo";
import Exclude from "../icons/Exclude";
import Checkbox from "./Checkbox";
import EditableLable from "./EditableLable";
import IFilter from "../../interface/IFilter";

export default function TodoComponent(items: {
  todo: ITodo;
  todos: ITodo[];
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  setListTodo: React.Dispatch<React.SetStateAction<ITodo[]>>;
  isChecked: boolean;
  filter: IFilter | undefined;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isInOut, setIsInOut] = useState(false);

  if (
    items.filter?.value === "Completed" &&
    items.todo.isDone === items.filter.statusFilter
  ) {
    return (
      <li
        className={`border-y justify-between p-4 text-2xl border-gray-200 flex items-center ${
          items.todo.isDone ? "hidden " : ""
        } ${!items.todo.isDone ? "hidden" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex w-full h-full   align-center">
          <Checkbox
            todo={items.todo}
            todos={items.todos}
            setListTodo={items.setListTodo}
          />
          <EditableLable
            todoTitle={items.todo.title}
            isChecked={items.todo.isDone}
          />
        </div>

        <div
          className={`transition-opacity duration-500 ease-in-out ${
            isHovered ? "opacity-100 " : "opacity-0 "
          }`}
          onClick={() => {
            handleExclude(items.todo, items.todos, items.setListTodo);
          }}
        >
          <Exclude
            class={`w-6 h-6 transition-colors duration-300 ease-in-out ${
              isInOut ? "text-red-500 " : "text-black"
            }`}
            setIsHovered={setIsInOut}
          />
        </div>
      </li>
    );
  } else if (
    items.filter?.value === "Active" &&
    items.todo.isDone === items.filter.statusFilter
  ) {
    return (
      <li
        className={`border-y justify-between p-4 text-2xl border-gray-200 flex items-center ${
          items.todo.isDone ? " " : "hidden"
        } ${!items.todo.isDone ? "" : "hidden"}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex w-full h-full align-center">
          <Checkbox
            todo={items.todo}
            todos={items.todos}
            setListTodo={items.setListTodo}
          />
          <EditableLable
            todoTitle={items.todo.title}
            isChecked={items.todo.isDone}
          />
        </div>

        <div
          className={`transition-opacity duration-500 ease-in-out ${
            isHovered ? "opacity-100 " : "opacity-0 "
          }`}
          onClick={() => {
            handleExclude(items.todo, items.todos, items.setListTodo);
          }}
        >
          <Exclude
            class={`w-6 h-6 transition-colors duration-300 ease-in-out ${
              isInOut ? "text-red-500 " : "text-black"
            }`}
            setIsHovered={setIsInOut}
          />
        </div>
      </li>
    );
  } else {
    return (
      <li
        className={`border-y justify-between p-4 text-2xl border-gray-200 flex items-center `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex w-full h-full align-center">
          <Checkbox
            todo={items.todo}
            todos={items.todos}
            setListTodo={items.setListTodo}
          />
          <EditableLable
            todoTitle={items.todo.title}
            isChecked={items.todo.isDone}
          />
        </div>

        <div
          className={`transition-opacity duration-500 ease-in-out ${
            isHovered ? "opacity-100 " : "opacity-0 "
          }`}
          onClick={() => {
            handleExclude(items.todo, items.todos, items.setListTodo);
          }}
        >
          <Exclude
            class={`w-6 h-6 transition-colors duration-300 ease-in-out ${
              isInOut ? "text-red-500 " : "text-black"
            }`}
            setIsHovered={setIsInOut}
          />
        </div>
      </li>
    );
  }
}
