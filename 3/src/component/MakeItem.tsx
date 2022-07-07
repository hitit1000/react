import React, { useEffect } from "react";
import { detailType } from "./AllTable";
import MakeSub from "./MakeSub";

const MakeItem = (props: { data: detailType[][]; index: number; updater: (data: detailType[][]) => void; tableCount: number; detail: boolean }) => {
  const formatPrice = (e: any) => {
    let price = e.target.value;
    price = Number(price.replaceAll(",", ""));
    let copy = [...props.data];
    if (isNaN(price)) {
      e.target.value = 0;
      copy[props.tableCount][props.index].price3 = "0";
    } else {
      const format = price.toLocaleString("ko-KR");
      e.target.value = format;
    }
    switch (e.target.id) {
      case "price1":
        copy[props.tableCount][props.index].price1 = e.target.value;
        copy[props.tableCount][props.index].price3 = (
          Number(copy[props.tableCount][props.index].price1.replaceAll(",", "")) + Number(copy[props.tableCount][props.index].price2.replaceAll(",", ""))
        ).toLocaleString("ko-KR");
        props.updater(copy);
        break;
      case "price2":
        copy[props.tableCount][props.index].price2 = e.target.value;
        copy[props.tableCount][props.index].price3 = (
          Number(copy[props.tableCount][props.index].price1.replaceAll(",", "")) + Number(copy[props.tableCount][props.index].price2.replaceAll(",", ""))
        ).toLocaleString("ko-KR");
        props.updater(copy);
        break;
    }
  };

  const onChange = (e: any) => {
    let copy = [...props.data];
    switch (e.target.id) {
      case "title":
        copy[props.tableCount][props.index].title = e.target.value;
        props.updater(copy);
        break;
      // case "sub":
      //   copy[props.tableCount][props.index].sub = e.target.value;
      //   props.updater(copy);
      //   break;
      case "option":
        copy[props.tableCount][props.index].option = e.target.value;
        props.updater(copy);
        break;
    }
  };

  const DeleteItem = () => {
    let copy = props.data.map((v) => v.slice());
    copy[props.tableCount].splice(props.index, 1);
    props.updater(copy);
  };

  const cellSize = () => {
    return props.data[props.tableCount][props.index].sub.length + 1;
  };

  const addSub = (e: any) => {
    let copy = props.data.map((v) => v.slice());
    copy[props.tableCount][props.index].sub.push("empty");
    props.updater(copy);
  };
  return (
    <>
      <tr>
        <td className="tg-0lax">
          <input type="text" id="option" onChange={onChange} value={props.data[props.tableCount][props.index].option}></input>
        </td>
        <td className="title">
          <input type="text" id="title" onChange={onChange} value={props.data[props.tableCount][props.index].title}></input>
          {props.detail ? (
            <button type="button" className="addSub" onClick={addSub}>
              +
            </button>
          ) : null}
        </td>
        <td className="tg-nrix" rowSpan={cellSize()}>
          <input type="text" id="price1" onChange={formatPrice} value={props.data[props.tableCount][props.index].price1}></input>
        </td>
        <td className="tg-nrix" rowSpan={cellSize()}>
          <input type="text" id="price2" onChange={formatPrice} value={props.data[props.tableCount][props.index].price2}></input>
        </td>
        <td className="tg-nrix" rowSpan={cellSize()}>
          {props.data[props.tableCount][props.index].price3}
        </td>
        <td className="tg-nrix" rowSpan={cellSize()}>
          <button type="button" onClick={DeleteItem} className="itmeMinus">
            -
          </button>
        </td>
      </tr>
      {props.data[props.tableCount][props.index].sub.map((x, index) => {
        return <MakeSub data={props.data} key={index} index={props.index} updater={props.updater} tableCount={props.tableCount} count={index} detail={props.detail} />;
      })}
    </>
  );
};

export default MakeItem;
