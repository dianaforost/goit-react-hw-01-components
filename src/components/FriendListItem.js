import propTypes from 'prop-types';
import css from './Styles/FriendListItem.module.css'
import isFriendOnline from './isFriendOnline'
export default function FriendListItem({friends}){
    return <>
    {friends.map(friend =>(<li className={css.item} key={friend.id}>
      <span className={isFriendOnline(friend) ? css.online : css.notOnline}>{friend.isOnline}</span>
    <img className='avatar' src={friend.avatar} alt="User avatar" width="48" />
    <p className={css.name}>{friend.name}</p>
  </li>))}
    </>
}
FriendListItem.propTypes = {
    friends: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number.isRequired,
        isOnline: propTypes.bool.isRequired,
        avatar: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
      })
    ).isRequired,
  };