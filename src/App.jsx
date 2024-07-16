import "./App.css";
import Todo from "./coponents/Todo";
import TodoHeading from "./coponents/TodoHeading";
import TodoItem from "./coponents/TodoItem";
import { TodoProvider } from "./context";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((preId) => preId.id !== id));
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((eachElem) => (eachElem.id === id ? todo : eachElem))
    );
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((eachElem) =>
        eachElem.id === id
          ? { ...eachElem, checked: !eachElem.checked }
          : eachElem
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleTodo }}
    >
      <div className=" h-screen w-full bg-black flex justify-center pt-[10vh] flex-col items-center">
        <div className=" w-[50%] input-container">
          <TodoHeading />
          <Todo />
        </div>
        <div className="p-2 w-[50%] todo-container flex flex-col items-center">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
