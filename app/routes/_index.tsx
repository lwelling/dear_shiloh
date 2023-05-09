import type { V2_MetaFunction } from "@remix-run/node";
import { Button, Card, Spin, Typography } from "antd";
import { useContext } from "react";
import { authContext } from "~/auth/providers/ProvideAuth";
import { LogInCard } from "~/components/LogInCard/LogInCard";
import supabase from "~/supabaseClient";
import "antd/dist/antd.css";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Dear Shiloh" }];
};

const Index = () => {
  const gradientBackgroundStyle = {
    minHeight: "100vh", // Make sure the gradient covers the entire height of the screen
    background: "linear-gradient(135deg, #E91E63, #FF9800)", // Add the gradient colors
    display: "flex",
    alignItems: "center", // Center the Login component vertically
  };

  const { Title } = Typography;

  let auth = useContext(authContext);

  const handleSignOut = async () => {
    let { error } = await supabase.auth.signOut();
    if (error) throw error;
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

  let notLoggedIn = <LogInCard />;

  let loggedIn = (
    <Card style={loginCardStyle} bordered={false}>
      <Title level={2} style={titleStyle}>
        {auth.loading ? (
          <Spin />
        ) : (
          <div style={buttonContainerStyle}>Hi Shi!</div>
        )}
      </Title>
      <Button type="dashed" size="large" onClick={handleSignOut}>
        Sign out/<b>All done!</b>
      </Button>
    </Card>
  );

  return (
    <>
      <div style={gradientBackgroundStyle}>
        {!auth.loading && auth.sessionData ? loggedIn : notLoggedIn}
      </div>
    </>
  );
};

export default Index;
