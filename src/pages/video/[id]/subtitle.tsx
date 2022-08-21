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
  display: flex;
  width: 1440px;
  height: 80vh;
`;
const VideoContainer = styled.section`
  width: 60%;
  height: 100%;
`;
const SubtitleContainer = styled.section`
  width: 40%;
  height: 100%;
`;
