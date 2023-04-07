import propTypes from 'prop-types';
import css from './FriendListItem.module.css'
import isFriendOnline from './isFriendOnline'
export default function FriendListItem({friend}){
    return <>
  <li className={css.item}>
      <span className={isFriendOnline(friend) ? css.online : css.notOnline}>{friend.isOnline}</span>
    <img className='avatar' src={friend.avatar} alt="User avatar" width="48" />
    <p className={css.name}>{friend.name}</p>
  </li>
    </>
}
FriendListItem.propTypes = {
  friend: propTypes.shape({
    isOnline: propTypes.bool.isRequired,
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    id: propTypes.number.isRequired,
  }).isRequired,
};
