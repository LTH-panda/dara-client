import styled from "@emotion/styled";
import MainVideoList from "components/templates/Video/MainVideoList";
import React from "react";

function MainPage() {
  return (
    <Container>
      <MainVideoList title="최신 동영상" />
      <MainVideoList title="인기 동영상" />
    </Container>
  );
}

export default MainPage;

const Container = styled.div`
  padding: 0 3rem;
  margin: auto;
`;
