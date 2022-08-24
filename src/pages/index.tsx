import styled from "@emotion/styled";
import HomeVideoList from "components/templates/Video/HomeVideoList";
import HomBanner from "components/templates/Home/HomeBanner";
import React from "react";

function HomePage() {
  return (
    <>
      <HomBanner />
      <Container>
        <HomeVideoList />
      </Container>
    </>
  );
}

export default HomePage;

const Container = styled.div`
  margin: auto;
  padding: 0 9rem;
`;
