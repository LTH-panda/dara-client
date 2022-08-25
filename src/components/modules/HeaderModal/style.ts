import styled from "@emotion/styled";

export const ModalContainer = styled.div`
  z-index: 10;
`;

export const UserIcon = styled.span`
  cursor: pointer;
`;

export const ModalBlock = styled.div`
  width: 15rem;
  height: 17rem;
  border: solid 1px #000;
  position: fixed;
  right: 2rem;
  top: 5rem;
  padding: 1.2rem 0.7rem;
  background-color: #fff;
`;

export const ProfileBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const ProfileImg = styled.div`
  width: 3rem;
  height: 3rem;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
`;

export const ProfileInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 65%;
`;

export const ProfileName = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const ProfileEmail = styled.div`
  font-size: 1rem;
`;

export const MyPageInfoSection = styled.div`
  font-size: 1rem;
`;

export const MyPageInfoElement = styled.div`
  margin-bottom: 1rem;
`;

export const LogoutSection = styled.button`
  margin: 1rem 0;
  font-size: 1rem;
`;
