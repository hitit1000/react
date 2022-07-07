import { useState } from "react";
import MakePriceUpTable from "./MakePriceUpTable";
import { detailType, priceTableType } from "./use";

const MakePriceTable = (props: { data: detailType[][]; priceDatas: priceTableType; updater: (data: priceTableType) => void }) => {
  props.priceDatas.map((x, index) => {
    return (
      <>
        <tr>
          <td>{x[0]}</td>
          <td>{x[1]}</td>
          <td>{x[2]}</td>
          <td>{x[3]}</td>
        </tr>
      </>
    );
  });

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
            <MakePriceUpTable key={index} data={x} table={props.priceDatas} count={index} updater={props.updater} />
          ))}
          <tr>
            <td className="tg-0lax" colSpan={4}>
              <button type="button" className="tablePlus">
                +
              </button>
            </td>
          </tr>
          <tr>
            <td colSpan={2}></td>
            <td>비율100%</td>
            <td>금액총액</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MakePriceTable;
