import React from "react";
import LinkTo from "../LinkTo";
import * as S from "./style";

function Logotypo() {
  return (
    <LinkTo href="/">
      <S.Logo>logo</S.Logo>
    </LinkTo>
  );
}

export default Logotypo;
