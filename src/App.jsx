import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todoitems from "./components/Todoitems";
import "./App.css";
import Welcome from "./components/Welcome";
import { useState } from "react";
function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleAddTodo = (todoName, todoDate) => {
    const newTodo = {
      name: todoName,
      dueDate: todoDate,
    };
    setTodoItems([...todoItems, newTodo]);
  };

  const onDeleteclcik = (deleteIndex) => {
    const updatedTodos = todoItems.filter((_, index) => index !== deleteIndex);
    setTodoItems(updatedTodos);
  };

  return (
    <center className="tudoContainer">
      <AppName />
      <AddTodo onAddTodo={handleAddTodo} />
      {todoItems.length === 0 && <Welcome />}
      <Todoitems TodoItems={todoItems} onDelete={onDeleteclcik} />
    </center>
  );
}

export default App;
