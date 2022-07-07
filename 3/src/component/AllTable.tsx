import { useState } from "react";
import { JsxElement } from "typescript";
import initData from "./initData.json";
import initCategory from "./initCategory.json";
import initPriceTable from "./initPriceTable.json";
import MakeTable from "./MakeTable";
import MakeSum from "./MakeSum";
import MakeInfo from "./MakeInfo";
import { detailType } from "./use";

const AllTable = (props: { item: detailType[][]; setItem: (data: detailType[][]) => void }) => {
  const [category, setCategory] = useState(initCategory);
  const [detail, setDetail] = useState(false);

  const updateCategory = (data: string[]) => {
    setCategory(data);
  };
  const createTable = () => {
    const empty: detailType = { category: "empty", title: "empty", option: "empty", sub: ["empty"], price1: "0", price2: "0", price3: "0" };
    let copy = props.item.map((v) => v.slice());
    copy.push([empty]);
    props.setItem(copy);
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
        {props.item.map((item22: detailType[], index: number) => (
          <MakeTable data={props.item} key={index} index={index} category={category} updater={props.setItem} updater2={updateCategory} detail={detail} />
        ))}
        <button type="button" onClick={createTable}>
          +
        </button>
        <MakeSum data={props.item} />
      </div>
    </div>
  );
};

export default AllTable;
