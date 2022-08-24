import React from "react";
import { Oval } from "react-loader-spinner";

type SpinnerProps = {
  isVisible: boolean;
  size?: number;
  color?: string;
};

function Spinner({ isVisible, size = 30, color = "#000" }: SpinnerProps) {
  return <Oval visible={isVisible} height={size} width={size} color={color} />;
}

export default Spinner;
