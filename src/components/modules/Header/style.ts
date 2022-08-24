import styled from "@emotion/styled";
import theme from "commons/styles/theme";

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem 2rem;
  height: 6.25rem;
`;

export const SearchBar = styled.input`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  width: 40%;
  border: 1px solid #b3b3b3;
  border-radius: 40px;
  outline-color: ${theme.color.primary};
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-left: auto;
`;
