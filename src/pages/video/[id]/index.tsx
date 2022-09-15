import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { getVideoById } from "apis/video";
import { Spinner } from "components/atoms";
import { SubtitleList } from "components/templates/Subtitle";
import { VideoAbout, VideoPlayer } from "components/templates/Video";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

function VideoPage() {
  const router = useRouter();
  const videoIdx = useMemo(() => {
    if (router.isReady) return Number(router.asPath.split("/video/")[1]);
    return false;
  }, [router.isReady]);
  const { data, error, isLoading } = useQuery(
    ["video"],
    () => getVideoById(videoIdx as number),
    {
      enabled: !!videoIdx,
    }
  );

  if (isLoading)
    return (
      <Container>
        <Center>
          <Spinner isVisible />
        </Center>
      </Container>
    );

  if (error) return <div>오류가 발생했습니다.</div>;

  if (data)
    return (
      <Container>
        <VideoSection>
          <VideoPlayer videoId={data.link.split("https://youtu.be/")[1]} />
          <VideoAbout
            title={data.title}
            nickname={data.nickname}
            link={data.link}
          />
        </VideoSection>
        <SubtitleSection>
          <SubtitleList
            subtitles={data.subtitleList ?? []}
            videoIdx={videoIdx as number}
          />
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
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
