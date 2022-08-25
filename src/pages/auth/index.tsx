import styled from "@emotion/styled";
import { AuthActions } from "components/templates/Auth";
import React from "react";

function AuthPage() {
  return (
    <Container>
      <Title>소셜로그인으로 합류하세요!</Title>
      <AuthActions />
    </Container>
  );
}

export default AuthPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 8rem 2rem;
  margin: auto;
  max-width: 520px;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
`;
