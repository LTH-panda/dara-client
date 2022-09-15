import { Subtitle } from "apis/video";
import { useMemo } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { subtitleFormList } from "recoil/subtitle";

function useSubtitleState() {
  const [formList, setFormlList] = useRecoilState(subtitleFormList);

  const nextId = useMemo(() => formList.length + 1, [formList]);

  const pushFormList = (timeline: string, subtitle: string) => {
    const newForm: Subtitle = {
      subtitleIdx: nextId,
      timeline,
      content: subtitle,
    };
    console.log(newForm);
    setFormlList([...formList, newForm]);
  };
  const deleteFormList = (id: number) => {
    setFormlList(formList.filter((F) => F.subtitleIdx !== id));
  };
  const resetFormList = useResetRecoilState(subtitleFormList);

  return { formList, pushFormList, deleteFormList, resetFormList };
}

export default useSubtitleState;
