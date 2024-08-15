import React, { useState, useContext } from "react";
import { useStateContext } from "../context/userContext";

const HomePage = () => {
  const [display, setDisplay] = useState(null);
  const { isClicked, handleClick } = useStateContext();
  return (
    <div>
      <h1 className="font-bold text-4xl">This is the Home Page</h1>
      <div className="flex w-[50%] mt-4 mx-auto justify-between">
        <button
          className="p-2 border-2 rounded-lg"
          onClick={() => handleClick("page_1")}
        >
          Page_1
        </button>
        <button
          className="p-2 border-2 rounded-lg"
          onClick={() => handleClick("page_2")}
        >
          Page_2
        </button>
        <button
          className="p-2 border-2 rounded-lg"
          onClick={() => handleClick("page_3")}
        >
          Page_3
        </button>
      </div>
      <div className="text mt-5">
        {isClicked?.page_1 && <p>This is Page 1</p>}
        {isClicked?.page_2 && <p>This is Page 2</p>}
        {isClicked?.page_3 && <p>This is Page 3</p>}
      </div>
    </div>
  );
};

export default HomePage;
