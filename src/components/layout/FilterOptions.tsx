import { handleFilter } from "../../functions/HandleFunctions";
import IFilter from "../../interface/IFilter";

export default function FilterOptions(options: {
  value: string;
  setFilter: React.Dispatch<React.SetStateAction<IFilter>>;
  filter: IFilter;
  setActive: React.Dispatch<React.SetStateAction<string | null>>;
  isClicked: boolean;
}) {
  return (
    <li
      className={`group inline-block ${
        options.isClicked ? "shadow shadow-red-500 inline-block" : ""
      } hover:border hover:border-red-700 cursor-pointer p-2`}
      onClick={(e) => {
        handleFilter(e, options.setFilter);
        options.setActive(e.currentTarget.textContent);
      }}
    >
      {options.value}
    </li>
  );
}
