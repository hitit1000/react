import React from "react";
import { priceTableType } from "./use";

const MakePriceUpTable = (props: { data: string[]; table: priceTableType; updater: (data: priceTableType) => void; count: number }) => {
  const onChange = (e: any) => {
    let copy = props.table.map((v) => v.slice());
    switch (e.target.id) {
      case "type":
        copy[props.count][0] = e.target.value;
        props.updater(copy);
        break;
      case "content":
        copy[props.count][1] = e.target.value;
        props.updater(copy);
        break;
      case "ratio":
        let ratio = Number(e.target.value.replaceAll("%", ""));
        if (isNaN(ratio)) {
          copy[props.count][2] = "0%";
        } else {
          copy[props.count][2] = ratio.toLocaleString("ko-KR");
        }
        props.updater(copy);
        console.log(ratio);
        break;
    }
  };
  return (
    <>
      <>
        <tr>
          <td>
            <input type="text" id="type" value={props.data[0]} onChange={onChange} />
          </td>
          <td>
            <input type="text" id="content" value={props.data[1]} onChange={onChange} />
          </td>
          <td>
            <input type="text" id="ratio" value={props.data[2]} onChange={onChange} />
          </td>
          <td>??</td>
        </tr>
      </>
    </>
  );
};

export default MakePriceUpTable;
