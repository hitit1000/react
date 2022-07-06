import { detailType } from "./AllTable";

const MakeSum = (props: { data: detailType[][] }) => {
  const totalSum = (number: number) => {
    let copy = props.data.map((v) => v.slice());
    let total = 0;

    copy.forEach((x) => {
      x.forEach((y) => {
        switch (number) {
          case 0:
            total += Number(y.price1.replaceAll(",", ""));
            break;
          case 1:
            total += Number(y.price2.replaceAll(",", ""));
            break;
          case 2:
            total += Number(y.price3.replaceAll(",", ""));
            break;
        }
      });
    });

    return total.toLocaleString("ko-KR");
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
        <thead>
          <tr>
            <th colSpan={2}>합계</th>
            <th colSpan={1}>{totalSum(0)}</th>
            <th colSpan={1}>{totalSum(1)}</th>
            <th colSpan={2}>{totalSum(2)}</th>
          </tr>
        </thead>
      </table>
    </>
  );
};

export default MakeSum;
