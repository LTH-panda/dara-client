import React from "react";
import * as S from "./style";

type VideoAboutProps = {
  title: string;
  author: string;
  isConfirmed?: boolean;
};

function VideoAbout({ title, author, isConfirmed = false }: VideoAboutProps) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.RowContainer>
        <S.Author>{author}</S.Author>
        {isConfirmed && <S.ConfirmMark>인증</S.ConfirmMark>}
        <S.Actions>
          <S.ActionButton type="button">좋아요</S.ActionButton>
          <S.ActionButton type="button">싫어요</S.ActionButton>
          <S.ActionButton type="button">공유</S.ActionButton>
        </S.Actions>
      </S.RowContainer>
    </S.Container>
  );
}

export default VideoAbout;
