import React from "react";
import { VideoCard } from "components/modules";
import * as S from "./style";

type VideoListProps = {
  videolist: any[];
  // onChange: React.ChangeEventHandler<HTMLInputElement>;
};

function VideoList({ videolist }: VideoListProps) {
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

export default VideoList;
