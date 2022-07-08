import { useState } from "react";
import MakeTable from "./MakeTable";
import MakeSum from "./MakeSum";
import MakeInfo from "./MakeInfo";
import { detailType } from "./use";

const AllTable = (props: { item: detailType[][]; setItem: (data: detailType[][]) => void; category: string[]; setCategory: (data: string[]) => void }) => {
  const [detail, setDetail] = useState(false);
  const createTable = () => {
    const empty: detailType = { category: "empty", title: "empty", option: "empty", sub: ["empty"], price1: "0", price2: "0", price3: "0" };
    let copy = props.item.map((v) => v.slice());
    copy.push([empty]);
    props.setItem(copy);
    let copy2 = [...props.category];
    copy2.push("empty");
    props.setCategory(copy2);
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
          <MakeTable data={props.item} key={index} index={index} category={props.category} updater={props.setItem} updater2={props.setCategory} detail={detail} />
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
