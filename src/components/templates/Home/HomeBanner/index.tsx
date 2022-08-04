import React from "react";
import * as S from "./style";

function HomBanner() {
  return (
    <S.HomeBannerBlock>
      <div>홍보 문구</div>
      <S.BannerButtonSection>
        <S.BannerButton>신청하기</S.BannerButton>
        <S.BannerButton>제작하기</S.BannerButton>
      </S.BannerButtonSection>
    </S.HomeBannerBlock>
  );
}

export default HomBanner;
