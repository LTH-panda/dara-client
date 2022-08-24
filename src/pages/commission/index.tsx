import styled from "@emotion/styled";
import Category from "components/modules/Category";
import CommissionVideoList from "components/templates/Video/CommissionVideoList";
import { ListButtons } from "components/modules";
import React, { useState, useCallback } from "react";

function ComissionPage() {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback(
    (cate: React.SetStateAction<string>) => setCategory(cate),
    []
  );
  return (
    <Container>
      <Category onSelect={onSelect} cate={category} />
      <ListButtons />
      <CommissionVideoList />
    </Container>
  );
}

export default ComissionPage;

const Container = styled.div`
  margin: auto;
  padding: 0 9rem;
`;
