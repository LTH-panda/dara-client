import { Subtitle } from "apis/video";
import { LinkTo } from "components/atoms";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useRef } from "react";
import { useRecoilValue } from "recoil";
import { videoCurrentTime } from "recoil/video";
import SubtitleCard from "../SubtitleCard";
import * as S from "./style";

type SubTitleListProps = {
  subtitles: Subtitle[];
};

function SubtitleList({ subtitles }: SubTitleListProps) {
  const router = useRouter();
  const currentTime = useRecoilValue(videoCurrentTime);
  const listRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // if the time of card equals the video current time,
  // scroll to that subtitle card
  useEffect(() => {
    if (cardRef.current && listRef.current)
      listRef.current.scrollTo({
        top: cardRef.current.offsetTop,
        behavior: "smooth",
      });
  }, [listRef.current, cardRef.current]);

  const toGoSubtitle = useMemo(() => {
    if (router.isReady) return `${router.asPath}/subtitle`;
    return "";
  }, [router]);

  if (!subtitles.length)
    return (
      <S.Container>
        <S.Center>
          <LinkTo href={toGoSubtitle}>
            <S.GoSubtitleButton>제작하기</S.GoSubtitleButton>
          </LinkTo>
        </S.Center>
      </S.Container>
    );

  return (
    <S.Container ref={listRef}>
      {subtitles.map((sub) => (
        <SubtitleCard
          timeline={sub.timeline}
          subtitle={sub.content}
          focused={sub.timeline === currentTime}
          ref={sub.timeline === currentTime ? cardRef : undefined}
          key={sub.subtitleIdx}
        />
      ))}
    </S.Container>
  );
}

export default SubtitleList;
