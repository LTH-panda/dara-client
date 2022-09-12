import styled from "@emotion/styled";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: 100%;
  border: 1px solid #b3b3b3;
  overflow-y: auto;
`;

export const Center = styled.span`
  margin: auto;
`;

export const GoSubtitleButton = styled.button`
  width: 160px;
  height: 70px;
  background: #ececec;
  border: 1px solid #b3b3b3;
  border-radius: 40px;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
`;
