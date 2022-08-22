import styled from "@emotion/styled";
import { SubtitleList } from "components/templates/Subtitle";
import { VideoAbout, VideoPlayer } from "components/templates/Video";
import React from "react";

function VideoPage() {
  return (
    <Container>
      <VideoSection>
        <VideoPlayer />
        <VideoAbout title="제목" author="작성자" isConfirmed />
      </VideoSection>
      <SubtitleSection>
        <SubtitleList />
      </SubtitleSection>
    </Container>
  );
}

export default VideoPage;

const Container = styled.main`
  display: flex;
  margin: auto;
  width: 1440px;
`;
const VideoSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  width: 60%;
  height: 100%;
`;
const SubtitleSection = styled.section`
  width: 40%;
  height: 100%;
  padding-right: 2rem;
`;
