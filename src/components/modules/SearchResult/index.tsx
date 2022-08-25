import { LinkTo, Spinner } from "components/atoms";
import useSearchQuery from "hooks/queries/useSearchQuery";
import React from "react";
import * as S from "./style";

type SearchResultProps = {
  search: string;
};

function SearchResult({ search }: SearchResultProps) {
  const { data, error, isLoading } = useSearchQuery(search, {
    enadled: !!search,
  });

  if (isLoading)
    return (
      <S.Container>
        <Spinner isVisible />
      </S.Container>
    );

  if (error) return <S.ErrorMessage>에러가 발생했습니다.</S.ErrorMessage>;

  if (data?.length)
    return (
      <div>
        {data?.map((R) => (
          <LinkTo href={`/video/${R.videoIdx}`} key={R.videoIdx}>
            <S.SearchResultCol>{R.title}</S.SearchResultCol>
          </LinkTo>
        ))}
      </div>
    );

  return <S.EmptyMessage>검색 결과가 없습니다.</S.EmptyMessage>;
}

export default SearchResult;
