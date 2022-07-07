import React from "react";
import { detailType } from "./AllTable";

const MakeCategory = (props: { data: string[]; index: number; updater: (data: detailType[][]) => void; updater2: (data: string[]) => void; item: detailType[][] }) => {
  const onChange = (e: any) => {
    let copy = [...props.data];
    copy[props.index] = e.target.value;
    props.updater2(copy);
  };
  const deleteTable = () => {
    let copy = props.item.map((v) => v.slice());
    copy.splice(props.index, 1);
    props.updater(copy);

    let copy2 = [...props.data];
    copy2.splice(props.index, 1);
    props.updater2(copy2);
  };

  const priceSum = (number: number) => {
    let copy = props.item.map((v) => v.slice());
    let total = 0;
    copy[props.index].forEach((x, index) => {
      switch (number) {
        case 0:
          total += Number(x.price1.replaceAll(",", ""));
          break;
        case 1:
          total += Number(x.price2.replaceAll(",", ""));
          break;
        case 2:
          total += Number(x.price3.replaceAll(",", ""));
          break;
      }
    });
    return total.toLocaleString("ko-KR");
  };
  return (
    <thead>
      <tr>
        <th colSpan={2}>
          <input type="text" className="category" onChange={onChange} value={props.data[props.index]}></input>
        </th>
        <th>{priceSum(0)}</th>
        <th>{priceSum(1)}</th>
        <th>{priceSum(2)}</th>
        <th>
          <button type="button" onClick={deleteTable} className="tableMinus">
            -
          </button>
        </th>
      </tr>
    </thead>
  );
};

export default MakeCategory;
