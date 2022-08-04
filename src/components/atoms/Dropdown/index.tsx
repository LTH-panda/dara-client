import useClickOutside from "hooks/useClickOutside";
import React, { useRef, useState } from "react";
import * as S from "./style";

type DropdownProps = {
  current: string;
  list: string[];
  onClickList: React.MouseEventHandler<HTMLButtonElement>;
};

function Dropdown({ current, list, onClickList }: DropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <S.Container onClick={() => setIsOpen(!isOpen)} ref={dropdownRef}>
      <S.Cell type="button">{current}</S.Cell>
      {isOpen && (
        <S.DropdownContent>
          {list.map((E) => (
            <S.Cell type="button" value={E} onClick={onClickList} key={E}>
              {E}
            </S.Cell>
          ))}
        </S.DropdownContent>
      )}
    </S.Container>
  );
}

export default Dropdown;
