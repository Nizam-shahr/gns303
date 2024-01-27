import { Button, Form, Input, Modal, message } from "antd";
import React, { useState } from "react";
import { LeftContainer, ModalWrapper, RightContainer } from "./style";
import Image from "next/image";
import { account } from "../../../appwrite";
import { ID } from "appwrite";

const Auth = ({ openModal, handleClose, setUser }) => {
  const [form] = Form.useForm();
  const [loginform] = Form.useForm();
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const onSubmit = async (value) => {
    setLoading(true);
    try {
      await account.create(
        ID.unique(),
        value.email,
        value.password,
        value.name
      );
      await account.createEmailSession(value.email, value.password);
      let accountDetails = await account.get();
      setUser(accountDetails);
      localStorage.setItem("user", accountDetails);
      message.success("Login successful !!!");
      handleClose();
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const onFinish = async (value) => {
    try {
      await account.createEmailSession(value.email, value.password);
      let accountDetails = await account.get();
      handleClose();
      setUser(accountDetails);
    } catch (error) {
      console.log(error);
    }
  };
  const contents = [
    {
      key: 0,
      value: (
        <Form layout="vertical" form={loginform} onFinish={onFinish}>
          <Form.Item name="email" label="Email/Username">
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Password">
            <Input.Password type="password" />
          </Form.Item>

          <Button htmlType="submit">{loading ? "loading...." : "Login"}</Button>

          <p className="disclaimer">
            Don't have an account?{" "}
            <span onClick={() => setActiveIndex(1)}>Sign Up</span>
          </p>
        </Form>
      ),
    },
    {
      key: 1,
      value: (
        <Form layout="vertical" form={form} onFinish={onSubmit}>
          <Form.Item name="name" label="Username">
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email/Username">
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Password">
            <Input.Password type="password" />
          </Form.Item>

          <Button htmlType="submit">
            {loading ? "loading...." : "Sign Up"}
          </Button>
          <p className="disclaimer">
            Already have an account?
            <span onClick={() => setActiveIndex(0)}>Login</span>
          </p>
        </Form>
      ),
    },
  ];

  const activeContent = contents[activeIndex];

  return (
    <ModalWrapper
      centered
      open={openModal}
      onCancel={handleClose}
      width={"1159px"}
      footer={false}
      destroyOnClose
    >
      <LeftContainer>
        <div className="image">
          <Image
            width={570}
            height={662}
            src={"/images/woman.png"}
            alt="image"
          />
        </div>
        <div className="text">
          <h1>Welcome Back!!</h1>
          <p>Your skills matter. Login and level up Now!!</p>
        </div>
      </LeftContainer>
      <RightContainer>{activeContent.value}</RightContainer>
    </ModalWrapper>
  );
};

export default Auth;
