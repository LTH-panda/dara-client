import React from "react";
import VideoPlayer from "../VideoPlayer";
import * as S from "./style";

function VideoForm() {
  return (
    <S.Container>
      <VideoPlayer />
      <S.Block>
        <S.Title>title</S.Title>
        <S.Submit>제출</S.Submit>
      </S.Block>
    </S.Container>
  );
}

export default VideoForm;
