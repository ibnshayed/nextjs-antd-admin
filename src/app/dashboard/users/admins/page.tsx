"use client";
import {
  DeleteOutlined,
  EditFilled,
  EyeFilled,
  PlusOutlined,
} from "@ant-design/icons";
import { gql, useQuery } from "@apollo/client";
import { Button, Space, Spin, Table } from "antd";
import Link from "next/link";

const AdminPages = () => {
  const GET_USERS = gql`
    query Users {
      users {
        _id
        firstName
        lastName
        email
        username
        phone
        status
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading)
    return (
      <div className="h-full flex justify-center items-center">
        <Spin></Spin>
      </div>
    );
  if (error) return <p>Error : {error.message}</p>;

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space>
          <Link href={`admins/${record._id}`}>
            <Button
              type="primary"
              shape="circle"
              size="small"
              icon={<EyeFilled />}
            ></Button>
          </Link>
          <Button
            type="primary"
            shape="circle"
            size="small"
            icon={<EditFilled />}
          ></Button>
          <Button
            danger
            type="primary"
            shape="circle"
            size="small"
            icon={<DeleteOutlined />}
          ></Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold text-gray-500">Admin Lists:</p>

        <Link href={"/dashboard/users/admins/create"}>
          <Button type="primary" icon={<PlusOutlined />}>
            Add User
          </Button>
        </Link>
      </div>
      <div className="mt-5">
        <Table
          dataSource={data.users}
          columns={columns}
          pagination={{ position: ["bottomCenter"] }}
        />
      </div>
    </div>
  );
};

export default AdminPages;
