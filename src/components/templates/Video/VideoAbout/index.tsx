import React, { useState } from "react";
import * as S from "./style";

type VideoAboutProps = {
  link: string;
  title: string;
  nickname: string;
};

function VideoAbout({ link, title, nickname }: VideoAboutProps) {
  const [isVisibleShare, setIsVisibleShare] = useState<boolean>(false);

  const onCopy = () => {
    window.navigator.clipboard
      .writeText(link)
      .then(() => alert("링크를 복사했습니다."));
  };

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.RowContainer>
        <S.Author>자막 작성자 : {nickname}</S.Author>
        <S.Actions>
          <S.ActionButton type="button">좋아요</S.ActionButton>
          <S.ActionButton type="button">싫어요</S.ActionButton>
          <S.ActionButton
            type="button"
            onClick={() => setIsVisibleShare(!isVisibleShare)}
          >
            공유
          </S.ActionButton>
          {isVisibleShare && (
            <S.ShareModal>
              {link}
              <S.ActionButton type="button" onClick={onCopy}>
                복사
              </S.ActionButton>
            </S.ShareModal>
          )}
        </S.Actions>
      </S.RowContainer>
    </S.Container>
  );
}

export default VideoAbout;
