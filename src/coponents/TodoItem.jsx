import React, { useState } from "react";
import { useTodo } from "../context";

const TodoItem = ({ todo }) => {
  const { updateTodo, toggleTodo, deleteTodo } = useTodo();
  const [isTodoEditable, setisTodoEditable] = useState(false);
  const [todoMsg, settodoMsg] = useState(todo.todo);

  const editTodo = () => {
    updateTodo(todo.id, { todo: todoMsg });
  };

  const toggelcompleted = () => {
    console.log(toggleTodo(todo.id));
  };
  return (
    <div className=" w-full  flex ">
      <div
        className={`w-full border-radius flex items-center  m-[2vh] ${
          todo.checked ? "bg-green-200" : "bg-red-200"
        }`}
      >
        <div className=" flex shrink-0 w-full p-3 justify-between items-center">
          <div className=" w-[80%] gap-x-2 flex">
            <input
              type="checkbox"
              checked={todo.checked}
              onChange={toggelcompleted}
            />

            <input
              type="text"
              className={`outline-none w-[80%] bg-transparent rounded-lg capitalize font-semibold ${
                isTodoEditable ? "border-black p-2" : "border-transparent"
              } ${todo.checked ? " line-through" : ""}`}
              value={todoMsg}
              onChange={(e) => settodoMsg(e.target.value)}
              readOnly={!isTodoEditable}
            />
          </div>

          <div className="flex gap-x-2">
            <button
              className=" inline-flex h-10 rounded-lg text-sm border border-black/10 justify-center items-center bg-green-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 edit-button"
              onClick={() => {
                if (todo.checked) return;

                if (isTodoEditable) {
                  editTodo();
                } else {
                  setisTodoEditable((prev) => !prev);
                }
              }}
              disabled={todo.checked}
            >
              {isTodoEditable ? "📁" : "✏️"}
            </button>
            <button
              className=" edit-button inline-flex h-10 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 item-end"
              onClick={() => deleteTodo(todo.id)}
            >
              ❌
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
