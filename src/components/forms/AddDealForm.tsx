"use client";

import { Button, Form, Input, Select } from "antd";
import React from "react";

const AddDealForm = () => {
  const [form] = Form.useForm();

  const { Option } = Select;

  const handleSubmit = (vals: any) => {
    console.log(vals);
  };
  return (
    <>
      <Form
        className="flex  flex-col gap-2 "
        layout="vertical"
        form={form}
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Required",
            },
            { max: 255, message: "max 255 characters" },
            { min: 4, message: "min 4 characters" },
            () => ({
              validator(rule, value) {
                const errorMsg = "Add Valid data";
                if (value) {
                  if (!value.trim().length) {
                    return Promise.reject(errorMsg);
                  }
                  return Promise.resolve();
                }
                return Promise.resolve();
              },
            }),
          ]}
        >
          <Input className="h-9" />
        </Form.Item>

        <Form.Item
          label="Status"
          name="status"
          rules={[
            {
              required: true,
              message: "Required",
            },
          ]}
        >
          <Select>
            <Option key="diwali" value="diwali">
              Diwali
            </Option>
            <Option key="christmas" value="christmas">
              Christmas
            </Option>
          </Select>
        </Form.Item>
        <div className="flex gap-2">
          <Form.Item>
            <Button htmlType="button">Cancel</Button>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Submit</Button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
};

export default AddDealForm;
