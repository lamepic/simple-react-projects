import React, { memo } from "react";

function FollowerCard({ data }) {
  console.log("redering followers");
  return (
    <div className="bg-white p-10 rounded-lg flex flex-col items-center gap-5">
      <div>
        <img src={data.avatar_url} className="h-28 w-28 rounded-full" />
      </div>
      <p className="uppercase">{data.login}</p>
      <button className="text-white bg-blue-300 px-3 py-1 rounded-full">
        View Profile
      </button>
    </div>
  );
}

export default FollowerCard;
