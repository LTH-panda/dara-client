import styled from "@emotion/styled";
import theme from "commons/styles/theme";

export const Container = styled.form`
  position: relative;
  display: flex;
  width: 40%;
  max-width: 770px;
  border-radius: 40px;
`;

export const SearchBar = styled.input`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 1rem 2rem;
  width: 100%;
  border: 1px solid #b3b3b3;
  border-radius: 40px;
  outline-color: ${theme.color.primary};
  z-index: 20;
`;

export const SearchDrowdown = styled.div`
  position: absolute;
  padding: 3.5rem 0 2rem;
  width: 100%;
  background: #fff;
  border: 1px solid #b3b3b3;
  border-radius: 40px;
  z-index: 10;
`;
