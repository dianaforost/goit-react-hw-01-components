import FriendListItem from './FriendListItem';
import css from './Styles/FriendListItem.module.css'
export default function FriendList({friends}){
    return <ul className={css.friendList}>
        <FriendListItem friends={friends}/>
  </ul>
}