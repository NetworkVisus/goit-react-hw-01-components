import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  font-weight: 700;
  box-shadow: -1px -1px 22px 0px rgba(0, 0, 0, 0.432);
  width: 200px;
  margin: 20px auto;
  margin-bottom: 60px;
  border-radius: 10px;
  gap: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const Avatar = styled.img`
  border-radius: 50%;
  width: 200px;
`;
export const Name = styled.p`
  margin: 0;
`;
export const Tag = styled.p`
  color: #a7a7a7;
  margin: 0;
`;
export const Location = styled.p`
  color: #a7a7a7;
  margin: 0;
`;
export const Stats = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  gap: 10px;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
