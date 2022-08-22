import React from "react";
import SubtitleCard from "../SubtitleCard";
import * as S from "./style";

type SubTitleListProps = {
  subtitles: any[];
};

function SubtitleList({ subtitles }: SubTitleListProps) {
  return (
    <S.Container>
      <SubtitleCard />
      <SubtitleCard />
      <SubtitleCard />
      <SubtitleCard />
    </S.Container>
  );
}

export default SubtitleList;
