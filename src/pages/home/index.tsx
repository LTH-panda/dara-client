import styled from "@emotion/styled";
import VieoList from "components/templates/Video/VideoList";
import HomBanner from "components/templates/Home/HomeBanner";
import React from "react";

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
];

function MainPage() {
  return (
    <>
      <HomBanner />
      <Container>
        <ListTitle>인기 동영상</ListTitle>
        <VieoList videolist={videolist} />
        <ListTitle>최신 동영상</ListTitle>
        <VieoList videolist={videolist} />
      </Container>
    </>
  );
}

export default MainPage;

const Container = styled.div`
  margin: auto;
  padding: 0 9rem;
`;

const ListTitle = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.7rem;
`;
