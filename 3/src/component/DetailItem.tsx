import React from "react";
import { initType } from "./DetailItems";

type Props = {
  init: initType;
};

const DetailItem = ({ init }: Props) => {
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
    <>
      <tr>
        <td className="tg-0lax">
          <input type="text" defaultValue={init.option}></input>
        </td>
        <td className="tg-0lax">
          <input type="text" defaultValue={init.title}></input>
        </td>
        <td className="tg-nrix" rowSpan={2}>
          <input type="text" defaultValue={init.price1} onChange={formatPrice}></input>
        </td>
        <td className="tg-nrix" rowSpan={2}>
          <input type="text" defaultValue={init.price2} onChange={formatPrice}></input>
        </td>
        <td className="tg-nrix" rowSpan={2}>
          <input type="text" defaultValue={init.price3} onChange={formatPrice}></input>
        </td>
      </tr>
      <tr>
        <td className="tg-0lax"></td>
        <td className="tg-0lax">
          <input type="text" defaultValue={init.sub}></input>
        </td>
      </tr>
    </>
  );
};

export default DetailItem;
