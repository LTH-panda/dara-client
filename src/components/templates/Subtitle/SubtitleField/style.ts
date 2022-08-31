import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
`;
export const Timeline = styled.span<{ focused: boolean }>`
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
  background: ${(props) => (props.focused ? "#ECECEC" : "initial")};
`;

export const InputContainer = styled.div<{ focused: boolean }>`
  flex: 1;
  display: flex;
  padding: 0.5rem;
  border-radius: 20px;
  background: ${(props) => (props.focused ? "#ECECEC" : "initial")};
`;

export const SubtitleInput = styled.div`
  flex: 1;
  padding: 1rem;
  width: 346px;
  height: auto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  border-radius: 20px;
  outline: none;
`;

export const Actions = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 0.25rem;
`;

export const ActionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  color: #d9d9d9;
`;
