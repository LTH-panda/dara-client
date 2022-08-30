import React from "react";
import { LinkTo } from "components/atoms";
import * as S from "./style";

type VideoProps = {
  videoIdx: number;
  title: string;
  link: string;
};

function VideoCard({ videoIdx, title, link }: VideoProps) {
  const thumbIdx = link.split("/").reverse()[0];
  const thumbnail = `https://img.youtube.com/vi/${thumbIdx}/mqdefault.jpg`;

  return (
    <S.VideoBlock>
      <LinkTo href={`/video/${videoIdx}`}>
        <S.VideoSection>
          <S.Thumbnail src={thumbnail} alt={title} />
        </S.VideoSection>
        <S.TitleSection>
          <S.VideoCardTitle>{title}</S.VideoCardTitle>
        </S.TitleSection>
      </LinkTo>
    </S.VideoBlock>
  );
}

export default VideoCard;
