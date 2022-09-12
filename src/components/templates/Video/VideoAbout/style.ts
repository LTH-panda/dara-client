import styled from "@emotion/styled";

export const Container = styled.header`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1rem 0;
  width: 100%;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Author = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
`;

export const ConfirmMark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: gray;
  border-radius: 9999px;
`;

export const Actions = styled.div`
  display: flex;
  margin-left: auto;
  gap: 1rem;
`;

export const ActionButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
`;

export const ShareModal = styled.div`
  position: absolute;
  left: 100px;
  bottom: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 734px;
  height: 60px;
  background: #ffffff;
  border: 1px solid #b3b3b3;
  border-radius: 30px;
  z-index: 9999;
`;
