import styled from "@emotion/styled";
import { SubtitleForm } from "components/templates/Subtitle";
import { VideoForm } from "components/templates/Video";
import React from "react";

function VideoSubtitlePage() {
  return (
    <Container>
      <VideoContainer>
        <VideoForm />
      </VideoContainer>
      <SubtitleContainer>
        <SubtitleForm />
      </SubtitleContainer>
    </Container>
  );
}

export default VideoSubtitlePage;

const Container = styled.main`
  margin: 0 auto;
  display: flex;
  width: 1440px;
  height: 80vh;
`;
const VideoContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  width: 60%;
  height: 100%;
`;
const SubtitleContainer = styled.section`
  display: flex;
  width: 40%;
  height: 100%;
  padding-right: 2rem;
`;
