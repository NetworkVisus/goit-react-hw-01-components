import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: -1px -1px 22px 0px rgba(0, 0, 0, 0.432);
  width: 200px;
  padding: 20px;
  border-radius: 10px;
`;
export const OnlineStatus = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.$isOnline ? 'green' : 'red')};
`;
export const Img = styled.img`
  border-radius: 20%;
`;
export const Name = styled.p``;
