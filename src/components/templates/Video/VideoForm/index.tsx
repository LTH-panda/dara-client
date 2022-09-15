import { useMutation } from "@tanstack/react-query";
import { registerSubtitle } from "apis/subtitle";
import { useRouter } from "next/router";
import React from "react";
import VideoPlayer from "../VideoPlayer";
import * as S from "./style";

type VideoFormProps = {
  title: string;
  videoIdx: number;
  youtubeVideoId: string;
};

function VideoForm({ title, videoIdx, youtubeVideoId }: VideoFormProps) {
  const router = useRouter();
  const { mutate: submit } = useMutation(registerSubtitle);

  const onSubmit = () => {
    submit({ userIdx: 11, videoIdx });
    router.replace(`/video/${videoIdx}`);
  };

  return (
    <S.Container>
      <VideoPlayer videoId={youtubeVideoId} />
      <S.Block>
        <S.Title>{title}</S.Title>
        <S.Submit onClick={onSubmit}>제출</S.Submit>
      </S.Block>
    </S.Container>
  );
}

export default VideoForm;
