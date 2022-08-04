import React from "react";
import { VideoCard } from "components/modules";
import * as S from "./style";

type MainVideoListProps = {
  title: string;
  // onChange: React.ChangeEventHandler<HTMLInputElement>;
};

function MainVideoList({ title }: MainVideoListProps) {
  return (
    <S.VideoListContainer>
      <S.ListTitle>{title}</S.ListTitle>
      <S.VideoListBlock>
        <VideoCard title="title" video="video" like={10} />
        <VideoCard title="title" video="video" like={10} />
        <VideoCard title="title" video="video" like={10} />
        <VideoCard title="title" video="video" like={10} />
      </S.VideoListBlock>
    </S.VideoListContainer>
  );
}

export default MainVideoList;
