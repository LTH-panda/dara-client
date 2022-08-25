import React from "react";
import { VideoCard } from "components/modules";
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
  {
    videoIdx: 5,
    title: "엔시티 해찬",
    link: "https://youtu.be/5UEsERhiQ10",
  },
  {
    videoIdx: 6,
    title: "미노이의 요리조리",
    link: "https://youtu.be/1osiWjznmJQ",
  },
  {
    videoIdx: 7,
    title: "에스파 윈터",
    link: "https://youtu.be/qx9KafGVp3Y",
  },
  {
    videoIdx: 8,
    title: "에스파 카리나",
    link: "https://youtu.be/tZixREYOIZQ",
  },
];

function CommissionVideoList() {
  return (
    <S.VideoListContainer>
      <S.VideoListBlock>
        {videolist &&
          videolist.map(
            (v: { videoIdx: number; title: string; link: string }) => (
              <VideoCard videoIdx={v.videoIdx} title={v.title} link={v.link} />
            )
          )}
      </S.VideoListBlock>
    </S.VideoListContainer>
  );
}

export default CommissionVideoList;
