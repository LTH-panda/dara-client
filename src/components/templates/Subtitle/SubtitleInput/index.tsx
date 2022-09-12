import useSubtitleState from "hooks/states/useSubtitleState";
import React, { useCallback, useState } from "react";
import * as S from "./style";

function SubTitleInput() {
  const { pushFormList } = useSubtitleState();

  const [form, setForm] = useState<{ timeline: string; subtitle: string }>({
    timeline: "",
    subtitle: "",
  });

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
      resetForm();
    }
  };

  return (
    <S.Container>
      <S.InputBlock>
        <S.Timeline
          placeholder="00:00"
          name="timeline"
          value={form.timeline}
          onChange={onChange}
          maxLength={6}
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
