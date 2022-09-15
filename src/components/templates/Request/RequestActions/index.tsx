import { Button, SvgIcon } from "components/atoms";
import React from "react";
import * as S from "./style";

type RequestActionsProps = {
  onSubmit: () => void;
  onAdd: () => void;
};

function RequestActions({ onSubmit, onAdd }: RequestActionsProps) {
  return (
    <S.Container>
      <Button title="신청하기" onClick={onSubmit} />
      <S.CircleButton type="button" onClick={onAdd}>
        <SvgIcon name="plus" />
      </S.CircleButton>
    </S.Container>
  );
}

export default RequestActions;
