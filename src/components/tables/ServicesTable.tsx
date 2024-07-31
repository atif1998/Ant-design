"use client";

import React from "react";
import AddServiceTypeDrawer from "../drawers/AddServiceTypeDrawer";

const ServicesTable = () => {
  const submitData = (data: any) => {
    console.log(data);
  };
  return (
    <div className="p-10">
      <div>
        <p className="text-xl font-medium">Service Types</p>
      </div>

      <div className="flex justify-end">
        <AddServiceTypeDrawer handleSubmit={submitData} />
      </div>
    </div>
  );
};

export default ServicesTable;
