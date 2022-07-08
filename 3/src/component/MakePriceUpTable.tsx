import { priceTableType } from "./use";

const MakePriceUpTable = (props: { data: string[]; table: priceTableType; updater: (data: priceTableType) => void; count: number; price: number }) => {
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
          copy[props.count][2] = `${ratio}%`;
        }
        props.updater(copy);
        break;
    }
  };
  const onFocus = (e: any) => {
    e.target.select();
  };
  const percentage = () => {
    return (props.price * (Number(props.data[2].replaceAll("%", "")) / 100)).toLocaleString("ko-KR"); // 총 욕역비 * ( 비율 / 100)
  };
  const deleteTable = () => {
    let copy = props.table.map((v) => v.slice());
    copy.splice(props.count, 1);
    props.updater(copy);
  };
  return (
    <>
      <tr>
        <td>
          <input type="text" id="type" value={props.data[0]} onChange={onChange} />
        </td>
        <td>
          <input type="text" id="content" value={props.data[1]} onChange={onChange} />
          <button type="button" className="addSub" onClick={deleteTable}>
            -
          </button>
        </td>
        <td>
          <input type="text" id="ratio" value={props.data[2]} onChange={onChange} onFocus={onFocus} />
        </td>
        <td>{percentage()}</td>
      </tr>
    </>
  );
};

export default MakePriceUpTable;
