import { useEffect, useState } from "react";
import { JsxElement } from "typescript";
import initData from "./initData.json";
import initCategory from "./initCategory.json";
import MakeTable from "./MakeTable";
import MakeSum from "./MakeSum";
import MakeInfo from "./MakeInfo";

export type detailType = {
  category: string;
  title: string;
  option: string;
  sub: string[];
  price1: string;
  price2: string;
  price3: string;
};
const AllTable = () => {
  const [item, setItem] = useState(initData);
  const [category, setCategory] = useState(initCategory);
  const [detail, setDetail] = useState(false);
  const updateItem = (data: detailType[][]) => {
    setItem(data);
  };
  const updateCategory = (data: string[]) => {
    setCategory(data);
  };
  const createTable = () => {
    const empty: detailType = { category: "empty", title: "empty", option: "empty", sub: ["empty"], price1: "0", price2: "0", price3: "0" };
    let copy = item.map((v) => v.slice());
    copy.push([empty]);
    setItem(copy);
    let copy2 = [...category];
    copy2.push("empty");
    setCategory(copy2);
  };
  const simpleAndDetail = (e: any) => {
    setDetail(e.target.checked);
  };
  return (
    <div className="Estimate">
      <label htmlFor="detail">simple(F)/detail(T)</label>
      <input type="checkbox" id="detail" onChange={simpleAndDetail}></input>
      <div className="tables">
        <MakeInfo />
        {item.map((item22: detailType[], index: number) => (
          <MakeTable data={item} key={index} index={index} category={category} updater={updateItem} updater2={updateCategory} detail={detail} />
        ))}
        <button type="button" onClick={createTable}>
          +
        </button>
        <MakeSum data={item} />
      </div>
    </div>
  );
};

export default AllTable;
