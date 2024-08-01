"use client";

import { Button, Drawer } from "antd";
import React, { useState } from "react";
import AddServiceForm from "../forms/AddServiceForm";

interface Props {
  handleSubmit: (data: any) => void;
}

const AddServiceTypeDrawer = ({ handleSubmit }: Props) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={showDrawer}>Add Technique</Button>
      <Drawer
        title="ADD TRANSLATIONS"
        onClose={onClose}
        open={open}
        className="w-[400px]"
      >
        <AddServiceForm onClose={onClose} />
      </Drawer>
    </div>
  );
};

export default AddServiceTypeDrawer;
