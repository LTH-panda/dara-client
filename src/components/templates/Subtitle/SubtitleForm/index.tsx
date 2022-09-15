import { Subtitle } from "apis/video";
import useSubtitleState from "hooks/states/useSubtitleState";
import React, { useEffect, useRef } from "react";
import SubtitleField from "../SubtitleField";
import SubTitleInput from "../SubtitleInput";
import * as S from "./style";

type SubtitleFormProps = {
  subtitles: Subtitle[];
};

function SubtitleForm({ subtitles }: SubtitleFormProps) {
  const { formList } = useSubtitleState();
  const listRef = useRef<HTMLDivElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);

  // if field is redered, scoll to field
  useEffect(() => {
    if (fieldRef.current)
      listRef.current?.scrollTo({
        top: fieldRef.current.offsetTop,
        behavior: "smooth",
      });
  }, [fieldRef.current]);

  return (
    <S.Container>
      <S.SubtitleList ref={listRef}>
        {formList.map((F, idx) => (
          <SubtitleField
            id={F.subtitleIdx}
            timeline={F.timeline}
            subtitle={F.content}
            key={F.subtitleIdx}
            ref={idx === formList.length ? fieldRef : undefined}
          />
        ))}
      </S.SubtitleList>
      <SubTitleInput />
    </S.Container>
  );
}

export default SubtitleForm;
