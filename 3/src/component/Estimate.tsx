import React from "react";
import AllTable from "./AllTable";

const Estimate = () => {
  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="Estimate">
        <div>Estimate</div>
        <form onSubmit={onSubmit}>
          <h2>writer</h2>
          <label htmlFor="writer">name</label>
          <input type="text" id="writer" placeholder="name*" required />
          <h2>client</h2>
          <label htmlFor="c_name">name</label>
          <input type="text" id="c_name" placeholder="name*" required />
          <label htmlFor="c_company">company</label>
          <input type="text" id="c_company" placeholder="company*" required />
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
          <label htmlFor="p_commission">commission </label>
          <input type="checkbox" id="p_commission" />

          <h2>detail_item</h2>
          <AllTable />
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
};

export default Estimate;
