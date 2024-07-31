"use client";

import React from "react";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  // https://sapi.bookrejuuv.com/api/admin/login
  const router = useRouter();
  const handleSubmit = (values: any) => {
    console.log(values);
    router.push("/dashboard");
  };

  return (
    <div className="rounded-2xl border border-black p-16">
      <Form className=" flex flex-col gap-5" onFinish={handleSubmit}>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "email is required",
            },
            {
              type: "email",
              message: "enter valid email address",
            },
          ]}
        >
          <Input
            size="large"
            placeholder="Email"
            className=" h-12 border border-black"
          />
        </Form.Item>
        <Form.Item
          className="w-full"
          name="password"
          rules={[
            {
              required: true,
              message: "password is required",
            },
          ]}
        >
          <Input.Password
            size="large"
            placeholder="Password"
            className="h-12 border border-black"
          />
        </Form.Item>

        <Button
          className=" h-12 rounded-xl bg-green-950 text-white"
          htmlType="submit"
        >
          Log in
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
