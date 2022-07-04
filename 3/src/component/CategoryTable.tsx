import React from "react";
import DetailItem from "./DetailItem";
import { initType } from "./DetailItems";

const initValue: initType[] = [
  {
    category: "친환경 인허가 업무",
    title: "1.에너지절약 계획서",
    sub: "- 건축분야 도서 작성, 소비총량 평가",
    price1: "2,600,000",
    price2: "15,500,000",
    price3: "13,100,000",
    option: "허가시",
  },
  {
    category: "예비인증",
    title: "1.녹색건축 예비인증",
    sub: "- 인증업무 컨설팅, 인증원 대관 업무",
    price1: "9,500,000",
    price2: "14,500,000",
    price3: "24,000,000",
    option: "허가후",
  },
  {
    category: "본인증",
    title: "1.녹색건축 본인증",
    sub: "- 현장인증업무 컨설팅, 인증원 대관 업무",
    price1: "14,200,000",
    price2: "16,000,000",
    price3: "30,200,000",
    option: "준공후",
  },
];
const CategoryTable = () => {
  return (
    <>
      <div className="tables">
        <table className="tg">
          <colgroup>
            <col className="col1"></col>
            <col className="col2"></col>
            <col className="col3"></col>
            <col className="col4"></col>
            <col className="col5"></col>
          </colgroup>
          <thead>
            <tr>
              <th colSpan={5}>
                <input type="text" className="category" defaultValue={"친환경 인허가 업무"}></input>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tg-0lax" colSpan={5}>
                <button type="button">+</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CategoryTable;
