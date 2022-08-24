import React from "react";
import Image from "next/image";
import { SvgIcon } from "components/atoms";
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
        <SvgIcon name="pcircle" size={50} />
        <S.PointTitle>포인트</S.PointTitle>
        <S.Points>2,300P</S.Points>
      </S.PointSection>
    </S.ProfileContainer>
  );
}

export default MyProfile;
