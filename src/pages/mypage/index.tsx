import styled from "@emotion/styled";
import MyPageVideoList from "components/templates/Video/MyPageVideoList";
import MyProfile from "components/templates/MyProfile";
import React from "react";

function Mypage() {
  return (
    <>
      <MyProfile />
      <Container>
        <MyPageVideoList />
      </Container>
    </>
  );
}

export default Mypage;

const Container = styled.div`
  margin: auto;
  padding: 0 9rem;
`;
