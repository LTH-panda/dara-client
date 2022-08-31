import styled from "@emotion/styled";
import theme from "commons/styles/theme";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const Block = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: 0 1rem;
  width: 100%;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
`;

export const Submit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  width: 72px;
  height: 40px;
  background-color: ${theme.color.primary};
  border: 1px solid #b3b3b3;
  border-radius: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
`;
