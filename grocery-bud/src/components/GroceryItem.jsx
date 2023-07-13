import React, { useState } from "react";

function GroceryItem({ item, handleDelete }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center w-full">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(!checked)}
      />
      <p className={`ml-3 capitalize ${checked && "line-through"}`}>
        {item.title}
      </p>
      <button
        className="bg-black rounded-sm text-white ml-auto px-1 text-sm"
        onClick={() => handleDelete(item.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default GroceryItem;
