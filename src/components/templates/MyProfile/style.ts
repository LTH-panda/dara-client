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
  margin-bottom: 1rem;
  overflow: hidden;
  position: relative;
`;

export const ProfileName = styled.div`
  font-size: 1.5rem;
  font-weight: 550;
  margin-bottom: 0.7rem;
`;

export const ProfileEmail = styled.div`
  font-size: 1.1rem;
`;

export const PointTitle = styled.div`
  font-size: 1.1rem;
  margin: 0.7rem 0;
`;

export const Points = styled.div`
  font-size: 1.2rem;
`;

export const PointComment = styled.div`
  position: absolute;
  margin-left: 18rem;
  margin-top: -1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #b3b3b3;
  font-size: 0.7rem;
  padding: 0.5rem 1rem;
`;

export const PointIcon = styled.div`
  width: 52px;
  height: 52px;
  background-color: #ffe91e;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  font-weight: 800;
`;
