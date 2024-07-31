"use client";
import { Countries } from "@/lib/staticData/Countries";
import { Languages } from "@/lib/staticData/languages";

import { Button, Form, Input, Select } from "antd";
import React from "react";

const AddTranslationForm = () => {
  const [form] = Form.useForm();

  const { Option } = Select;

  const allLanguages = Languages || [];
  const allCountries = Countries || [];
  const handleSubmit = (vals: any) => {
    console.log(vals);
  };

  const typeArr = [
    {
      name: "Website",
      value: "website",
    },
    {
      name: "Provider",
      value: "provider",
    },
    {
      name: "Professional",
      value: "professional",
    },
  ];
  return (
    <div>
      <Form
        className="flex  flex-col gap-2 "
        layout="vertical"
        form={form}
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Type"
          name="type"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Select>
            {typeArr.length &&
              typeArr.map((type) => (
                <Option key={type?.value} value={type.value}>
                  {type.name}
                </Option>
              ))}
          </Select>
          {/* <Input className="h-9" /> */}
        </Form.Item>
        <Form.Item
          label="Key"
          name="json_key"
          rules={[
            {
              required: true,
              message: "Required",
            },
          ]}
        >
          <Input className="h-9" />
        </Form.Item>
        <Form.Item
          label="Main Word"
          name="main_word"
          rules={[
            {
              required: true,
              message: "Required",
            },
            { max: 255, message: "error" },
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

        <div className="flex gap-2">
          <Form.Item>
            <Button htmlType="button">Cancel</Button>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Submit</Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default AddTranslationForm;
