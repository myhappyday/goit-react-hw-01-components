import PropTypes from 'prop-types';

import {
  Wrapper,
  Description,
  Avatar,
  Name,
  Tag,
  Stats,
  Item,
  Label,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Wrapper>
      <Description>
        <Avatar src={avatar} alt="User avatar" width="240" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <p>{location}</p>
      </Description>

      <Stats>
        <Item>
          <Label>Followers</Label>
          <span>{stats.followers}</span>
        </Item>
        <Item>
          <Label>Views</Label>
          <span>{stats.views}</span>
        </Item>
        <Item>
          <Label>Likes</Label>
          <span>{stats.likes}</span>
        </Item>
      </Stats>
    </Wrapper>
  );
};

// export const Profile = ({ userName, tag, location, avatar, stats }) => {
//   return (
//     <Card>
//       <Description>
//         <Avatar src={avatar} alt="User avatar" width="240"/>
//         <Name>{username}</Name>
//         <Tag>@{tag}</Tag>
//         <Location>{location}</Location>
//       </Description>

//       <Stats>
//         <Item>
//           <Label>Followers</Label>
//           <Quantity>{stats.followers}</Quantity>
//         </Item>
//         <Item>
//           <Label>Views</Label>
//           <Quantity>{stats.views}</Quantity>
//         </Item>
//         <Item>
//           <Label>Likes</Label>
//           <Quantity>{stats.likes}</Quantity>
//         </Item>
//       </Stats>
//     </Card>
//   );
// };

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
