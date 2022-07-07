import MakeCategory from "./MakeCategory";
import MakeItem from "./MakeItem";
import { detailType } from "./AllTable";
import { useEffect } from "react";

const MakeTable = (props: {
  data: detailType[][];
  category: string[];
  updater: (data: detailType[][]) => void;
  index: number;
  updater2: (data: string[]) => void;
  detail: boolean;
}) => {
  const plusTable = () => {
    let copy = props.data.map((v) => v.slice());
    let a = copy[props.index];
    let b: detailType = { category: "empty", title: "empty", option: "empty", sub: ["empty"], price1: "0", price2: "0", price3: "0" };
    if (a.length !== 0) {
      b = { ...a[a.length - 1] };
      b.sub = [...b.sub];
    }
    a.push(b);
    copy[props.index] = a;
    props.updater(copy);
  };
  return (
    <>
      <table className="tg">
        <colgroup>
          <col className="col1"></col>
          <col className="col2"></col>
          <col className="col3"></col>
          <col className="col4"></col>
          <col className="col5"></col>
          <col className="col6"></col>
        </colgroup>
        <MakeCategory data={props.category} index={props.index} updater={props.updater} updater2={props.updater2} item={props.data} />
        <tbody>
          {props.data[props.index].map((data2: detailType, index: number) => (
            <MakeItem data={props.data} key={index} index={index} updater={props.updater} tableCount={props.index} detail={props.detail}/>
          ))}
          <tr>
            <td className="tg-0lax" colSpan={6}>
              <button type="button" onClick={plusTable} className="tablePlus">
                +
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default MakeTable;
