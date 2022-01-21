import { useState } from "react";
import "./TodoApp.css";
function TodoApp() {
  const [todoValue, setTodoValue] = useState("");
  const [todoArray, setTodoArray] = useState([]);

  const handleChange = (event) => {
    // console.log(event.target.value);
    setTodoValue(event.target.value);
  };

  const addTodo = () => {
    if (todoValue == "") {
      alert("enter Value");
    } else {
      // console.log(todoValue);
      setTodoArray((previousArray) => {
        //   console.log("Todo", todo);

        return [...previousArray, todoValue];
      });
      setTodoValue("");
    }
  };

  const deltBtn = (e) => {
    const newTodos = [...todoArray];
    newTodos.splice(e, 1);
    setTodoArray(newTodos);
  };

  return (
    <div className="mainDiv">
      <h1>TODO APPLICATION</h1>

      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter Todo"
        value={todoValue}
      />
      {/* <button>Add Todo</button> */}
      <i onClick={addTodo} className="fas fa-plus-circle"></i>

      <ul>
        {todoArray.map((item, index) => {
          return (
            <li
              key={index}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {index + 1}) {item}
              <div>
                <i
                  className="far fa-trash-alt"
                  onClick={() => {
                    deltBtn(index);
                  }}
                ></i>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoApp;
