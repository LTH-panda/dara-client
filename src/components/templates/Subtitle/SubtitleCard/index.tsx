import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { videoCurrentSubtitle, videoCurrentTime } from "recoil/video";
import * as S from "./style";

type SubtitleCardProps = {
  timeline: string;
  subtitle: string;
};

const SubtitleCard = React.forwardRef<HTMLDivElement, SubtitleCardProps>(
  ({ timeline = "tie", subtitle = "test" }, ref) => {
    const currentTime = useRecoilValue(videoCurrentTime);
    const [currentSubtitle, setCurrentSubitlte] =
      useRecoilState(videoCurrentSubtitle);

    useEffect(() => {
      if (currentTime === timeline) setCurrentSubitlte(timeline);
    }, [currentTime]);

    return (
      <S.Container focused={currentSubtitle === timeline} ref={ref}>
        <S.Timeline>{timeline}</S.Timeline>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.Container>
    );
  }
);

export default SubtitleCard;
