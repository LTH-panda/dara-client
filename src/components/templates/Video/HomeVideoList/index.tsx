import React, { useEffect, useState } from "react";
import { getVideoListPopular } from "apis/video";
import { VideoCard } from "components/modules";
import { useQuery } from "@tanstack/react-query";
import * as S from "./style";

const videolist = [
  {
    videoIdx: 1,
    title: "뉴진스 민지",
    link: "https://youtu.be/p1cE9T0CFCQ",
  },
  {
    videoIdx: 2,
    title: "엔시티 런쥔",
    link: "https://youtu.be/mhJfozWlSaM",
  },
  {
    videoIdx: 3,
    title: "소녀시대 윤아",
    link: "https://youtu.be/uoxcux4Scxc",
  },
  {
    videoIdx: 4,
    title: "뉴진스 하니",
    link: "https://youtu.be/lmJPeFW75qQ",
  },
];

function HomeVideoList() {
  // const { status, data, error } = useQuery(["popular"], getVideoListPopular);

  // console.log(data);

  return (
    <S.VideoListContainer>
      <S.ListTitle>인기 동영상</S.ListTitle>
      <S.VideoListBlock>
        {videolist &&
          videolist.map(
            (v: { videoIdx: number; title: string; link: string }) => (
              <VideoCard videoIdx={v.videoIdx} title={v.title} link={v.link} />
            )
          )}
      </S.VideoListBlock>
      <S.ListTitle>최신 동영상</S.ListTitle>
      <S.VideoListBlock>
        {videolist &&
          videolist.map(
            (v: { videoIdx: number; title: string; link: string }) => (
              <VideoCard videoIdx={v.videoIdx} title={v.title} link={v.link} />
            )
          )}
      </S.VideoListBlock>
    </S.VideoListContainer>
  );
}

export default HomeVideoList;
