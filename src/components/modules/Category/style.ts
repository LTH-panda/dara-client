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
  font-size: 0.93rem;
  border-radius: 3rem;
  border: 0.5px solid #b3b3b3;
  background-color: ${(props) => (props.active ? "#6fa9ff" : "#ffffff")};
  white-space: pre;
  cursor: pointer;
  &:hover {
    background-color: #a4c8ff;
  }
`;
