import React, { useState } from "react";
import * as S from "./style";

type DropdownProps = {
  current: string;
  list: { name: string; value: any }[];
  onClickList: React.MouseEventHandler<HTMLButtonElement>;
};

function Dropdown({ current = "test", list, onClickList }: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <S.Container>
      <S.Cell type="button" onClick={() => setIsOpen(!isOpen)}>
        {current}
      </S.Cell>
      {isOpen &&
        list &&
        list.map((E) => (
          <S.Cell value={E.value} onClick={onClickList}>
            {E.name}
          </S.Cell>
        ))}
    </S.Container>
  );
}

export default Dropdown;
