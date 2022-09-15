import { requestVideo } from "apis/video";
import { Button, SvgIcon } from "components/atoms";
import { useRouter } from "next/router";
import React from "react";
import * as S from "./style";

type RequestActionsProps = {
  onAdd: () => void;
};

function RequestActions({ onAdd }: RequestActionsProps) {
  const router = useRouter();
  const onRequest = async () => {
    await requestVideo({
      requester: 11,
      title:
        "[마이리틀텔레비전1] 요즘 유튭 씹어드시는 백종원 대표의 풋풋한 모습 ♥",
      categoryIdx: 5,
      link: "https://youtu.be/do9u6qo-yWM",
    });
    router.push("/commission");
  };

  // title과 link만 수정

  return (
    <S.Container>
      <Button title="신청하기" onClick={onRequest} />
      <S.CircleButton type="button" onClick={onAdd}>
        <SvgIcon name="plus" />
      </S.CircleButton>
    </S.Container>
  );
}

export default RequestActions;
