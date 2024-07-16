import { createContext, useContext } from "react";

export const  todosContext = createContext({
    todos: [
        {
            id: Date.now(),
            text: 'i am going to delhi',
            checked: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    toggleTodo: (id) => {},
    deleteTodo: (id) => {}
})

export const useTodo = () => {
    return useContext(todosContext)
}

export const TodoProvider = todosContext.Provider