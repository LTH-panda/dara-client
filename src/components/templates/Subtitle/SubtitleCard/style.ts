import styled from "@emotion/styled";

export const Container = styled.div<{ focused: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  color: ${(props) => (props.focused ? "#000" : "#B3B3B3")};
`;

export const Timeline = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  padding: 1rem;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 17px;
  border-radius: 20px;
`;

export const Subtitle = styled.div`
  flex: 1;
  padding: 1rem;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  border-radius: 20px;
`;
