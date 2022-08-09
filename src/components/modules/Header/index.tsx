import { LinkTo, Logotypo } from "components/atoms";
import React, { useState } from "react";
import HeaderModal from "../HeaderModal";
import * as S from "./style";

type HeaderProps = {
  search: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

function Header({ search, onChange }: HeaderProps) {
  const [modal, setModal] = useState(false);

  return (
    <S.Header>
      <Logotypo />
      <S.SearchBar placeholder="검색" value={search} onChange={onChange} />
      <S.Nav>
        <LinkTo href="/">완료 영상</LinkTo>
        <LinkTo href="/">의뢰 영상</LinkTo>
        <button type="button" onClick={() => setModal(!modal)}>
          마이페이지
        </button>
        {modal === true ? <HeaderModal name="아무개" email="email" /> : null}
      </S.Nav>
    </S.Header>
  );
}

export default Header;
