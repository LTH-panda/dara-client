import styled from "@emotion/styled";
import { LinkTo } from "components/atoms";
import React from "react";

function AuthErrorPage() {
  return (
    <Container>
      <Title>오류가 발생했어요!</Title>
      <LinkTo href="/auth">
        <RetryAuthButton>다시 로그인 해보기</RetryAuthButton>
      </LinkTo>
    </Container>
  );
}

export default AuthErrorPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
  padding: 8rem 2rem;
  margin: auto;
  max-width: 520px;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
`;

const RetryAuthButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 40px;
  border: 1px solid #b3b3b3;
`;
