import { SvgIcon } from "components/atoms";
import useSubtitleState from "hooks/states/useSubtitleState";
import React, { useRef, useState } from "react";
import * as S from "./style";

type SubtitleFieldProps = {
  id: number;
  timeline: string;
  subtitle: string;
};

const SubtitleField = React.forwardRef<HTMLDivElement, SubtitleFieldProps>(
  ({ id, timeline, subtitle }, ref) => {
    const { deleteFormList } = useSubtitleState();
    const inputRef = useRef<HTMLDivElement>(null);
    const [focused, setFoucsed] = useState(false);
    const [editable, setEditable] = useState(false);

    const onStartEdit = () => {
      setEditable(true);
    };
    const onEndEdit = () => {
      setEditable(false);
    };

    const onDelete = () => {
      deleteFormList(id);
    };

    return (
      <S.Container
        ref={ref}
        onMouseMove={() => setFoucsed(true)}
        onMouseOut={() => setFoucsed(editable || false)}
      >
        <S.Timeline focused={focused}>{timeline}</S.Timeline>
        <S.InputContainer focused={focused}>
          <S.SubtitleInput contentEditable={editable} ref={inputRef}>
            {subtitle}
          </S.SubtitleInput>
          <S.Actions>
            {focused && (
              <>
                {editable ? (
                  <S.ActionButton type="button" onClick={onEndEdit}>
                    <SvgIcon name="check" color="#4ade80" size={24} />
                  </S.ActionButton>
                ) : (
                  <S.ActionButton type="button" onClick={onStartEdit}>
                    <SvgIcon name="edit" color="#D9D9D9" size={20} />
                  </S.ActionButton>
                )}
                <S.ActionButton type="button" onClick={onDelete}>
                  <SvgIcon name="close" color="#D9D9D9" size={20} />
                </S.ActionButton>
              </>
            )}
          </S.Actions>
        </S.InputContainer>
      </S.Container>
    );
  }
);

export default SubtitleField;
