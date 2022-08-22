import React from "react";
import Image from "next/image";
import { SvgIcon } from "components/atoms";
import userImg from "../../../assets/images/user.png";
import * as S from "./style";

type MyProfileProps = {
  name: string;
  email: String;
  point: String;
};

function MyProfile({ name, email, point }: MyProfileProps) {
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
        <S.ProfileName>{name}</S.ProfileName>
        <S.ProfileEmail>{email}</S.ProfileEmail>
      </S.ProfileSection>
      <S.PointSection>
        <SvgIcon name="pcircle" size={50} />
        <S.PointTitle>포인트</S.PointTitle>
        <S.Points>{point}P</S.Points>
      </S.PointSection>
    </S.ProfileContainer>
  );
}

export default MyProfile;
