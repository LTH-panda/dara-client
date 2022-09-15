import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSubtitle } from "apis/subtitle";
import useSubtitleState from "hooks/states/useSubtitleState";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { videoCurrentTime, videoIsPause } from "recoil/video";
import * as S from "./style";

function SubTitleInput() {
  const queryClient = useQueryClient();
  const { asPath } = useRouter();
  const { pushFormList } = useSubtitleState();
  const isPause = useRecoilValue(videoIsPause);
  const currentTime = useRecoilValue(videoCurrentTime);
  const [form, setForm] = useState<{ timeline: string; subtitle: string }>({
    timeline: "",
    subtitle: "",
  });
  const { mutate: insertSubtitle } = useMutation(createSubtitle, {
    onSuccess: () => {
      queryClient.invalidateQueries(["video"]);
    },
  });

  useEffect(() => {
    if (isPause) setForm({ ...form, timeline: currentTime });
  }, [currentTime, isPause]);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const resetForm = useCallback(() => {
    setForm({ timeline: "", subtitle: "" });
  }, []);

  const onPush = () => {
    if (form.timeline && form.subtitle) {
      pushFormList(form.timeline, form.subtitle);
      insertSubtitle({
        userIdx: 11,
        videoIdx: parseInt(asPath.split("/")[2], 10),
        letterCnt: form.subtitle.length,
        timeLine: form.subtitle,
        content: form.timeline,
      });
      resetForm();
    }
  };

  return (
    <S.Container>
      <S.InputBlock>
        <S.Timeline
          placeholder="00:00:00"
          name="timeline"
          value={form.timeline}
          onChange={onChange}
          maxLength={8}
        />
        <S.SubtitleTextarea
          placeholder="자막을 입력해주세요"
          name="subtitle"
          value={form.subtitle}
          onChange={onChange}
        />
      </S.InputBlock>
      <S.Submit type="button" onClick={onPush}>
        자막 추가
      </S.Submit>
    </S.Container>
  );
}

export default SubTitleInput;
