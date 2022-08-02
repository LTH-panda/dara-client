import React from "react";
import * as Icons from "./icons";

/** Doxygen 주석
@author lth
@brief SvgIcon 컴포넌트
@param name assets/icons 파일이름
@param size 아이콘 사이즈
@param color 아이콘 색깔
*/

type SvgIconProps = {
  name: keyof typeof Icons;
  size?: number;
  color: string;
};

function SvgIcon({ name, size = 30, color = "#000" }: SvgIconProps) {
  const Icon = Icons[name];
  return <Icon width={size} height={size} color={color} />;
}

export default SvgIcon;
