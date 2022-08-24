import React from "react";
import { VideoCard } from "components/modules";
import * as S from "./style";

const videolist = [
  {
    title: "title",
    video: "video",
    like: 10,
  },
  {
    title: "title",
    video: "video",
    like: 10,
  },
  {
    title: "title",
    video: "video",
    like: 10,
  },
  {
    title: "title",
    video: "video",
    like: 10,
  },
];

function HomeVideoList() {
  return (
    <S.VideoListContainer>
      <S.ListTitle>인기 동영상</S.ListTitle>
      <S.VideoListBlock>
        {videolist &&
          videolist.map((v: { title: string; video: string; like: number }) => (
            <VideoCard title={v.title} video={v.video} like={v.like} />
          ))}
      </S.VideoListBlock>
      <S.ListTitle>최신 동영상</S.ListTitle>
      <S.VideoListBlock>
        {videolist &&
          videolist.map((v: { title: string; video: string; like: number }) => (
            <VideoCard title={v.title} video={v.video} like={v.like} />
          ))}
      </S.VideoListBlock>
    </S.VideoListContainer>
  );
}

export default HomeVideoList;
