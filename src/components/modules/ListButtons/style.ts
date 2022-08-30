import styled from "@emotion/styled";

export const ButtonsSection = styled.div`
  position: absolute;
  right: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ListButton = styled.div`
  width: 5rem;
  padding: 1rem 0.5rem;
  margin-bottom: 0.7rem;
  text-align: center;
  background-color: #ffffff;
  border-radius: 3rem;
  border: 0.5px solid #b3b3b3;
  font-size: 0.88rem;
  font-weight: 500;
  &:hover {
    background-color: #6fa9ff;
  }
`;
