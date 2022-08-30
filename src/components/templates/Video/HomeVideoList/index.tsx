import React from "react";
import { getVideoListPopular, getVideoListComplete } from "apis/video";
import { VideoCard } from "components/modules";
import { useQuery } from "@tanstack/react-query";
import * as S from "./style";

function HomeVideoList() {
  const {
    data: popularVideo,
    isLoading: isLoadingPopular,
    error: errorPopular,
  } = useQuery(["popularVideo"], getVideoListPopular);
  const {
    data: newVideo,
    isLoading: isLoadingNew,
    error: errorNew,
  } = useQuery(["newVideo"], getVideoListComplete);

  if (isLoadingPopular && isLoadingNew) {
    return <div>loading...</div>;
  }

  if (errorPopular && errorNew) {
    return <div>error...</div>;
  }

  return (
    <S.VideoListContainer>
      <S.ListTitle>인기 동영상</S.ListTitle>
      <S.VideoListBlock>
        {popularVideo &&
          popularVideo.map(
            (v: { videoIdx: number; title: string; link: string }) => (
              <VideoCard
                videoIdx={v.videoIdx}
                title={v.title}
                link={v.link}
                key={v.videoIdx}
              />
            )
          )}
      </S.VideoListBlock>
      <S.ListTitle>최신 동영상</S.ListTitle>
      <S.VideoListBlock>
        {newVideo &&
          newVideo.map(
            (v: { videoIdx: number; title: string; link: string }) => (
              <VideoCard
                videoIdx={v.videoIdx}
                title={v.title}
                link={v.link}
                key={v.videoIdx}
              />
            )
          )}
      </S.VideoListBlock>
    </S.VideoListContainer>
  );
}

export default HomeVideoList;
