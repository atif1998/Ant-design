"use client";

import React, { useState } from "react";
import { Button, Drawer } from "antd";
import AddLanguageForm from "../forms/AddLanguageForm";

const AddLanguageDrawer = () => {
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
      <Drawer
        title="ADD LANGUAGE"
        onClose={onClose}
        open={open}
        className="w-[400px]"
      >
        <AddLanguageForm />
      </Drawer>
    </>
  );
};

export default AddLanguageDrawer;
