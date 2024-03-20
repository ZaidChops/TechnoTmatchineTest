import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, updateData } from "../Redux/itemSlice";

const Form = () => {
  const dispatch = useDispatch();
  const editdata = useSelector((state) => state.grocery.editList);
  const [text, setText] = useState("");
  //   console.log(editdata);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editdata.isEdit) {
      dispatch(updateData({ id: editdata.data.id, text }));
    } else dispatch(addData({ id: crypto.randomUUID(), text }));
    setText("");
  };

  useEffect(() => {
    if (editdata.isEdit) setText(editdata.data.text);
  }, [editdata]);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="flex items-center justify-between gap-2 bg-gradient-to-r from-[#684dfb] to-[#9d54fd] p-1 mt-4">
        <input
          type="text"
          placeholder="Add something to your list"
          className="text-[#fffcfc] bg-[#232a46] px-6 py-1 w-60"
          onChange={(e) => setText(e.target.value)}
          value={text}
          required
        />
        <button type="submit">
          {!editdata.isEdit ? "Add" : "Update"}
        </button>
      </div>
    </form>
  );
};

export default Form;
