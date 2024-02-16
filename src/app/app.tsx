import InputTodoFilter from "../components/layout/InputTodoFilter";

export default function App() {
  return (
    <>
      <section className="flex items-center p-5 flex-col  ">
        <h1 className="text-red-500 text-7xl font-semibold mb-6">todos</h1>
        <InputTodoFilter />
      </section>
      <footer className="flex mt-20 flex-col text-center text-[0.8rem] flex mb-4">
        <p>Double-click to edit a todo</p>
        <p>Created by the TodoMVC Team</p>
        <p>Part of TodoMVC</p>
      </footer>
    </>
  );
}
