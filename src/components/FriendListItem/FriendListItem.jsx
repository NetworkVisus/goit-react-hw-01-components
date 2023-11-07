import * as Styled from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Styled.ListItem>
      <Styled.OnlineStatus $isOnline={isOnline}></Styled.OnlineStatus>
      <Styled.Img src={avatar} alt="User avatar" width="48" />
      <Styled.Name>{name}</Styled.Name>
    </Styled.ListItem>
  );
};
