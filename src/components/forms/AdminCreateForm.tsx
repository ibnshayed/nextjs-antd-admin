"use client";
import { gql, useMutation } from "@apollo/client";
import { Button, Form, Input, type FormProps } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const AdminCreateForm: React.FC = () => {
  const router = useRouter();

  const CREATE_USER = gql`
    mutation CreateUser($createUserInput: CreateUserInput!) {
      createUser(createUserInput: $createUserInput) {
        _id
        firstName
        lastName
        email
        username
        password
        phone
        status
      }
    }
  `;

  const [createUser, { loading, error, data }] = useMutation(CREATE_USER);

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    createUser({
      variables: {
        createUserInput: {
          ...values,
        },
      },
    });
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (!loading && !error) {
      router.back();
    }
  }, [loading, error]);

  return (
    <Form
      name="basic"
      // labelCol={{ span: 8 }}
      // wrapperCol={{ span: 16 }}
      style={{ maxWidth: "none" }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10">
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: "Please input your firstName!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: "Please input your lastName!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: true, message: "Please input your phone!" }]}
        >
          <Input />
        </Form.Item>
      </div>

      {/* <Form.Item<FieldType>
      name="remember"
      valuePropName="checked"
      wrapperCol={{ offset: 8, span: 16 }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item> */}

      <Form.Item className="flex justify-center items-center">
        <Button type="primary" htmlType="submit" className="w-60">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AdminCreateForm;
