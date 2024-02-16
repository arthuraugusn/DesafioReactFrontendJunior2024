import { useState } from "react";
import {
  handleBlur,
  handleDoubleClick,
  handleInput,
} from "../../functions/HandleFunctions";

export default function EditableLable(check: {
  isChecked: boolean;
  todoTitle: string;
}) {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [content, setContent] = useState<string>(check.todoTitle);

  return (
    <>
      {isEditable ? (
        <input
          type="text"
          name=""
          id=""
          value={content}
          onBlur={() => handleBlur(setIsEditable)}
          className={`ml-6 border  border-red-300 outline-red-500 w-full p-2 transition-all duration-300 ease-in-out group-hover:line-through   ${
            check.isChecked ? "line-through text-gray-400 " : ""
          }`}
          onChange={(e) => handleInput(e, setContent)}
          onKeyDownCapture={(event) => {
            if (event.key === "Enter") {
              setContent(event.currentTarget.value);
              event.preventDefault();
              handleBlur(setIsEditable);
            }
          }}
        />
      ) : (
        <label
          className={` w-full select-none pl-6 transition-all duration-300 ease-in-out group-hover:line-through cursor-text  ${
            check.isChecked ? "line-through text-gray-400 " : ""
          }`}
          onDoubleClick={() => handleDoubleClick(setIsEditable)}
        >
          {content}
        </label>
      )}
    </>
  );
}
