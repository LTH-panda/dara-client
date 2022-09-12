import useSubtitleState from "hooks/states/useSubtitleState";
import React, { useEffect, useRef } from "react";
import SubtitleField from "../SubtitleField";
import SubTitleInput from "../SubtitleInput";
import * as S from "./style";

function SubtitleForm() {
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
        {formList.map((F) => (
          <SubtitleField
            id={F.id}
            timeline={F.timeline}
            subtitle={F.subtitle}
            key={F.id}
            ref={F.id === formList.length ? fieldRef : undefined}
          />
        ))}
      </S.SubtitleList>
      <SubTitleInput />
    </S.Container>
  );
}

export default SubtitleForm;
