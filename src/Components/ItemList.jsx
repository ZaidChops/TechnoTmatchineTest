import React from "react";
import Item from "./Item";
import { useSelector } from "react-redux";

const ItemList = () => {
  const alldata = useSelector((state) => state.grocery.allData);

  return (
    <ul className="w-[103%] mx-auto flex flex-col items-center justify-center gap-3">
      {alldata.map((i) => {
        return <Item key={i.id} data={i} />;
      })}
    </ul>
  );
};

export default ItemList;
