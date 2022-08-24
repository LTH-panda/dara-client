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

function CommissionVideoList() {
  return (
    <S.VideoListContainer>
      <S.VideoListBlock>
        {videolist &&
          videolist.map((v: { title: string; video: string; like: number }) => (
            <VideoCard title={v.title} video={v.video} like={v.like} />
          ))}
      </S.VideoListBlock>
    </S.VideoListContainer>
  );
}

export default CommissionVideoList;
