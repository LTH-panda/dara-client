import styled from "@emotion/styled";
import { SubtitleList } from "components/templates/Subtitle";
import { VideoAbout, VideoPlayer } from "components/templates/Video";
import React from "react";

function VideoPage() {
  return (
    <Container>
      <VideoSection>
        <VideoPlayer />
        <VideoAbout title="제목" nickname="작성자" />
      </VideoSection>
      <SubtitleSection>
        <SubtitleList subtitles={[1, 2, 3, 4, 5, 6, 6, 6, 6, 6]} />
      </SubtitleSection>
    </Container>
  );
}

export default VideoPage;

const Container = styled.main`
  display: flex;
  margin: 0 auto;
  width: 1440px;
  height: 80vh;
`;
const VideoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  width: 60%;
  height: 100%;
`;
const SubtitleSection = styled.section`
  display: flex;
  width: 40%;
  height: 100%;
  padding-right: 2rem;
`;
