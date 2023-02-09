import React from "react";
import freeDeliver from '../../assets/gif/free-delivery-banner.gif'

function Topbar() {
  return (
    <div className="mx-9 h-2.5 top-0">
      <img src={freeDeliver} alt="free Delivery" className=""  />
    </div>
  );
}

export default Topbar;
