import { LinkTo, Logotypo, Spinner } from "components/atoms";
import { useSession } from "next-auth/react";
import React from "react";
import HeaderModal from "../HeaderModal";
import * as S from "./style";

type HeaderProps = {
  search: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

function Header({ search, onChange }: HeaderProps) {
  const { status } = useSession();

  return (
    <S.Header>
      <Logotypo />
      <S.SearchBar placeholder="검색" value={search} onChange={onChange} />
      <S.Nav>
        <LinkTo href="/complete">완료 영상</LinkTo>
        <LinkTo href="/commission">의뢰 영상</LinkTo>
        {status === "loading" ? (
          <Spinner isVisible />
        ) : status === "authenticated" ? (
          <HeaderModal name="아무개" email="email@email.com" />
        ) : (
          <LinkTo href="/auth">로그인</LinkTo>
        )}
      </S.Nav>
    </S.Header>
  );
}

export default Header;
