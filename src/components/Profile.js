import propTypes from 'prop-types';
export default function Profile({username, tag, location, avatar, followers, views, likes}){
    return <div >
    <div >
      <img
        src={avatar}
        alt="User avatar"
        width={380}
      />
      <p >{username}</p>
      <p >{tag}</p>
      <p >{location}</p>
    </div>
  
    <ul >
      <li>
        <span >Followers</span>
        <span >{followers}</span>
      </li>
      <li>
        <span >Views</span>
        <span >{views}</span>
      </li>
      <li>
        <span >Likes</span>
        <span >{likes}</span>
      </li>
    </ul>
  </div>
}
Profile.propTypes = {
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string,
  followers: propTypes.number.isRequired,
  views: propTypes.number.isRequired,
  likes: propTypes.number.isRequired,
  };