import React from "react";
import {
  getVideoListComplete,
  getVideoListCompleteByCategory,
} from "apis/video";
import { useQuery } from "@tanstack/react-query";
import { VideoCard } from "components/modules";
import { useRecoilValue } from "recoil";
import { categoryState } from "recoil/category";
import * as S from "./style";

function CompleteVideoList() {
  const categoryIdx = useRecoilValue(categoryState);

  const {
    data: completeAll,
    isLoading: isLoadingAll,
    error: errorAll,
  } = useQuery(["commissionAll"], getVideoListComplete);

  const {
    data: completeCate,
    isLoading: isLoadingCate,
    error: errorCate,
  } = useQuery(["commissionCate", categoryIdx], () =>
    getVideoListCompleteByCategory(categoryIdx)
  );

  if (isLoadingAll && isLoadingCate) {
    return <div>loading...</div>;
  }

  if (errorAll && errorCate) {
    return <div>error...</div>;
  }

  return (
    <S.VideoListContainer>
      <S.VideoListBlock>
        {categoryIdx === 0
          ? completeAll &&
            completeAll.map(
              (v: { videoIdx: number; title: string; link: string }) => (
                <VideoCard
                  videoIdx={v.videoIdx}
                  title={v.title}
                  link={v.link}
                  key={v.videoIdx}
                />
              )
            )
          : completeCate &&
            completeCate.map(
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

export default CompleteVideoList;
