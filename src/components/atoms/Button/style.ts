import styled from "@emotion/styled";

type ButtonProps = {
  isFit: boolean;
};

export const Button = styled.button<ButtonProps>`
  padding: 1rem;
  width: ${(props) => (props.isFit ? "fit-content" : "100%")};
  border-radius: 40px;
  border: 1px solid #b3b3b3;
`;
