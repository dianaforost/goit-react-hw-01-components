import propTypes from 'prop-types';
export default function FriendListItem({friends}){
    return <>
    {friends.map(friend =>(<li key={friend.id}>
    <span >{friend.isOnline}</span>
    <img  src={friend.avatar} alt="User avatar" width="48" />
    <p >{friend.name}</p>
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
// FriendListItem.propTypes = {
//     friends[avatar]:propTypes.string,
//     name: propTypes.string.isRequired,
// }