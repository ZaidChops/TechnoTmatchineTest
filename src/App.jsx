import React from "react";
import Heading from "./Components/Heading";
import ItemList from "./Components/ItemList";
import Form from "./Components/Form";
import { useDispatch } from "react-redux";
import { allDelete } from "./Redux/itemSlice";

const App = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-gradient-to-r from-sky-600 to-blue-700 w-96 h-auto p-4">
      <div className="flex flex-col items-center justify-center bg-[#232a46] rounded-xl gap-2 py-5 px-1 w-full">
        <Heading />
        <ItemList />
        <Form />
        <button className="bg-white text-black px-1 rounded-sm mt-4" onClick={() => dispatch(allDelete())}>Delete List</button>
      </div>
    </div>
  );
};

export default App;
