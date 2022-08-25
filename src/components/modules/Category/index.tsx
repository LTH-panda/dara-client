import React from "react";
import { useRecoilState } from "recoil";
import { categoryState } from "recoil/category";
import * as S from "./style";

const categories = [
  {
    idx: 1,
    name: "all",
    text: "전체",
  },
  {
    idx: 2,
    name: "education",
    text: "교육",
  },
  {
    idx: 3,
    name: "trip",
    text: "여행",
  },
  {
    idx: 4,
    name: "sports",
    text: "스포츠",
  },
  {
    idx: 5,
    name: "game",
    text: "게임",
  },
  {
    idx: 6,
    name: "enter",
    text: "엔터",
  },
  {
    idx: 7,
    name: "etc",
    text: "기타",
  },
];

function Category() {
  const [category, setCategory] = useRecoilState(categoryState);

  return (
    <S.CategorySection>
      {categories.map((c) => (
        <S.CategoryButton
          key={c.idx}
          active={c.idx === category}
          onClick={() => setCategory(c.idx)}
        >
          {c.text}
        </S.CategoryButton>
      ))}
    </S.CategorySection>
  );
}

export default Category;
