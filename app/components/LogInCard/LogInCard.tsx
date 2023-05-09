import React, { useState } from "react";
import { Card, Typography, Button, Spin } from "antd";

import supabase from "~/supabaseClient";

const { Title } = Typography;

export const LogInCard: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const shilohLogin = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: "lucaswelling1@gmail.com",
        password: "DaddylovesshiloH",
      });
      if (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const loginCardStyle = {
    width: "100%",
    maxWidth: "400px",
    margin: "2rem auto",
    textAlign: "center" as const, // Explicitly provide the type for textAlign
    backgroundColor: "rgba(255, 255, 255, 0.4)", // Set the background color with low opacity
    backdropFilter: "blur(10px)", // Add the blur effect
    borderRadius: "8px", // Add some border radius for a smoother look
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

  return (
    <Card style={loginCardStyle} bordered={false}>
      <Title level={2} style={titleStyle}>
        Dear Shiloh
      </Title>
      {loading ? (
        <Spin />
      ) : (
        <div style={buttonContainerStyle}>
          <Button type="primary" size="large" onClick={() => shilohLogin()}>
            I am Shiloh!
          </Button>
          <Button type="text" size="large">
            Mommy / Daddy
          </Button>
        </div>
      )}
    </Card>
  );
};
