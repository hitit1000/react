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
  return (
    <thead>
      <tr>
        <th colSpan={5}>
          <input type="text" className="category" onChange={onChange} value={props.data[props.index]}></input>
        </th>
        <th>
          <button type="button" onClick={deleteTable}>
            -
          </button>
        </th>
      </tr>
    </thead>
  );
};

export default MakeCategory;
