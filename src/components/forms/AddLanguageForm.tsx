"use client";
import { Countries } from "@/lib/staticData/Countries";
import { Languages } from "@/lib/staticData/languages";

import { Button, Form, Input, Select } from "antd";
import React from "react";

const AddLanguageForm = () => {
  const [form] = Form.useForm();

  const { Option } = Select;

  const allLanguages = Languages || [];
  const allCountries = Countries || [];
  const handleSubmit = (vals: any) => {
    console.log(vals);
  };

  return (
    <div>
      <Form
        className="flex  flex-col gap-2 "
        layout="vertical"
        form={form}
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Language Name"
          name="lang_name"
          rules={[
            {
              required: true,
              message: "Required",
            },
            { max: 255, message: "enter name" },
            () => ({
              validator(rule, value) {
                const errorMsg = "Add Valid data";
                if (value) {
                  // if (isEmpty(value.trim())) {
                  //   return Promise.reject(errorMsg);
                  // }
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
          label="Country Code"
          name="country_code"
          rules={[
            {
              required: true,
              message: "Required",
            },
          ]}
        >
          <Select>
            {allCountries.length > 0 &&
              allCountries.map((item) => (
                <Option key={item.code} name={item.code}>
                  {item.name}-{item.code}
                </Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Language Code"
          name="lang_code"
          rules={[
            {
              required: true,
              message: "Required",
            },
          ]}
        >
          <Select>
            {allLanguages.length &&
              allLanguages.map((item) => (
                <Option key={item.code} name={item.code}>
                  {item.name} - {item.code}
                </Option>
              ))}
          </Select>
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
            <Option key="yes" value="yes">
              Yes
            </Option>
            <Option key="no" value="no">
              No
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
    </div>
  );
};

export default AddLanguageForm;
