"use client";

import { gql, useLazyQuery } from "@apollo/client";
import { Button, Checkbox, Form, type FormProps, Input } from "antd";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useState(false);
  console.log("🚀 ~ loginData:", loginData);

  useEffect(() => {
    setLoginData(!!getCookie("accessToken"));
  }, []);

  if (loginData) {
    router.push("/dashboard");
  }

  const LOGIN_USER = gql`
    query Login($loginInput: LoginDto!) {
      login(loginInput: $loginInput) {
        accessToken
        refreshToken
        user {
          _id
          firstName
          lastName
          email
          username
          phone
          status
        }
      }
    }
  `;

  const [getLogin, { loading, error, data }] = useLazyQuery(LOGIN_USER);

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    console.log("Success:", values);

    const { loading, error, data } = await getLogin({
      variables: {
        loginInput: {
          username: values.username,
          password: values.password,
        },
      },
    });
    if (data) {
      console.log(data);
      localStorage.setItem("user", JSON.stringify(data.login.user));
      setCookie("accessToken", data.login.accessToken);
      setCookie("refreshToken", data.login.refreshToken);
      router.push("/dashboard");
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="!mt-10"
      size="large"
      //   requiredMark
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
        className="!mb-1"
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
        className="!mb-1"
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
        className="!mb-1"
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-full">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
