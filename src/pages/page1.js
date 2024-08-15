import React, { useState } from "react";

const Page1 = () => {
  const [display, setDisplay] = useState(null);
  return (
    <div>
      <h1 className="font-bold text-4xl">This is Page1</h1>
      <div className="flex w-[50%] mt-4 mx-auto justify-between">
        <button className="p-2 border-2 rounded-lg">Page_1</button>
        <button className="p-2 border-2 rounded-lg">Page_2</button>
        <button className="p-2 border-2 rounded-lg">Page_3</button>
      </div>
    </div>
  );
};

export default Page1;
