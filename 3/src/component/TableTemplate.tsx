import { useState } from "react";
import TableTemplate2 from "./TableTemplate2";
import initData from "./initData.json";

type valueType =
  | string
  | {
      category: string;
      title: string;
      sub: string;
      price1: string;
      price2: string;
      price3: string;
      option: string;
    };

const TableTemplate = (data: valueType[]) => {
  const itemValue: valueType[][] = initData;
  const [item, setItem] = useState(initData);
  const formatPrice = (e: any) => {
    let price = e.target.value;
    price = Number(price.replaceAll(",", ""));
    if (isNaN(price)) {
      e.target.value = 0;
    } else {
      const format = price.toLocaleString("ko-KR");
      e.target.value = format;
    }
  };
  return (
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
          <th colSpan={5}>
            <input type="text" className="category" defaultValue={"친환경 인허가 업무"}></input>
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="tg-0lax">
            <input type="text" defaultValue={"허가시"}></input>
          </td>
          <td className="tg-0lax">
            <input type="text" defaultValue={"1.에너지절약 계획서"}></input>
          </td>
          <td className="tg-nrix" rowSpan={2}>
            <input type="text" defaultValue={"2,600,000"} onChange={formatPrice}></input>
          </td>
          <td className="tg-nrix" rowSpan={2}>
            <input type="text" defaultValue={"15,500,000"} onChange={formatPrice}></input>
          </td>
          <td className="tg-nrix" rowSpan={2}>
            <input type="text" defaultValue={"13,100,000"} onChange={formatPrice}></input>
          </td>
          <td className="tg-nrix" rowSpan={2}>
            <button type="button">-</button>
          </td>
        </tr>
        <tr>
          <td className="tg-0lax"></td>
          <td className="tg-0lax">
            <input type="text" defaultValue={"- 건축분야 도서 작성, 소비총량 평가"}></input>
          </td>
        </tr>
        {/* + */}
        <tr>
          <td className="tg-0lax">
            <input type="text" defaultValue={"허가시"}></input>
          </td>
          <td className="tg-0lax">
            <input type="text" defaultValue={"2. 저영향개발 사전협의"}></input>
          </td>
          <td className="tg-nrix" rowSpan={2}>
            <input type="text" defaultValue={""} onChange={formatPrice}></input>
          </td>
          <td className="tg-nrix" rowSpan={2}>
            <input type="text" defaultValue={"8,500,000"} onChange={formatPrice}></input>
          </td>
          <td className="tg-nrix" rowSpan={2}>
            <input type="text" defaultValue={"8,500,000"} onChange={formatPrice}></input>
          </td>
          <td className="tg-nrix" rowSpan={2}>
            <button type="button">-</button>
          </td>
        </tr>
        <tr>
          <td className="tg-0lax"></td>
          <td className="tg-0lax">
            <input type="text" defaultValue={"- 협의도서 작성 및 협의"}></input>
          </td>
        </tr>
        <tr>
          <td className="tg-0lax" colSpan={6}>
            <button type="button">+</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableTemplate;
