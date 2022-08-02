import React from "react";
import internal from "stream";
import * as S from "./style";

type VideoProps = {
  video: string;
  title: string;
  like: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};
