import React from "react";
import * as S from "./style";

type SubtitleCardProps = {
  timeline: string;
  subtitle: string;
  focused: boolean;
};

const SubtitleCard = React.forwardRef<HTMLDivElement, SubtitleCardProps>(
  ({ timeline = "tie", subtitle = "test", focused = false }, ref) => (
    <S.Container focused={focused} ref={ref}>
      <S.Timeline>{timeline}</S.Timeline>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Container>
  )
);

export default SubtitleCard;
