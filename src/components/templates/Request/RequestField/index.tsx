import { Dropdown } from "components/atoms";
import React from "react";
import * as S from "./style";

type RequestFieldProps = {
  id: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  category: string;
  categories: any[];
  onCategory: React.MouseEventHandler<HTMLButtonElement>;
};

function RequestField({
  id,
  value,
  onChange,
  category,
  categories,
  onCategory,
}: RequestFieldProps) {
  return (
    <S.Container>
      <S.LinkField
        placeholder="영상 링크 입력"
        name={id}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
      <Dropdown current={category} list={categories} onClickList={onCategory} />
    </S.Container>
  );
}

export default RequestField;
