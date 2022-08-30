import React from "react";
import { getVideoListRequest, getVideoListRequestByCategory } from "apis/video";
import { useQuery } from "@tanstack/react-query";
import { VideoCard } from "components/modules";
import { useRecoilValue } from "recoil";
import { categoryState } from "recoil/category";
import * as S from "./style";

function CommissionVideoList() {
  const categoryIdx = useRecoilValue(categoryState);

  const {
    data: commissionAll,
    isLoading: isLoadingAll,
    error: errorAll,
  } = useQuery(["commissionAll"], getVideoListRequest);

  const {
    data: commissionCate,
    isLoading: isLoadingCate,
    error: errorCate,
  } = useQuery(["commissionCate", categoryIdx], () =>
    getVideoListRequestByCategory(categoryIdx)
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
          ? commissionAll &&
            commissionAll.map(
              (v: { videoIdx: number; title: string; link: string }) => (
                <VideoCard
                  videoIdx={v.videoIdx}
                  title={v.title}
                  link={v.link}
                  key={v.videoIdx}
                />
              )
            )
          : commissionCate &&
            commissionCate.map(
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

export default CommissionVideoList;
