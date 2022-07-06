import React from "react";

const MakeInfo = () => {
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
            <th colSpan={2}>용역세부항목</th>
            <th colSpan={1}>인증원수수료(원)</th>
            <th colSpan={1}>용역비(원)</th>
            <th colSpan={2}>합계(원)</th>
          </tr>
        </thead>
      </table>
    </>
  );
};

export default MakeInfo;
