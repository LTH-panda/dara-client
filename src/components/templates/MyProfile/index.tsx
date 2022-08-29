import React from "react";
import Image from "next/image";
import userImg from "../../../assets/images/user.png";
import * as S from "./style";

function MyProfile() {
  return (
    <S.ProfileContainer>
      <S.ProfileSection>
        <S.ProfileImg>
          <Image
            src={userImg}
            alt="user profile"
            layout="fill"
            objectFit="contain"
          />
        </S.ProfileImg>
        <S.ProfileName>아무개</S.ProfileName>
        <S.ProfileEmail>email@email.com</S.ProfileEmail>
      </S.ProfileSection>
      <S.PointSection>
        <S.PointComment>포인트로 나중에 기부할 수 있어요!</S.PointComment>
        <S.PointIcon>P</S.PointIcon>
        <S.PointTitle>포인트</S.PointTitle>
        <S.Points>2,300 P</S.Points>
      </S.PointSection>
    </S.ProfileContainer>
  );
}

export default MyProfile;
