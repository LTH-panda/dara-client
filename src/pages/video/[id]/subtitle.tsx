import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { getVideoCommission } from "apis/video";
import { SubtitleForm } from "components/templates/Subtitle";
import { VideoForm } from "components/templates/Video";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

function VideoSubtitlePage() {
  const router = useRouter();
  const videoIdx = useMemo(() => {
    if (router.isReady) return parseInt(router.asPath.split("/video/")[1], 10);
    return false;
  }, [router.isReady]);
  const { data } = useQuery(
    ["video"],
    () => getVideoCommission(videoIdx as number),
    {
      enabled: !!videoIdx,
    }
  );

  if (!data) return <div>error</div>;

  return (
    <Container>
      <VideoContainer>
        <VideoForm
          title={data.title}
          videoIdx={videoIdx as number}
          youtubeVideoId={data.link.split("https://youtu.be/")[1]}
        />
      </VideoContainer>
      <SubtitleContainer>
        <SubtitleForm subtitles={data.subtitleList} />
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
