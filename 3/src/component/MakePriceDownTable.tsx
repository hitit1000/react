import { detailType } from "./use";

const MakePriceDownTable = (props: { data: detailType[][]; index: number; category: string[] }) => {
  const title = () => {
    return props.category[props.index];
  };
  const commission = () => {
    let price = 0;
    props.data[props.index].map((x) => (price += Number(x.price1.replaceAll(",", ""))));
    return price.toLocaleString("ko-KR");
  };
  return (
    <>
      <tr>
        <td>{title()}</td>
        <td></td>
        <td>-</td>
        <td>{commission()}</td>
      </tr>
    </>
  );
};

export default MakePriceDownTable;
