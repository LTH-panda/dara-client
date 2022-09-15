import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { getVideoById, getVideoCommission } from "apis/video";
import { SubtitleList } from "components/templates/Subtitle";
import { VideoAbout, VideoPlayer } from "components/templates/Video";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { subtitleFormList } from "recoil/subtitle";

function VideoPage() {
  const router = useRouter();
  const videoIdx = useMemo(() => {
    if (router.isReady) return parseInt(router.asPath.split("/video/")[1], 10);
    return false;
  }, [router.isReady]);
  const subtitleList = useRecoilValue(subtitleFormList);

  const { data: commission, error: errorCommission } = useQuery(
    ["videoCommission"],
    () => getVideoCommission(videoIdx as number),
    {
      enabled: !!videoIdx && router.query.type === "commission",
      retry: false,
    }
  );

  const { data, error } = useQuery(
    ["video"],
    () => getVideoById(videoIdx as number),
    {
      enabled: !!videoIdx && router.query.type === "complete",
      retry: false,
    }
  );

  if (error || errorCommission) return <div>오류가 발생했습니다.</div>;

  if (commission)
    return (
      <Container>
        <VideoSection>
          <VideoPlayer
            videoId={commission.link.split("https://youtu.be/")[1]}
          />
          <VideoAbout title={commission.title} link={commission.link} />
        </VideoSection>
        <SubtitleSection>
          <SubtitleList
            subtitles={subtitleList ?? []}
            videoIdx={videoIdx as number}
          />
        </SubtitleSection>
      </Container>
    );

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
