import { Button, Form, Input, Modal } from "antd";
import React from "react";
import { LeftContainer, ModalWrapper, RightContainer } from "./style";
import Image from "next/image";

const Auth = ({ openModal, handleClose }) => {
  const [form] = Form.useForm();
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
      <RightContainer>
        <Form layout="vertical" form={form}>
          <Form.Item name="email" label="Email/Username">
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Password">
            <Input />
          </Form.Item>

          <Button>Login</Button>
        </Form>
      </RightContainer>
    </ModalWrapper>
  );
};

export default Auth;
