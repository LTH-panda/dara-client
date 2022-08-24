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

function MyPageVideoList() {
  return (
    <S.VideoListContainer>
      <S.ListTitle>제작 중인 영상</S.ListTitle>
      <S.VideoListBlock>
        {videolist &&
          videolist.map((v: { title: string; video: string; like: number }) => (
            <VideoCard title={v.title} video={v.video} like={v.like} />
          ))}
      </S.VideoListBlock>
      <S.ListTitle>제작 완료 영상</S.ListTitle>
      <S.VideoListBlock>
        {videolist &&
          videolist.map((v: { title: string; video: string; like: number }) => (
            <VideoCard title={v.title} video={v.video} like={v.like} />
          ))}
      </S.VideoListBlock>
    </S.VideoListContainer>
  );
}

export default MyPageVideoList;
