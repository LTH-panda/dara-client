import React from "react";
import * as S from "./style";

type VideoProps = {
  video: string;
  title: string;
  like: number;
};

function VideoCard({ video, title, like }: VideoProps) {
  return (
    <S.VideoBlock>
      <S.VideoSection>{video}</S.VideoSection>
      <S.TitleSection>
        <S.VideoCardTitle>{title}</S.VideoCardTitle>
        <S.VideoCardLike>♥︎ {like}</S.VideoCardLike>
      </S.TitleSection>
    </S.VideoBlock>
  );
}

export default VideoCard;
