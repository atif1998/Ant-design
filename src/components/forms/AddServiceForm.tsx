"use client";

import { Button, Form, Input } from "antd";
import React from "react";

interface Props {
  onClose: () => void;
}

const AddServiceForm = ({ onClose }: Props) => {
  const handleClick = (vals: any) => {
    console.log(vals);
    onClose()
  };

  return (
    <div>
      <Form layout="vertical">
        <Form.Item
          label="Technique"
          name="technique"
          rules={[
            {
              required: true,
              message: "Required",
            },
            {
              max: 255,
              message: "Maximum 255 characters are allowed",
            },
            () => ({
              validator(rule, value) {
                const errorMsg = "Add Valid data";
                if (value) {
                  if (value.length < 0) {
                    return Promise.reject(errorMsg);
                  }
                  return Promise.resolve();
                }
                return Promise.resolve();
              },
            }),
          ]}
        >
          <Input className="h-12 rounded-[8px]" placeholder="Enter Name" />
        </Form.Item>
        <div className="flex justify-end gap-3">
          <Form.Item>
            <Button onClick={onClose}>Cancel</Button>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" onClick={handleClick}>
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default AddServiceForm;
