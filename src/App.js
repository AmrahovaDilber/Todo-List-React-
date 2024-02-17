import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(index) {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  }
  return (
    <div className="container">
      <Form handleAddItem={handleAddItem}></Form>
      <List items={items} handleDeleteItems={handleDeleteItems}></List>
    </div>
  );
}

export default App;
