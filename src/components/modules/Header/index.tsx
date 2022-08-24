import { Video } from "apis/video";
import { LinkTo, Logotypo, Spinner } from "components/atoms";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import HeaderModal from "../HeaderModal";
import Search from "../Search";
import * as S from "./style";

type HeaderProps = {
  search: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  searchResult: Video[];
};

function Header({ search, onChange, searchResult }: HeaderProps) {
  const { status } = useSession();
  const router = useRouter();

  return (
    <S.Header>
      <Logotypo />
      <Search search={search} onSearch={onChange} searchResult={searchResult} />
      <S.Nav>
        <LinkTo href="/complete">
          <S.CategoryButton isCurrent={router.asPath.includes("complete")}>
            완료영상
          </S.CategoryButton>
        </LinkTo>
        <LinkTo href="/commission">
          <S.CategoryButton isCurrent={router.asPath.includes("commission")}>
            의뢰 영상
          </S.CategoryButton>
        </LinkTo>
        {status === "loading" ? (
          <Spinner isVisible />
        ) : status === "authenticated" ? (
          <HeaderModal name="아무개" email="email@email.com" />
        ) : (
          <LinkTo href="/auth">
            <S.CategoryButton isCurrent={router.asPath.includes("auth")}>
              로그인
            </S.CategoryButton>
          </LinkTo>
        )}
      </S.Nav>
    </S.Header>
  );
}

export default Header;
