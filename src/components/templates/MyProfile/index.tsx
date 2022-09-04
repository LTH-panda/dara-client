import React from "react";
import Image from "next/image";
import { getUserProfileByUserId } from "apis/mypage";
import { useQuery } from "@tanstack/react-query";
import * as S from "./style";

function MyProfile() {
  const {
    data: userProfile,
    isLoading,
    error,
  } = useQuery(["userRequest"], () => getUserProfileByUserId(13));

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error...</div>;
  }

  return (
    userProfile && (
      <S.ProfileContainer>
        <S.ProfileSection>
          <S.ProfileImg>
            <Image
              src={userProfile?.profileImg}
              alt="user profile"
              layout="fill"
              objectFit="contain"
            />
          </S.ProfileImg>
          <S.ProfileName>{userProfile?.name}</S.ProfileName>
          <S.ProfileEmail>{userProfile?.email}</S.ProfileEmail>
        </S.ProfileSection>
        <S.PointSection>
          <S.PointComment>포인트로 나중에 기부할 수 있어요!</S.PointComment>
          <S.PointIcon>P</S.PointIcon>
          <S.PointTitle>포인트</S.PointTitle>
          <S.Points>{userProfile?.point} P</S.Points>
        </S.PointSection>
      </S.ProfileContainer>
    )
  );
}

export default MyProfile;
