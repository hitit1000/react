import React from "react";

import { detailType } from "./use";

const MakeSub = (props: { data: detailType[][]; index: number; updater: (data: detailType[][]) => void; tableCount: number; count: number; detail: boolean }) => {
  const onChange = (e: any) => {
    let copy = [...props.data];
    copy[props.tableCount][props.index].sub[props.count] = e.target.value;
    props.updater(copy);
  };

  const deleteSub = () => {
    let copy = props.data.map((v) => v.slice());
    copy[props.tableCount][props.index].sub.splice(props.count, 1);
    props.updater(copy);
  };
  return (
    <>
      <tr>
        <td className="tg-0lax"></td>
        <td className="tg-0lax">
          <input type="text" id="sub" onChange={onChange} value={props.data[props.tableCount][props.index].sub[props.count]}></input>
          {props.detail ? (
            <button type="button" className="deleteSub" onClick={deleteSub}>
              -
            </button>
          ) : null}
        </td>
      </tr>
    </>
  );
};

export default MakeSub;
