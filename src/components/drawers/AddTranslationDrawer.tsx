"use client";

import React, { useState } from "react";
import { Button, Drawer } from "antd";
import AddLanguageForm from "../forms/AddLanguageForm";
import AddTranslationForm from "../forms/AddTranslationForm";

const AddTranslationDrawer = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={showDrawer}>Add Translation</Button>
      <Drawer
        title="ADD TRANSLATIONS"
        onClose={onClose}
        open={open}
        className="w-[400px]"
      >
        <AddTranslationForm />
      </Drawer>
    </>
  );
};

export default AddTranslationDrawer;
