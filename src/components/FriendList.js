import FriendListItem from './FriendListItem';
export default function FriendList({friends}){
    return <ul >
        <FriendListItem friends={friends}/>
  </ul>
}