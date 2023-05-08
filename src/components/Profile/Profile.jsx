import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div>
      <div>
        <img src={avatar} alt="User avatar" width="240" />
        <h2>{username}</h2>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
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
