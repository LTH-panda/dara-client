import React, { useCallback, useEffect, useState } from "react";
import SearchResult from "../SearchResult";
import * as S from "./style";

function Search() {
  const [search, setSearch] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value),
    [search]
  );

  useEffect(() => {
    if (isFocus) {
      if (search) {
        setIsOpen(true);
      } else setIsOpen(false);
    } else setIsOpen(false);
  }, [isOpen, isFocus, search]);

  return (
    <S.Container>
      <S.SearchBar
        placeholder="검색"
        value={search}
        onChange={onChange}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      {isOpen && (
        <S.SearchDrowdown>
          <SearchResult search={search} />
        </S.SearchDrowdown>
      )}
    </S.Container>
  );
}

export default Search;
