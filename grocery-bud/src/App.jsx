import { useState } from "react";
import GroceryItem from "./components/GroceryItem";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.length != 0) {
      const newItem = {
        id: items.length + 1,
        title: item,
      };
      setItems([...items, newItem]);
      setItem("");
      toast.success("Item added to the list");
    } else {
      toast.error("Please Provide a Value");
    }
  };

  const handleDelete = (id) => {
    const newItems = items.filter((item) => item.id != id);
    setItems(newItems);
    toast.success("Item deleted");
  };

  return (
    <div className="bg-white rounded-md py-5 px-10 shadow-sm hover:shadow-md duration-300 mt-32 mx-auto w-[30%]">
      <p className="text-2xl text-center">Grocery Bud</p>
      <form className="w-full mt-4" onSubmit={handleSubmit}>
        <div className="flex items-center">
          <input
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className="border border-gray-200 pl-2 flex-1 w-full h-8 rounded-l-md bg-[#F7FAFC]"
          />
          <button className="px-5 bg-teal-500 text-white rounded-r-md h-8 hover:bg-teal-700 duration-200 p-1">
            Add Item
          </button>
        </div>
      </form>

      <div className="w-full mt-7 space-y-2 pb-3">
        {items.map((item) => {
          return (
            <GroceryItem
              item={item}
              key={item.id}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>

      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
