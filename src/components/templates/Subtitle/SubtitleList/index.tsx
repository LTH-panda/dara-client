import { confirmSubtitle } from "apis/subtitle";
import { Subtitle } from "apis/video";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { videoCurrentSubtitle } from "recoil/video";
import SubtitleCard from "../SubtitleCard";
import * as S from "./style";

type SubTitleListProps = {
  subtitles: Subtitle[];
  videoIdx: number;
};

function SubtitleList({ subtitles, videoIdx }: SubTitleListProps) {
  const router = useRouter();
  const listRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const currentSubtitle = useRecoilValue(videoCurrentSubtitle);

  // if the time of card equals the video current time,
  // scroll to that subtitle card
  useEffect(() => {
    if (cardRef.current && listRef.current)
      listRef.current.scrollTo({
        top: cardRef.current.offsetTop,
        behavior: "smooth",
      });
  }, [listRef.current, cardRef.current]);

  const onConfirm = async () => {
    // await confirmSubtitle({ userIdx: 11, videoIdx });
    router.push(`/video/${videoIdx}/subtitle`);
  };

  if (!subtitles.length)
    return (
      <S.Container>
        <S.Center>
          <S.GoSubtitleButton onClick={onConfirm}>제작하기</S.GoSubtitleButton>
        </S.Center>
      </S.Container>
    );

  return (
    <S.Container ref={listRef}>
      {subtitles.map((sub) => (
        <SubtitleCard
          timeline={sub.timeline}
          subtitle={sub.content}
          ref={sub.timeline === currentSubtitle ? cardRef : undefined}
          key={sub.subtitleIdx}
        />
      ))}
    </S.Container>
  );
}

export default SubtitleList;
