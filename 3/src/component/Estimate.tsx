import { useState } from "react";
import AllTable from "./AllTable";
import MakePriceTable from "./MakePriceTable";
import initSpecials from "./initSpecials.json";
import { detailType, priceTableType } from "./use";
import initPriceTable from "./initPriceTable.json";
import initData from "./initData.json";

const Estimate = () => {
  const [item, setItem] = useState(initData);
  const [spec, setSpec] = useState(initSpecials.data);
  const [priceDatas, setPriceDatas] = useState(initPriceTable);
  const updateItem = (data: detailType[][]) => {
    setItem(data);
  };
  const updatePriceTable = (data: priceTableType) => {
    setPriceDatas(data);
  };
  const onChangeSpec = (e: any) => {
    setSpec(e.target.value);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="Estimate">
        <div>Estimate</div>
        <form onSubmit={onSubmit}>
          <h2>writer_company</h2>
          <label htmlFor="wc_name">representative</label>
          <input type="text" id="wc_name" placeholder="name*" required />
          <label htmlFor="wc_business_number">business_number</label>
          <input type="text" id="wc_business_number" placeholder="business_number*" required />
          <label htmlFor="wc_phone">phone</label>
          <input type="text" id="wc_phone" placeholder="phone*" required />
          <label htmlFor="wc_fax">fax</label>
          <input type="text" id="wc_fax" placeholder="fax*" required />
          <label htmlFor="wc_address">address</label>
          <input type="text" id="wc_address" placeholder="address*" required />
          <h2>client_company</h2>
          <label htmlFor="cc_name">representative</label>
          <input type="text" id="cc_name" placeholder="name*" required />
          <label htmlFor="cc_business_number">business_number</label>
          <input type="text" id="cc_business_number" placeholder="business_number*" required />
          <label htmlFor="cc_phone">phone</label>
          <input type="text" id="cc_phone" placeholder="phone*" required />
          <label htmlFor="cc_fax">fax</label>
          <input type="text" id="cc_fax" placeholder="fax*" required />
          <label htmlFor="cc_address">address</label>
          <input type="text" id="cc_address" placeholder="address*" required />

          <h2>client</h2>
          <label htmlFor="c_name">name</label>
          <input type="text" id="c_name" placeholder="name*" required />
          <label htmlFor="c_company">company</label>
          <input type="text" id="c_company" placeholder="company*" required />
          <label htmlFor="c_company_type">company_type</label>
          <input type="text" id="c_company" placeholder="company_type*" required />
          <label htmlFor="c_phone">phone</label>
          <input type="text" id="c_phone" placeholder="phone_number*" required />
          <label htmlFor="c_email">email</label>
          <input type="email" id="writer" placeholder="email*" required />
          <h2>project</h2>
          <label htmlFor="p_purpose">purpose</label>
          <input type="text" id="p_purpose" placeholder="purpose*" required />
          <label htmlFor="p_name">project_name</label>
          <input type="text" id="p_name" placeholder="project_name*" required />
          <label htmlFor="p_location">location</label>
          <input type="text" id="p_location" placeholder="location*" required />
          <label htmlFor="p_vat">include VAT </label>
          <input type="checkbox" id="p_vat" />
          <label htmlFor="p_commission">commission </label>
          <input type="checkbox" id="p_commission" />
          <h2>detail_item</h2>
          <AllTable item={item} setItem={updateItem} />
          <div>
            <label htmlFor="option_area">Conditions&Specials</label>
            <br />
            <textarea id="option_area" value={spec} onChange={onChangeSpec} spellCheck="false" required />
          </div>
          <MakePriceTable data={item} priceDatas={priceDatas} updater={updatePriceTable} />
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
};

export default Estimate;
