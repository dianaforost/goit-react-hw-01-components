import propTypes from 'prop-types';
import css from './FriendListItem.module.css'
import FriendListItem from './FriendListItem';
export default function FriendList({friends}){
    return <ul className={css.friendList} >
        {friends.map(friend =>( 
        <FriendListItem key={friend.id} friend={friend} />
        ))}
  </ul>
}
FriendList.propTypes = {
  friends: propTypes.array.isRequired,
}