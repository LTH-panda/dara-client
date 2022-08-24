import React from "react";
import LinkTo from "../LinkTo";
import SvgIcon from "../SvgIcon";
import * as S from "./style";

function Logotypo() {
  return (
    <LinkTo href="/">
      <S.Logo>
        <SvgIcon name="logoD" />
        <SvgIcon name="logoA" />
        <SvgIcon name="logoR" />
        <SvgIcon name="logoA" />
      </S.Logo>
    </LinkTo>
  );
}

export default Logotypo;
