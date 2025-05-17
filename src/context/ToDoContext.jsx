import { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title, note, color) => {
    const newTodo = {
      id: uuidv4(),
      title,
      note,
      color,
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const updateTodo = (id, newTitle, newNote, newColor) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, title: newTitle, note: newNote, color: newColor }
          : todo
      )
    );
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  return (
    <TodoContext.Provider
      value={{
        todos,
        filteredTodos,
        addTodo,
        updateTodo,
        toggleComplete,
        deleteTodo,
        filter,
        setFilter,
      }}>
      {children}
    </TodoContext.Provider>
  );
};
