import React, { useRef } from "react";
import { useStateValue } from "../store/StateProvider";

function SearchForm() {
  const { setSearchTerm } = useStateValue();
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputRef.current.value);
  };

  return (
    <form
      className="p-10 shadow-lg w-full bg-white rounded-md flex"
      onSubmit={handleSubmit}
    >
      <input
        className="border rounded-md rounded-r-none bg-slate-200 p-2 w-full"
        ref={inputRef}
      />
      <button
        type="submit"
        className="py-2 bg-green-700 text-white px-5 rounded-r-md"
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
