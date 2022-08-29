import React, { useEffect, useState } from "react";
import { getVideoListPopular, getVideoListComplete } from "apis/video";
import { VideoCard } from "components/modules";
import { useQuery } from "@tanstack/react-query";
import * as S from "./style";

const videolist = [
  {
    videoIdx: 1,
    title: "뉴진스 민지",
    link: "https://youtu.be/p1cE9T0CFCQ",
  },
  {
    videoIdx: 2,
    title: "엔시티 런쥔",
    link: "https://youtu.be/mhJfozWlSaM",
  },
  {
    videoIdx: 3,
    title: "소녀시대 윤아",
    link: "https://youtu.be/uoxcux4Scxc",
  },
  {
    videoIdx: 4,
    title: "뉴진스 하니",
    link: "https://youtu.be/lmJPeFW75qQ",
  },
];

function HomeVideoList() {
  const populerQuery = useQuery(["popularVideo"], getVideoListPopular);
  const [popularVideo, setPopularVideo] = useState([]);

  const newQuery = useQuery(["newVideo"], getVideoListComplete);
  const [newVideo, setNewVideo] = useState([]);

  useEffect(() => {
    if (populerQuery.data) {
      setPopularVideo(populerQuery.data);
    }
  }, [populerQuery.data]);

  useEffect(() => {
    if (newQuery.data) {
      setNewVideo(newQuery.data);
    }
  }, [newQuery.data]);

  return (
    <S.VideoListContainer>
      <S.ListTitle>인기 동영상</S.ListTitle>
      <S.VideoListBlock>
        {popularVideo &&
          popularVideo.map(
            (v: { videoIdx: number; title: string; link: string }) => (
              <VideoCard
                videoIdx={v.videoIdx}
                title={v.title}
                link={v.link}
                key={v.videoIdx}
              />
            )
          )}
      </S.VideoListBlock>
      <S.ListTitle>최신 동영상</S.ListTitle>
      <S.VideoListBlock>
        {newVideo &&
          newVideo.map(
            (v: { videoIdx: number; title: string; link: string }) => (
              <VideoCard
                videoIdx={v.videoIdx}
                title={v.title}
                link={v.link}
                key={v.videoIdx}
              />
            )
          )}
      </S.VideoListBlock>
    </S.VideoListContainer>
  );
}

export default HomeVideoList;
