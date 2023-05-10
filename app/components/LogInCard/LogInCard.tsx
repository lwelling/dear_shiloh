import React, { useState } from "react";
import { Card, Typography, Button, Spin, Form, Input } from "antd";

import supabase from "~/supabaseClient";
import { Notification } from "../Notification/Notification";

const { Title } = Typography;

export const LogInCard: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [loginError, setLoginError] = useState("");

  const loginCardStyle = {
    width: "100%",
    maxWidth: "400px",
    margin: "2rem auto",
    textAlign: "center" as const,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    backdropFilter: "blur(10px)",
    borderRadius: "8px",
  };

  const titleStyle = {
    fontFamily: "'Caveat', cursive",
    fontSize: "2.5rem",
    marginBottom: "1.5rem",
  };

  const buttonContainerStyle = {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1rem",
  };

  const handleButtonClick = () => {
    setShowLoginForm(true);
  };

  const [form] = Form.useForm();

  const handleLogin = async (values: { email: string; password: string }) => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword(values);
      if (error) {
        console.log(error);
        setLoginError(error.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      form.setFieldsValue(values); // Keep form values after submission
    }
  };

  return (
    <>
      {loginError && <Notification message={loginError} type="error" />}

      <Card style={loginCardStyle} bordered={false}>
        <Title level={2} style={titleStyle}>
          Dear Shiloh
        </Title>
        {loading ? (
          <Spin />
        ) : (
          <div style={buttonContainerStyle}>
            {!showLoginForm ? (
              <>
                <Button type="primary" size="large" onClick={handleButtonClick}>
                  I'm Shiloh!
                </Button>
                <Button type="ghost" size="large" onClick={handleButtonClick}>
                  I'm Mommy!
                </Button>
                <Button type="ghost" size="large" onClick={handleButtonClick}>
                  I'm Daddy!
                </Button>
              </>
            ) : (
              <Form form={form} onFinish={handleLogin}>
                <Form.Item
                  name="email"
                  rules={[{ required: true, type: "email" }]}
                >
                  <Input placeholder="Email" name="email" />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true }]}>
                  <Input.Password placeholder="Password" name="password" />
                </Form.Item>
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
              </Form>
            )}
          </div>
        )}
      </Card>
    </>
  );
};
