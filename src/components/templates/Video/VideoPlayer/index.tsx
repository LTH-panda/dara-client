import React, { useEffect, useRef } from "react";
import YouTube from "react-youtube";
import { useSetRecoilState } from "recoil";
import { videoCurrentTime, videoIsPause } from "recoil/video";
import * as S from "./style";

type VideoPlayerProps = {
  videoId: string;
};

function VideoPlayer({ videoId }: VideoPlayerProps) {
  const playerRef = useRef<YouTube>(null);
  const setCurrentTime = useSetRecoilState(videoCurrentTime);
  const setIsPause = useSetRecoilState(videoIsPause);

  useEffect(() => {
    const getTime = setInterval(async () => {
      if (playerRef.current) {
        const currentTime = await playerRef.current
          .getInternalPlayer()
          .getCurrentTime();
        const min = Math.floor(currentTime / 60);
        const hour = Math.floor(min / 60);
        const seconds = Math.floor(currentTime - min * 60);

        const formattedCurrentTime = `${hour.toString().padStart(2, "0")}:${min
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

        setCurrentTime(formattedCurrentTime);
      }
    }, 1000);
    return () => clearInterval(getTime);
  }, [playerRef]);

  return (
    <S.Container>
      <YouTube
        videoId={videoId}
        opts={{ width: 800, height: 450 }}
        ref={playerRef}
        onPlay={() => setIsPause(false)}
        onPause={() => setIsPause(true)}
      />
    </S.Container>
  );
}

export default VideoPlayer;
