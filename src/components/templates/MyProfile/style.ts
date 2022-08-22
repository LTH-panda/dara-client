import styled from "@emotion/styled";

export const ProfileContainer = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  margin-right: 10rem;
`;

export const PointSection = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

export const ProfileImg = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: red;
  margin-bottom: 0.7rem;
  overflow: hidden;
  position: relative;
`;

export const ProfileName = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.7rem;
`;

export const ProfileEmail = styled.div`
  font-size: 1.2rem;
`;

export const PointTitle = styled.div`
  font-size: 1.2rem;
  margin: 0.7rem 0;
`;

export const Points = styled.div`
  font-size: 1.2rem;
`;
