import styled from "@emotion/styled";
import theme from "commons/styles/theme";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
`;

export const ErrorMessage = styled.div`
  padding: 1rem 0 0;
  color: ${theme.color.error};
  text-align: center;
`;

export const SearchResultCol = styled.div`
  padding: 1rem 2rem;
  border-bottom: 1px solid #b3b3b3;
`;

export const EmptyMessage = styled.div`
  padding: 1rem 0 0;
  color: ${theme.color.gray500};
  text-align: center;
`;
