import React from "react";
import { signIn } from "next-auth/react";
import * as S from "./style";

function AuthActions() {
  return (
    <S.Container>
      <S.SignInButton type="button" onClick={() => signIn("google")}>
        구글로 로그인
      </S.SignInButton>
      <S.SignInButton type="button" onClick={() => signIn("kakao")}>
        카카오로 로그인
      </S.SignInButton>
    </S.Container>
  );
}

export default AuthActions;
