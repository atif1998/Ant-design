"use client";

import React, { useContext, useMemo } from "react";
import AddServiceTypeDrawer from "../drawers/AddServiceTypeDrawer";
import { HolderOutlined } from "@ant-design/icons";
import type { DragEndEvent } from "@dnd-kit/core";
import { DndContext } from "@dnd-kit/core";
import type { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button, Popconfirm, Switch, Table, Tooltip } from "antd";
import type { TableColumnsType } from "antd";
import {
  ExportOutlined,
  ImportOutlined,
  EditOutlined,
  DeleteOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

interface RowContextProps {
  setActivatorNodeRef?: (element: HTMLElement | null) => void;
  listeners?: SyntheticListenerMap;
}

const RowContext = React.createContext<RowContextProps>({});

const DragHandle: React.FC = () => {
  const { setActivatorNodeRef, listeners } = useContext(RowContext);
  return (
    <Button
      type="text"
      size="small"
      icon={<HolderOutlined />}
      style={{ cursor: "move" }}
      ref={setActivatorNodeRef}
      {...listeners}
    />
  );
};

const columns: TableColumnsType<DataType> = [
  { key: "sort", align: "center", width: 80, render: () => <DragHandle /> },
  {
    title: "Technique",
    dataIndex: "technique",
    key: "technique",
    sorter: true,
    // width: 220,
    className: "avatar-cell",
    render: (text) => {
      return (
        <div>
          <span className="label">Technique</span>
          <span className="mobile-lbl-val">{text || "-"}</span>
        </div>
      );
    },
  },
  {
    title: (
      <div>
        Beauty Badge{" "}
        <Tooltip title="Toggle on to consider this Service Type as part of Beauty Services for Beauty Services Badge">
          <InfoCircleOutlined />
        </Tooltip>
      </div>
    ),
    dataIndex: "is_beauty",
    // rowKey: "is_beauty",
    width: 150,
    render: (text, data) => (
      <div>
        <Switch
          className="bg-blue-400"
          // loading={sLoading === data.id}
          // checked={data.is_beauty === 1}
          // onChange={(e) => changeStatus(e, data, "accept_as_beauty")}
        />
      </div>
    ),
  },
  {
    title: (
      <div>
        Popular{" "}
        <Tooltip title="Toggle on to label as a popular service under Search Map Services Filter.">
          <InfoCircleOutlined />
        </Tooltip>
      </div>
    ),
    dataIndex: "is_popular",
    // rowKey: "is_popular",
    width: 150,
    className: "block-status-cell",
    fixed: "right",
    render: (text, data) => (
      <div>
        <Switch
          className="bg-blue-400"
          // loading={sLoading === data.id}
          // checked={data.is_popular === 1}
          // onChange={(e) => changeStatus(e, data, "technique_popular")}
        />
      </div>
    ),
  },

  {
    title: "Actions",
    dataIndex: "edit",
    // rowKey: "edit",
    width: 105,
    fixed: "right",
    className: "action-cell",
    render: (text, data) => {
      return (
        <div className="flex justify-between">
          <Tooltip placement="bottomLeft" title="Edit">
            <div style={{ marginRight: 10 }}>
              <Button
                shape="circle"
                icon={<EditOutlined />}
                // onClick={() => setState({ initObj: data, visible: true })}
                className="invoiceViewBtn"
              />
            </div>
          </Tooltip>
          <Tooltip placement="bottomLeft" title="Delete">
            <Popconfirm
              title="sss"
              // title={<IntlMessages id="common.sureDelete" />}
              // okText={<IntlMessages id="DELETE" />}
              // cancelText={<IntlMessages id="common.cancel" />}
              // onConfirm={() => {
              //   deleteCategoryState(data.id);
              // }}
              // className="invoiceDltBtn"
              // onCancel={null}
            >
              <div>
                <Button
                  shape="circle"
                  icon={<DeleteOutlined />}
                  className="bg-red-500"
                />
              </div>
            </Popconfirm>
          </Tooltip>
        </div>
      );
    },
  },
];

const initialData: DataType[] = [
  { key: "1", name: "John Brown", age: 32, address: "Long text Long" },
  { key: "2", name: "Jim Green", age: 42, address: "London No. 1 Lake Park" },
  { key: "3", name: "Joe Black", age: 32, address: "Sidney No. 1 Lake Park" },
  { key: "4", name: "John Brown", age: 32, address: "Long text Long" },
  { key: "5", name: "Jim Green", age: 42, address: "London No. 1 Lake Park" },
  { key: "6", name: "Joe Black", age: 32, address: "Sidney No. 1 Lake Park" },
  { key: "7", name: "John Brown", age: 32, address: "Long text Long" },
  { key: "8", name: "Jim Green", age: 42, address: "London No. 1 Lake Park" },
  { key: "9", name: "Joe Black", age: 32, address: "Sidney No. 1 Lake Park" },
  { key: "10", name: "John Brown", age: 32, address: "Long text Long" },
  { key: "11", name: "Jim Green", age: 42, address: "London No. 1 Lake Park" },
  { key: "12", name: "Joe Black", age: 32, address: "Sidney No. 1 Lake Park" },
  { key: "13", name: "John Brown", age: 32, address: "Long text Long" },
  { key: "14", name: "Jim Green", age: 42, address: "London No. 1 Lake Park" },
  { key: "15", name: "Joe Black", age: 32, address: "Sidney No. 1 Lake Park" },
  { key: "16", name: "John Brown", age: 32, address: "Long text Long" },
  { key: "17", name: "Jim Green", age: 42, address: "London No. 1 Lake Park" },
  { key: "18", name: "Joe Black", age: 32, address: "Sidney No. 1 Lake Park" },
];

interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  "data-row-key": string;
}

const Row: React.FC<RowProps> = (props) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: props["data-row-key"] });

  const style: React.CSSProperties = {
    ...props.style,
    transform: CSS.Translate.toString(transform),
    transition,
    ...(isDragging ? { position: "relative", zIndex: 9999 } : {}),
  };

  const contextValue = useMemo<RowContextProps>(
    () => ({ setActivatorNodeRef, listeners }),
    [setActivatorNodeRef, listeners],
  );

  return (
    <RowContext.Provider value={contextValue}>
      <tr {...props} ref={setNodeRef} style={style} {...attributes} />
    </RowContext.Provider>
  );
};

const ServicesTable = () => {
  const [dataSource, setDataSource] = React.useState<DataType[]>(initialData);

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setDataSource((prevState) => {
        const activeIndex = prevState.findIndex(
          (record) => record.key === active?.id,
        );
        const overIndex = prevState.findIndex(
          (record) => record.key === over?.id,
        );
        return arrayMove(prevState, activeIndex, overIndex);
      });
    }
  };

  const submitData = (data: any) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col gap-4 p-10">
      <div>
        <p className="text-xl font-medium">Service Types</p>
      </div>

      <div className="flex justify-end">
        <AddServiceTypeDrawer handleSubmit={submitData} />
      </div>
      <div>
        <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
          <SortableContext
            items={dataSource.map((i) => i.key)}
            strategy={verticalListSortingStrategy}
          >
            <Table
              rowKey="key"
              components={{ body: { row: Row } }}
              columns={columns}
              dataSource={dataSource}
            />
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

export default ServicesTable;
