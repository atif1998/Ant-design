"use client";

import { Button, Form, Input, Select } from "antd";
import React from "react";

interface Props {
  onClose: () => void;
}

const AddServiceDesForm = ({ onClose }: Props) => {
  const { Option } = Select;

  const handleClick = (vals: any) => {
    console.log(vals);
  };

  const dropData = ["ww", "www"];
  return (
    <div>
      <Form layout="vertical">
        <Form.Item
          label="Techniques"
          name="technique_id"
          rules={[
            {
              required: true,
              message: "Required",
            },
          ]}
        >
          <Select
            className="h-12"
            placeholder="Select Technique"
            allowClear
            showSearch
          >
            <Option key="aaa">aaa</Option>
            <Option key="aaa">bbb</Option>
            <Option key="aaa">ccc</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Title"
          name="title"
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
        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Required",
            },
            {
              max: 1000,
              message: "Maximum 1000 characters are allowed",
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
          <Input.TextArea
            style={{ height: "150px" }}
            className="h-12 rounded-[8px]"
            placeholder="Enter Name"
            maxLength={1000}
          />
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

export default AddServiceDesForm;
