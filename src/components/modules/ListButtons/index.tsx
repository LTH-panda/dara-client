import React from "react";
import { LinkTo } from "components/atoms";
import * as S from "./style";

function ListButtons() {
  return (
    <S.ButtonsSection>
      <LinkTo href="/">
        <S.ListButton>신청하기</S.ListButton>
      </LinkTo>
      <LinkTo href="/">
        <S.ListButton>제작하기</S.ListButton>
      </LinkTo>
    </S.ButtonsSection>
  );
}

export default ListButtons;
