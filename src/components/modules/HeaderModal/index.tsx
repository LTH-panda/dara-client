import React, { useRef, useState } from "react";
import Image from "next/image";
import { LinkTo, SvgIcon } from "components/atoms";
import useClickOutside from "hooks/useClickOutside";
import { signOut } from "next-auth/react";
import userImg from "../../../assets/images/user.png";
import * as S from "./style";

type ModalProps = {
  name: string;
  email: String;
};

function HeaderModal({ name, email }: ModalProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <S.ModalContainer onClick={() => setIsOpen(!isOpen)} ref={dropdownRef}>
      <S.UserIcon>
        <SvgIcon name="user" size={25} />
      </S.UserIcon>
      {isOpen && (
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
              <LinkTo href="/mypage">마이페이지</LinkTo>
            </S.MyPageInfoElement>
            <S.MyPageInfoElement>신청영상</S.MyPageInfoElement>
            <S.MyPageInfoElement>제작영상</S.MyPageInfoElement>
          </S.MyPageInfoSection>
          <S.MyPageInfoSection>
            <S.MyPageInfoElement>계정관리</S.MyPageInfoElement>
          </S.MyPageInfoSection>
          <hr />
          <S.LogoutSection type="button" onClick={() => signOut()}>
            <S.MyPageInfoElement>로그아웃</S.MyPageInfoElement>
          </S.LogoutSection>
        </S.ModalBlock>
      )}
    </S.ModalContainer>
  );
}

export default HeaderModal;
