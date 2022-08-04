import styled from "@emotion/styled";
import MainVideoList from "components/templates/Video/MainVideoList";
import HomBanner from "components/templates/Home/HomeBanner";
import React from "react";

function MainPage() {
  return (
    <Container>
      <HomBanner />
      <MainVideoList title="인기 동영상" />
      <MainVideoList title="최신 동영상" />
    </Container>
  );
}

export default MainPage;

const Container = styled.div`
  padding: 0 5rem;
  margin: auto;
`;
