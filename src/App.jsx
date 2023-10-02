import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//My names are horrible, sorry. I didn't quite understand what I was naming until I was in too deep and then didn't want to confuse myself by changing them after

function App() {
  const [textContent, setTextContent] = useState("");
  const [itemStatus, setItemStatus] = useState(["Ready", "Set", "GO"]);

  //i want it to clear out when i hit add item
  //when i hit add item, i want it to clear out
  //"it" is the text in the input field, which you would find the value of it is "textContent"
  //make change to the form
  return (
    <>
      <h1>Todo</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          setItemStatus([...itemStatus, textContent]);
          setTextContent("");
        }}
      >
        <input
          type="text"
          name="todoInput"
          id="todoInput"
          value={textContent}
          onChange={(event) => setTextContent(event.target.value)}
        />

        <button>Add Todo Item</button>
      </form>
      <h2>List of Things to Do</h2>
      <ul>
        {itemStatus.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
