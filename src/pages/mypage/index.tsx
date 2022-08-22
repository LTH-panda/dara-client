import styled from "@emotion/styled";
import VieoList from "components/templates/Video/VideoList";
import MyProfile from "components/templates/MyProfile";
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

function Mypage() {
  return (
    <>
      <MyProfile name="아무개" email="email@email.com" point="2,300" />
      <Container>
        <ListTitle>제작 중인 영상</ListTitle>
        <VieoList videolist={videolist} />
        <ListTitle>제작 완료 영상</ListTitle>
        <VieoList videolist={videolist} />
      </Container>
    </>
  );
}

export default Mypage;

const Container = styled.div`
  margin: auto;
  padding: 0 9rem;
`;

const ListTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.7rem;
`;
