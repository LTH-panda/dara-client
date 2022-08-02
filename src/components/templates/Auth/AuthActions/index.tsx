import React from "react";
import * as S from "./style";

type AuthActionsProps = {
  onSignIn: () => void;
};

function AuthActions({ onSignIn }: AuthActionsProps) {
  return (
    <S.Container>
      <S.SignInButton type="button" onClick={onSignIn}>
        구글로 로그인
      </S.SignInButton>
      <S.SignInButton type="button" onClick={onSignIn}>
        카카오로 로그인
      </S.SignInButton>
    </S.Container>
  );
}

export default AuthActions;
