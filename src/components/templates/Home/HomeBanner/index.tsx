import React from "react";
import { LinkTo } from "components/atoms";
import SvgIcon from "../../../atoms/SvgIcon";
import * as S from "./style";

function HomBanner() {
  return (
    <S.HomeBannerBlock>
      <S.BannerText>모두가 동등하게 콘텐츠를 즐길 수 있도록</S.BannerText>
      <S.BannerLogo>
        <SvgIcon name="logoD" size={70} />
        <SvgIcon name="logoA" size={70} />
        <SvgIcon name="logoR" size={70} />
        <SvgIcon name="logoA" size={70} />
      </S.BannerLogo>
      <S.BannerButtonSection>
        <LinkTo href="/video/request">
          <S.BannerButton>신청하기</S.BannerButton>
        </LinkTo>
        <LinkTo href="/">
          <S.BannerButton>제작하기</S.BannerButton>
        </LinkTo>
      </S.BannerButtonSection>
    </S.HomeBannerBlock>
  );
}

export default HomBanner;
