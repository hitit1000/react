import { useState } from "react";
import MakePriceDownTable from "./MakePriceDownTable";
import MakePriceUpTable from "./MakePriceUpTable";
import { detailType, priceTableType } from "./use";

const MakePriceTable = (props: {
  data: detailType[][];
  priceDatas: priceTableType;
  updater: (data: priceTableType) => void;
  category: string[];
  commission: boolean;
}) => {
  const totalPrice = () => {
    let price = 0;
    props.data.map((x) => x.map((y) => (price += Number(props.commission ? y.price3.replaceAll(",", "") : y.price2.replaceAll(",", "")))));
    return price.toLocaleString("ko-KR");
  };
  const subPrice = () => {
    let price = 0;
    props.data.map((x) => x.map((y) => (price += Number(y.price2.replaceAll(",", "")))));
    return price;
  };
  const percentage = () => {
    let percentage = 0;
    props.priceDatas.map((x) => (percentage += Number(x[2])));
    if (percentage < 100) {
      console.log("적음");
    } else if (percentage === 100) {
      console.log("딱 맞음");
    } else {
      console.log("넘음");
    }
    return String(percentage) + "%";
  };
  const addPriceTable = () => {
    let copy = props.priceDatas.map((v) => v.slice());
    copy.push(["", "", "", "", ""]);
    props.updater(copy);
  };
  return (
    <div className="pirceTable">
      <table className="tg">
        <colgroup>
          <col className="col1"></col>
          <col className="col2"></col>
          <col className="col3"></col>
          <col className="col4"></col>
          <col className="col5"></col>
          <col className="col6"></col>
        </colgroup>
        <thead>
          <tr>
            <th>구분</th>
            <th>지급시기</th>
            <th>비율</th>
            <th>지급금액(원)</th>
          </tr>
        </thead>
        <tbody>
          {props.priceDatas.map((x, index) => (
            <MakePriceUpTable key={index} data={x} table={props.priceDatas} count={index} updater={props.updater} price={subPrice()} />
          ))}
          {props.commission
            ? props.data.map((x, index) => {
                return <MakePriceDownTable data={props.data} index={index} key={index} category={props.category} />;
              })
            : null}
          <tr>
            <td className="tg-0lax" colSpan={4}>
              <button type="button" className="tablePlus" onClick={addPriceTable}>
                +
              </button>
            </td>
          </tr>
          <tr>
            <td colSpan={2}></td>
            <td className="totalRatio">{percentage()}</td>
            <td>{totalPrice()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MakePriceTable;
