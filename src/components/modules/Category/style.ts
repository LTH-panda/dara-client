import styled from "@emotion/styled";

export const CategorySection = styled.div`
  width: 60%;
  display: flex;
  margin-bottom: 1rem;
`;

export const CategoryButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.5rem;
  padding: 0.6rem;
  margin-right: 1rem;
  text-align: center;
  font-size: 1rem;
  border-radius: 2rem;
  background-color: ${(props) => (props.active ? "#9a9a9a" : "#e1e1e1")};
  white-space: pre;
  cursor: pointer;
  &:hover {
    background-color: #9a9a9a;
  }
`;
