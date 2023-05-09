import { HeartTwoTone } from "@ant-design/icons";
import { Button, Card, Col } from "antd";
import type { Memory } from "~/types";

export const MemoryCard = ({ memory }: { memory: Memory }) => {
  return (
    <Col xs={24} sm={12} md={8} lg={6}>
      <Card
        hoverable
        cover={
          <img
            alt={memory.body}
            src={`https://source.unsplash.com/random/300x200/?${memory.body}`}
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
  );
};
