// memories.tsx
import React, { useState, useEffect } from "react";
import { Row, Spin } from "antd";
import { NewMemory } from "~/components/NewMemory/NewMemory";
import { MemoryCard } from "~/components/MemoryCard/MemoryCard";

import type { Memory } from "~/types";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Memories" }];
};

const initialMemories: Memory[] = [
  {
    id: 12345567,
    created_at: new Date(),
    body: "went to the aquarium",
  },
  {
    id: 23455678,
    created_at: new Date(),
    body: "went to the zoo",
  },
];

const Memories: React.FC = () => {
  const [memories, setMemories] = useState<Memory[]>(initialMemories);
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
        const newMemories: Memory[] = [
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
          <MemoryCard key={memory.id} memory={memory} />
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
