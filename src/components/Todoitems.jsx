import TodoItem from "./TodoItem";

const TodoItems = ({ TodoItems, onDelete }) => {
  return (
    <div className="item">
      {TodoItems.map((item, index) => (
        <TodoItem
          key={index}
          todoName={item.name}
          todoDate={item.dueDate}
          onDelete={onDelete}
          index={index}
        />
      ))}
    </div>
  );
};

export default TodoItems;
