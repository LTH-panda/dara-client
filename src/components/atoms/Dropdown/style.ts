import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  width: 16rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  border-radius: 6px;
`;
export const DropdownContent = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  z-index: 5;
`;
export const Cell = styled.button`
  display: flex;
  padding: 1rem;
  font-size: 1.5rem;
`;
