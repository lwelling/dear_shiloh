// memories.tsx
import React, { useState, useEffect } from "react";
import { Card, Row, Col, Spin, Button } from "antd";
import { HeartTwoTone } from "@ant-design/icons";
import { NewMemory } from "~/components/NewMemory/NewMemory";

interface Thought {
  id: number;
  created_at: Date;
  body: string;
}

const initialThoughts: Thought[] = [
  {
    id: 12345567,
    created_at: new Date(),
    body: "I just love you so much",
  },
  {
    id: 23455678,
    created_at: new Date(),
    body: "can't wait until I can do your hair!",
  },
];

const Memories: React.FC = () => {
  const [memories, setMemories] = useState<Thought[]>(initialThoughts);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;

      setLoading(true);
      // Replace setTimeout with your real fetch function
      setTimeout(() => {
        // Add more memories to the list
        const newMemories: Thought[] = [
          // Add more dummy data objects here or fetch from your database
        ];
        setMemories((prevMemories) => [...prevMemories, ...newMemories]);
        setLoading(false);
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Row gutter={[16, 16]}>
        {memories.map((memory) => (
          <Col key={memory.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={
                <img
                  alt={memory.body}
                  src={`https://source.unsplash.com/random/300x200/?${memory.body}`}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              }
              actions={[
                <>
                  <Button
                    type="text"
                    onClick={() => console.log("handle favorite here")}
                  >
                    <HeartTwoTone twoToneColor="#eb2f96" />
                  </Button>
                </>,
              ]}
            >
              <p>{memory.body}</p>
            </Card>
          </Col>
        ))}
      </Row>
      <NewMemory />
      {loading && (
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <Spin size="large" />
        </div>
      )}
    </>
  );
};

export default Memories;
