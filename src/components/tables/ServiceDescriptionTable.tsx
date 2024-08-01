"use client";

import { Drawer } from "antd";
import React from "react";
import AddServiceDesDrawer from "../drawers/AddServiceDesDrawer";

const ServiceDescriptionTable = () => {
  const submitData = (data: any) => {
    console.log(data);
  };

  return (
    <div className="p-10">
      <div>
        <p className="text-xl font-medium">Service Description</p>
      </div>
      <div className="flex justify-end ">
        <AddServiceDesDrawer handleSubmit={submitData} />
      </div>
    </div>
  );
};

export default ServiceDescriptionTable;
