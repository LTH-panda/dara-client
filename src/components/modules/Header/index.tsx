import { LinkTo, Logotypo } from "components/atoms";
import React from "react";
import HeaderModal from "../HeaderModal";
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
        <HeaderModal name="아무개" email="email@email.com" />
      </S.Nav>
    </S.Header>
  );
}

export default Header;
