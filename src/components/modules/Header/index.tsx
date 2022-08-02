import { LinkTo, Logotypo } from "components/atoms";
import React from "react";
import * as S from "./style";

type HeaderProps = {
  search: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

function Header({ search, onChange }: HeaderProps) {
  return (
    <S.Header>
      <Logotypo />
      <S.SearchBar placeholder="검색" value={search} onChange={onChange} />
      <S.Nav>
        <LinkTo href="/">완료 영상</LinkTo>
        <LinkTo href="/">의뢰 영상</LinkTo>
        <LinkTo href="/">마이페이지</LinkTo>
      </S.Nav>
    </S.Header>
  );
}

export default Header;
