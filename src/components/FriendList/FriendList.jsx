import FriendListItem from './FriendListItem/FriendListItem'
import s from './FriendList.module.css'

const FriendList = ({ friends }) => {
    return (
        <ul className={s.list}>
            {friends.map((friend) => {
                return (
                    <li key={friend.id} className={s.listItem}>
                        <FriendListItem friendData={friend} />
                    </li>
                )
            })}
        </ul>
    )
}

export default FriendList