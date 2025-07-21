import { useState } from "react";

function AddTodo({ onAddTodo }) {
  const [inputText, setInputText] = useState("");
  const [inputDate, setInputDate] = useState("");

  let handleInput = (event) => {
    setInputText(event.target.value);
  };

  let handleDate = (event) => {
    setInputDate(event.target.value);
  };

  const handleAdd = () => {
    if (inputText.trim() !== "" && inputDate !== "") {
      onAddTodo(inputText, inputDate);
      setInputText(""); // Clear input
      setInputDate(""); // Clear date
    } else {
      alert("Please enter both todoName and Date");
    }
  };

  return (
    <div className="container text-center   ">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter todo here"
            onChange={handleInput}
            value={inputText}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDate} value={inputDate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleAdd}
            disabled={!inputText.trim() || !inputDate}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
