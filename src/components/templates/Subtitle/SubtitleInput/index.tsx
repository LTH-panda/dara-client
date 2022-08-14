import React from "react";
import * as S from "./style";

function SubTitleInput() {
  return (
    <S.Container>
      <S.Timeline>00:00</S.Timeline>
      <S.SubtitleTextarea />
      <S.Submit type="button">완료</S.Submit>
    </S.Container>
  );
}

export default SubTitleInput;
