import styled from "@emotion/styled";
import HomeVieoList from "components/templates/Video/HomeVideoList";
import HomBanner from "components/templates/Home/HomeBanner";
import React from "react";

function MainPage() {
  return (
    <Container>
      <HomBanner />
      <HomeVieoList title="인기 동영상" />
      <HomeVieoList title="최신 동영상" />
    </Container>
  );
}

export default MainPage;

const Container = styled.div`
  padding: 0 5rem;
  margin: auto;
`;
