import React from "react";
import * as S from "./style";

type ButtonProps = {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isFit?: boolean;
};

function Button({ title, onClick, isFit = false }: ButtonProps) {
  return (
    <S.Button type="button" onClick={onClick} isFit={isFit}>
      {title}
    </S.Button>
  );
}

export default Button;
