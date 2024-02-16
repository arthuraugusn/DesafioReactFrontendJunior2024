import IFilter from "../interface/IFilter";
import ITodo from "../interface/ITodo";
import { v4 as uuidv4 } from "uuid";

function handleKeyPress(
  event: React.KeyboardEvent<HTMLInputElement>,
  setValue: React.Dispatch<React.SetStateAction<ITodo | undefined>>
) {
  if (event.key === "Enter") {
    let value = event.currentTarget.value;
    if (value !== "") {
      let uuid = uuidv4();
      const todo: ITodo = {
        id: uuid,
        title: value,
        isDone: false,
      };
      setValue(todo);
      event.currentTarget.value = "";
    }
  }
}

function handleDoubleClick(
  setIsEditable: React.Dispatch<React.SetStateAction<boolean>>
) {
  setIsEditable(true);
}

function handleInput(
  e: React.ChangeEvent<HTMLInputElement>,
  setContent: React.Dispatch<React.SetStateAction<string>>
) {
  setContent(e.currentTarget.value);
}

function handleBlur(
  setIsEditable: React.Dispatch<React.SetStateAction<boolean>>
) {
  setIsEditable(false);
}

function handleExclude(
  todo: ITodo,
  listTodo: ITodo[],
  setListTodo: React.Dispatch<React.SetStateAction<ITodo[]>>
) {
  const newTodo = listTodo.filter((item) => item !== todo);
  setListTodo(newTodo);
}

function handleFilter(
  e: React.MouseEvent<HTMLLIElement, MouseEvent>,
  setFilter: React.Dispatch<React.SetStateAction<IFilter>>
) {
  switch (e.currentTarget.textContent) {
    case "All":
      setFilter({ value: "All", statusFilter: null });
      break;

    case "Active":
      setFilter({ value: "Active", statusFilter: true });
      break;
    case "Completed":
      setFilter({ value: "Completed", statusFilter: false });
      break;
  }
}

export {
  handleKeyPress,
  handleDoubleClick,
  handleInput,
  handleBlur,
  handleExclude,
  handleFilter,
};
