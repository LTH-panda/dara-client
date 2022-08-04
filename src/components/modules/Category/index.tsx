import React from "react";
import * as S from "./style";

type CategoryProps = {
  cate: string;
  onSelect: (cate: string) => void;
};

const categories = [
  {
    name: "all",
    text: "전체",
  },
  {
    name: "education",
    text: "교육",
  },
  {
    name: "trip",
    text: "여행",
  },
  {
    name: "sports",
    text: "스포츠",
  },
  {
    name: "game",
    text: "게임",
  },
  {
    name: "enter",
    text: "엔터",
  },
  {
    name: "etc",
    text: "기타",
  },
];

function Category({ onSelect, cate }: CategoryProps) {
  return (
    <S.CategorySection>
      {categories.map((c) => (
        <S.CategoryButton
          key={c.name}
          active={cate === c.name}
          onClick={() => onSelect(c.name)}
        >
          {c.text}
        </S.CategoryButton>
      ))}
    </S.CategorySection>
  );
}

export default Category;
