import React from "react";
import SubtitleField from "../SubtitleField";
import SubTitleInput from "../SubtitleInput";
import * as S from "./style";

function SubtitleForm() {
  return (
    <S.Container>
      <S.SubtitleList>
        <SubtitleField />
        <SubtitleField />
        <SubtitleField />
        <SubtitleField />
        <SubtitleField />
        <SubtitleField />
        <SubtitleField />
        <SubtitleField />
        <SubtitleField />
        <SubtitleField />
        <SubtitleField />
      </S.SubtitleList>
      <SubTitleInput />
    </S.Container>
  );
}

export default SubtitleForm;
