"use client";

import React from "react";
import AddDealDrawer from "./drawers/AddDealDrawer";
import { Button, Table, Tooltip } from "antd";
import { Dumbbell } from "lucide-react";

const Deals = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      parent_name: "ssss",
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      parent_name: "ssss",
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Deal Name",
      dataIndex: "name",
      key: "name",
      rowKey: "name",
      sorter: true,
      className: "avatar-cell",
      render: (text: string) => (
        <div>
          <span className="mobile-lbl-val">{text || "-"}</span>
        </div>
      ),
    },
    {
      title: "Deal Category",
      dataIndex: "parent_name",
      key: "parent_name",
      rowKey: "parent_name",
      sorter: true,
      className: "avatar-cell",
      render: (text: string) => (
        <div>
          <span className="mobile-lbl-val">{text || "-"}</span>
        </div>
      ),
    },
    {
      title: "Action",
      dataIndex: "edit",
      rowKey: "edit",
      width: 105,
      fixed: "right",
      className: "action-cell",
      render: (text: any, data: any) => {
        return <div>sss</div>;
      },
    },
  ];
  return (
    <div className=" flex flex-col gap-3">
      <div className=" flex w-full justify-end">
        <AddDealDrawer />
      </div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Deals;
