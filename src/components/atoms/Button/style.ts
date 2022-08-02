import styled from "@emotion/styled";

type ButtonProps = {
  isFit: boolean;
};

export const Button = styled.button<ButtonProps>`
  padding: 1rem;
  width: ${(props) => (props.isFit ? "fit-content" : "100%")};
  border-radius: 6px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`;
