import { useState } from "react";
import { JsxElement } from "typescript";
import CategoryTable from "./CategoryTable";
import initData from "./initData.json";
type detailType = {
  category: string;
  title: string;
  option: string;
  sub: string;
  price1: string;
  price2: string;
  price3: string;
};

type valueType = string | detailType;

const EstimateTable = () => {
  const [item, setItem] = useState(initData);
  let a: valueType = item[0][1];
  console.log(a);
  // console.log(a.title);
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
    <div className="Estimate">
      <div className="tables">
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
                <input type="text" className="category" defaultValue={`${item[0][0]}`}></input>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tg-0lax">
                <input type="text" defaultValue={`${item[0][1].sub}`}></input>
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

        {/* --------------------------table2--------------------------- */}
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
                <input type="text" className="category" defaultValue={"예비인증"}></input>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tg-0lax">
                <input type="text" defaultValue={"허가후"}></input>
              </td>
              <td className="tg-0lax">
                <input type="text" defaultValue={"1.녹색건축 예비인증"}></input>
              </td>
              <td className="tg-nrix" rowSpan={2}>
                <input type="text" defaultValue={"9,500,000"} onChange={formatPrice}></input>
              </td>
              <td className="tg-nrix" rowSpan={2}>
                <input type="text" defaultValue={"14,500,000"} onChange={formatPrice}></input>
              </td>
              <td className="tg-nrix" rowSpan={2}>
                <input type="text" defaultValue={"24,000,000"} onChange={formatPrice}></input>
              </td>
              <td className="tg-nrix" rowSpan={2}>
                <button type="button">-</button>
              </td>
            </tr>
            <tr>
              <td className="tg-0lax"></td>
              <td className="tg-0lax">
                <input type="text" defaultValue={"- 인증업무 컨설팅, 인증원 대관 업무"}></input>
              </td>
            </tr>
            {/* + */}
            <tr>
              <td className="tg-0lax">
                <input type="text" defaultValue={"허가후"}></input>
              </td>
              <td className="tg-0lax">
                <input type="text" defaultValue={"2. 건축물에너지효율등급 예비인증"}></input>
              </td>
              <td className="tg-nrix" rowSpan={2}>
                <input type="text" defaultValue={"19,800,000"} onChange={formatPrice}></input>
              </td>
              <td className="tg-nrix" rowSpan={2}>
                <input type="text" defaultValue={"13,500,000"} onChange={formatPrice}></input>
              </td>
              <td className="tg-nrix" rowSpan={2}>
                <input type="text" defaultValue={"33,300,000"} onChange={formatPrice}></input>
              </td>
              <td className="tg-nrix" rowSpan={2}>
                <button type="button">-</button>
              </td>
            </tr>
            <tr>
              <td className="tg-0lax"></td>
              <td className="tg-0lax">
                <input type="text" defaultValue={"- 인증업무 컨설팅, 인증원 대관 업무"}></input>
              </td>
            </tr>
            <tr>
              <td className="tg-0lax" colSpan={6}>
                <button type="button">+</button>
              </td>
            </tr>
          </tbody>
        </table>

        {/* --------------------------table3--------------------------- */}
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
                <input type="text" className="category" defaultValue={"본인증"}></input>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tg-0lax">
                <input type="text" defaultValue={"준공후"}></input>
              </td>
              <td className="tg-0lax">
                <input type="text" defaultValue={"1.녹색건축 본인증"}></input>
              </td>
              <td className="tg-nrix" rowSpan={2}>
                <input type="text" defaultValue={"14,200,000"} onChange={formatPrice}></input>
              </td>
              <td className="tg-nrix" rowSpan={2}>
                <input type="text" defaultValue={"16,000,000"} onChange={formatPrice}></input>
              </td>
              <td className="tg-nrix" rowSpan={2}>
                <input type="text" defaultValue={"30,200,000"} onChange={formatPrice}></input>
              </td>
              <td className="tg-nrix" rowSpan={2}>
                <button type="button">-</button>
              </td>
            </tr>
            <tr>
              <td className="tg-0lax"></td>
              <td className="tg-0lax">
                <input type="text" defaultValue={"- 현장인증업무 컨설팅, 인증원 대관 업무"}></input>
              </td>
            </tr>
            {/* + */}
            <tr>
              <td className="tg-0lax">
                <input type="text" defaultValue={"준공후"}></input>
              </td>
              <td className="tg-0lax">
                <input type="text" defaultValue={"2. 건축물에너지효율등급 본인증"}></input>
              </td>
              <td className="tg-nrix" rowSpan={2}>
                <input type="text" defaultValue={"19,800,000"} onChange={formatPrice}></input>
              </td>
              <td className="tg-nrix" rowSpan={2}>
                <input type="text" defaultValue={"15,000,000"} onChange={formatPrice}></input>
              </td>
              <td className="tg-nrix" rowSpan={2}>
                <input type="text" defaultValue={"34,800,000"} onChange={formatPrice}></input>
              </td>
              <td className="tg-nrix" rowSpan={2}>
                <button type="button">-</button>
              </td>
            </tr>
            <tr>
              <td className="tg-0lax"></td>
              <td className="tg-0lax">
                <input type="text" defaultValue={"- 현장인증업무 컨설팅, 인증원 대관 업무"}></input>
              </td>
            </tr>
            <tr>
              <td className="tg-0lax" colSpan={6}>
                <button type="button">+</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EstimateTable;
