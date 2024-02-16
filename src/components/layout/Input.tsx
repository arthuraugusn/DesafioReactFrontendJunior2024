import { updateAllStatusTodo } from "../../functions/EffectFunctions";
import { handleKeyPress } from "../../functions/HandleFunctions";
import ITodo from "../../interface/ITodo";

import Down from "../icons/Down";

export default function Input(setTodo: {
  todoList: ITodo[];
  setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>;
  setTodo: React.Dispatch<React.SetStateAction<ITodo | undefined>>;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <header className="flex items-center justify-center shadow-[gray_0px_6px_12px_-2px,gray_0px_3px_7px_-3px] bg-white border">
      <div
        onClick={() => {
          updateAllStatusTodo(setTodo.todoList, setTodo.setTodoList);
        }}
        className=""
      >
        <Down
          class={"w-6 mx-6 text-gray-400"} /* setChecked={setTodo.setChecked} */
        />
      </div>

      <input
        type="text"
        placeholder="What needs to be done ?"
        name=""
        id=""
        onKeyDownCapture={(event) => {
          handleKeyPress(event, setTodo.setTodo);
        }}
        className="w-[550px] input_todo outline-none py-5 text-2xl "
      />
    </header>
  );
}
