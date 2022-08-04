import styled from "@emotion/styled";
import Category from "components/modules/Category";
import VideoList from "components/templates/Video/VideoList";
import React, { useState, useCallback } from "react";

const videolist = [
  {
    title: "title",
    video: "video",
    like: 10,
  },
  {
    title: "title",
    video: "video",
    like: 10,
  },
  {
    title: "title",
    video: "video",
    like: 10,
  },
  {
    title: "title",
    video: "video",
    like: 10,
  },
  {
    title: "title",
    video: "video",
    like: 10,
  },
  {
    title: "title",
    video: "video",
    like: 10,
  },
  {
    title: "title",
    video: "video",
    like: 10,
  },
  {
    title: "title",
    video: "video",
    like: 10,
  },
];

function ComissionPage() {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback(
    (cate: React.SetStateAction<string>) => setCategory(cate),
    []
  );
  return (
    <Container>
      <Category onSelect={onSelect} cate={category} />
      <VideoList videolist={videolist} />
    </Container>
  );
}

export default ComissionPage;

const Container = styled.div`
  margin: auto;
  padding: 0 9rem;
`;
