import React from "react";
import Image from "next/image";
import { LinkTo } from "components/atoms";
import userImg from "../../../assets/images/user.png";
import * as S from "./style";

type ModalProps = {
  name: string;
  email: String;
};

function HeaderModal({ name, email }: ModalProps) {
  return (
    <S.ModalBlock>
      <S.ProfileBlock>
        <S.ProfileImg>
          <Image
            src={userImg}
            alt="user profile"
            layout="fill"
            objectFit="contain"
          />
        </S.ProfileImg>
        <S.ProfileInfoSection>
          <S.ProfileName>{name}</S.ProfileName>
          <S.ProfileEmail>{email}</S.ProfileEmail>
        </S.ProfileInfoSection>
      </S.ProfileBlock>
      <S.MyPageInfoSection>
        <S.MyPageInfoElement>
          <LinkTo href="/home">마이페이지</LinkTo>
        </S.MyPageInfoElement>
        <S.MyPageInfoElement>신청영상</S.MyPageInfoElement>
        <S.MyPageInfoElement>제작영상</S.MyPageInfoElement>
      </S.MyPageInfoSection>
      <S.MyPageInfoSection>
        <S.MyPageInfoElement>계정관리</S.MyPageInfoElement>
      </S.MyPageInfoSection>
      <hr />
      <S.LogoutSection>
        <S.MyPageInfoElement>로그아웃</S.MyPageInfoElement>
      </S.LogoutSection>
    </S.ModalBlock>
  );
}

export default HeaderModal;
