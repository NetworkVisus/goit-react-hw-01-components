import * as Styled from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Styled.ProfileContainer>
      <Styled.Container>
        <Styled.Avatar src={avatar} alt="User avatar" />
        <Styled.Name>{username}</Styled.Name>
        <Styled.Tag>@{tag}</Styled.Tag>
        <Styled.Location>{location}</Styled.Location>
      </Styled.Container>

      <Styled.Stats>
        <Styled.StatsItem>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </Styled.StatsItem>
        <Styled.StatsItem>
          <span>Views</span>
          <span>{stats.views}</span>
        </Styled.StatsItem>
        <Styled.StatsItem>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </Styled.StatsItem>
      </Styled.Stats>
    </Styled.ProfileContainer>
  );
};
