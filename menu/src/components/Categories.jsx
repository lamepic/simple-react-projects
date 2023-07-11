import React from "react";
import Card from "./Card";

function Categories({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
      {data.map((item) => {
        return <Card data={item} key={item.id} />;
      })}
    </div>
  );
}

export default Categories;
