import styled from "@emotion/styled";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Author = styled.div``;

export const ConfirmMark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: gray;
  border-radius: 9999px;
`;

export const Actions = styled.div`
  display: flex;
  margin-left: auto;
  gap: 1rem;
`;

export const ActionButton = styled.button`
  padding: 1rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`;
