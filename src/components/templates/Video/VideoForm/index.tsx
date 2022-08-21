import React from "react";
import VideoPlayer from "../VideoPlayer";
import * as S from "./style";

function VideoForm() {
  return (
    <S.Container>
      <VideoPlayer />
      <S.Title>title</S.Title>
      <S.Actions>
        <S.Submit>제출</S.Submit>
      </S.Actions>
    </S.Container>
  );
}

export default VideoForm;
