import React from "react";
import { useDispatch } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { deleteData, editData } from "../Redux/itemSlice";

const Item = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <li className="flex w-[90%] mx-auto justify-between">
      <div className="bg-gradient-to-r from-[#684dfb] to-[#9d54fd] w-[80%] rounded-sm p-1">
        {data.text}
      </div>
      <button onClick={() => dispatch(deleteData(data.id))}>
        <RiDeleteBin6Line className="text-xl" />
      </button>
      <button onClick={() => dispatch(editData(data))}>
        <BiEdit className="text-xl" />
      </button>
    </li>
  );
};

export default Item;
