import { useEffect, useState } from "react";
import { JsxElement } from "typescript";
import initData from "./initData.json";
import initCategory from "./initCategory.json";
import MakeTable from "./MakeTable";

export type detailType = {
  category: string;
  title: string;
  option: string;
  sub: string;
  price1: string;
  price2: string;
  price3: string;
};
const AllTable = () => {
  const [item, setItem] = useState(initData);
  const [category, setCategory] = useState(initCategory);
  const updateItem = (data: detailType[][]) => {
    setItem(data);
  };
  const updateCategory = (data: string[]) => {
    setCategory(data);
  };
  const createTable = () => {
    const empty: detailType = { category: "empty", title: "empty", option: "empty", sub: "empty", price1: "empty", price2: "empty", price3: "empty" };
    let copy = item.map((v) => v.slice());
    copy.push([empty]);
    setItem(copy);
    let copy2 = [...category];
    copy2.push("empty");
    setCategory(copy2);
  };
  return (
    <div className="Estimate">
      <div className="tables">
        {item.map((item22: detailType[], index: number) => (
          <MakeTable data={item} key={index} index={index} category={category} updater={updateItem} updater2={updateCategory} />
        ))}
        <button type="button" onClick={createTable}>
          +
        </button>
      </div>
    </div>
  );
};

export default AllTable;
