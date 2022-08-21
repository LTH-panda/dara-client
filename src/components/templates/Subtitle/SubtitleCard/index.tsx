import React from "react";
import * as S from "./style";

type SubtitleCardProps = {
  timeline: string;
  subtitle: string;
};

function SubtitleCard({
  timeline = "tie",
  subtitle = "test",
}: SubtitleCardProps) {
  return (
    <S.Container>
      <S.Timeline>{timeline}</S.Timeline>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Container>
  );
}

export default SubtitleCard;
