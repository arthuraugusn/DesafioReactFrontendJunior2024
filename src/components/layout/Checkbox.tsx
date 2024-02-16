import { updateStatusTodo } from "../../functions/EffectFunctions";
import ITodo from "../../interface/ITodo";
import Check from "../icons/Check";

export default function Checkbox(check: {
  todo: ITodo;
  todos: ITodo[];
  setListTodo: React.Dispatch<React.SetStateAction<ITodo[]>>;
}) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className={` appearance-none w-8 h-8  border border-gray-400 rounded-full outline-none cursor-pointer ${
          check.todo.isDone ? " border-green-500" : "border-black"
        } transition duration-700`}
        onChange={() => {
          updateStatusTodo(check.todos, check.todo, check.setListTodo);
        }}
      />
      <Check
        class={`absolute w-6 ml-1 text-green-600 transform transition/opacity duration-400 ease-in-out ${
          check.todo.isDone ? "block opacity-100 " : "hidden  opacity-0"
        } pointer-events-none`}
      />
    </div>
  );
}
