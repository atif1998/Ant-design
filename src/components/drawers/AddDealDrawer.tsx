"use client";

import { Button, Drawer } from "antd";
import React, { useState } from "react";
import AddDealForm from "../forms/AddDealForm";

const AddDealDrawer = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={showDrawer}>Open</Button>
      <Drawer title="ADD DEAL NAME" onClose={onClose} open={open}>
        <AddDealForm />
      </Drawer>
    </>
  );
};

export default AddDealDrawer;
