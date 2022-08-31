import styled from "@emotion/styled";
import theme from "commons/styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 180px;
  padding: 1rem;
  border-top: 1px solid #000;
`;
export const InputBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
`;

export const Timeline = styled.input`
  display: flex;
  width: 80px;
  height: 30px;
  text-align: center;
  outline-color: ${theme.color.primary};
`;

export const SubtitleTextarea = styled.textarea`
  flex: 1;
  padding: 1rem;
  height: 6rem;
  resize: none;
  outline-color: ${theme.color.primary};
`;
export const Submit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  width: 84px;
  height: 40px;
  background: #ececec;
  border: 1px solid #b3b3b3;
  border-radius: 20px;
`;
