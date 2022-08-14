import { SvgIcon } from "components/atoms";
import React from "react";
import * as S from "./style";

function SubtitleField() {
  return (
    <S.Container>
      <S.Timeline>00:00</S.Timeline>
      <S.SubtitleInput />
      <S.ActionButton type="button">
        <SvgIcon name="dotsHorizontal" />
      </S.ActionButton>
    </S.Container>
  );
}

export default SubtitleField;
