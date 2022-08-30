import React from "react";
import {
  getVideoListRequestByUserId,
  getVideoListProduceByUserId,
} from "apis/mypage";
import { VideoCard } from "components/modules";
import { useQuery } from "@tanstack/react-query";
import * as S from "./style";

function MyPageVideoList() {
  const {
    data: userRequestVideo,
    isLoading: isLoadingRequest,
    error: errorRequest,
  } = useQuery(["userRequest"], () => getVideoListRequestByUserId(13));
  const {
    data: userProduceVideo,
    isLoading: isLoadingProduce,
    error: errorProduce,
  } = useQuery(["userProduce"], () => getVideoListProduceByUserId(13));

  console.log(userRequestVideo);

  if (isLoadingRequest && isLoadingProduce) {
    return <div>loading...</div>;
  }

  if (errorRequest && errorProduce) {
    return <div>error...</div>;
  }

  return (
    <S.VideoListContainer>
      <S.ListTitle>신청 영상</S.ListTitle>
      <S.VideoListBlock>
        {userRequestVideo.reqList &&
          userRequestVideo.reqList.map(
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
      <S.ListTitle>제작 영상</S.ListTitle>
      <S.VideoListBlock>
        {userProduceVideo.reqList &&
          userProduceVideo.reqList.map(
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

export default MyPageVideoList;
