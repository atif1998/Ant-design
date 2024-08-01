"use client";

import { Button, Drawer } from "antd";
import React, { useState } from "react";
import AddServiceDesForm from "../forms/AddServiceDesForm";

interface Props {
  handleSubmit: (data: any) => void;
}

const AddServiceDesDrawer = ({ handleSubmit }: Props) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={showDrawer}>Add Description</Button>
      <Drawer
        title="ADD DESCRIPTION"
        onClose={onClose}
        open={open}
        className="w-[400px]"
      >
        <AddServiceDesForm onClose={onClose} />
      </Drawer>
    </div>
  );
};

export default AddServiceDesDrawer;
