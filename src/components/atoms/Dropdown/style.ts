import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  width: 16rem;
  background: #ffffff;
  border: 1px solid #b3b3b3;
  border-radius: 0px 40px 40px 0px;
`;
export const DropdownContent = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  background: #fff;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  z-index: 5;
`;
export const Cell = styled.button`
  display: flex;
  padding: 1rem;
  width: 100%;
  font-size: 1.5rem;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #808080;
`;
