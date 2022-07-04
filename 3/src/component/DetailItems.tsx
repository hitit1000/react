import { useState } from "react";
import DetailItem from "./DetailItem";
import CategoryTable from "./CategoryTable";

export type initType = { category: string; title: string; sub: string; price1: string; price2: string; price3: string; option: string };

const DetailItems = () => {
  const [c1Count, setC1Count] = useState(1);
  const [c2Count, setC2Count] = useState(1);
  const [c3Count, setC3Count] = useState(1);
  return (
    <>
      <CategoryTable />
    </>
  );
};

export default DetailItems;
