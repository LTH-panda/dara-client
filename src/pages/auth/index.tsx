import styled from "@emotion/styled";
import { AuthActions } from "components/templates/Auth";
import React from "react";

function AuthPage() {
  const onSignIn = () => {};

  return (
    <Container>
      <AuthActions onSignIn={onSignIn} />
    </Container>
  );
}

export default AuthPage;

const Container = styled.div`
  padding: 6rem 2rem;
  margin: auto;
  max-width: 400px;
`;
