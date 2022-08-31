import useClickOutside from "hooks/useClickOutside";
import React, { useCallback, useEffect, useRef, useState } from "react";
import SearchResult from "../SearchResult";
import * as S from "./style";

function Search() {
  const searchRef = useRef<HTMLFormElement>(null);
  const [search, setSearch] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value),
    [search]
  );

  useEffect(() => {
    if (isFocus && search) {
      setIsOpen(true);
    } else setIsOpen(false);
  }, [isOpen, isFocus, search]);
  useClickOutside(searchRef, () => setIsFocus(false));

  return (
    <S.Container ref={searchRef}>
      <S.SearchBar
        placeholder="검색"
        value={search}
        onChange={onChange}
        onFocus={() => setIsFocus(true)}
      />
      {isOpen && (
        <S.SearchDrowdown onClick={() => setIsFocus(false)}>
          <SearchResult search={search} />
        </S.SearchDrowdown>
      )}
    </S.Container>
  );
}

export default Search;
