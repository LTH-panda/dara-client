import styled from "@emotion/styled";
import Category from "components/modules/Category";
import CompleteVideoList from "components/templates/Video/CompleteVideoList";
import { ListButtons } from "components/modules";
import React, { useState, useCallback } from "react";

function CompletePage() {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback(
    (cate: React.SetStateAction<string>) => setCategory(cate),
    []
  );
  return (
    <Container>
      <Category onSelect={onSelect} cate={category} />
      <ListButtons />
      <CompleteVideoList />
    </Container>
  );
}

export default CompletePage;

const Container = styled.div`
  margin: auto;
  padding: 0 9rem;
`;
