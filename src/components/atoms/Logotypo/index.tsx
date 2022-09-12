import theme from "commons/styles/theme";
import React from "react";
import LinkTo from "../LinkTo";
import SvgIcon from "../SvgIcon";
import * as S from "./style";

function Logotypo() {
  return (
    <LinkTo href="/">
      <S.Logo>
        <SvgIcon name="logoD" color={theme.color.primary} />
        <SvgIcon name="logoA" color={theme.color.primary} />
        <SvgIcon name="logoR" color={theme.color.primary} />
        <SvgIcon name="logoA" color={theme.color.primary} />
      </S.Logo>
    </LinkTo>
  );
}

export default Logotypo;
