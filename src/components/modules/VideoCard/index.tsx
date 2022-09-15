import React from "react";
import { LinkTo } from "components/atoms";
import { useRouter } from "next/router";
import * as S from "./style";

type VideoProps = {
  videoIdx: number;
  title: string;
  link: string;
};

function VideoCard({ videoIdx, title, link }: VideoProps) {
  const router = useRouter();
  const thumbIdx = link.split("/").reverse()[0];
  const thumbnail = `https://img.youtube.com/vi/${thumbIdx}/mqdefault.jpg`;

  return (
    <S.VideoBlock>
      <LinkTo
        href={{
          pathname: `/video/${videoIdx}`,
          query: {
            type: router.pathname.includes("commission")
              ? "commission"
              : "complete",
          },
        }}
      >
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
