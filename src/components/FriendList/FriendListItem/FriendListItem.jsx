import s from './FriendListItem.module.css'

const FriendListItem = ({ friendData }) => {
    const { avatar, name, isOnline } = friendData;
    return (
        <div className={s.card}>
            <img src={avatar} alt="Avatar" width="48" />
            <p className={s.name}>{name}</p>
            {isOnline ? (
                <p className={s.online}>Online</p>
            ) : (
                <p className={s.offline}>Offline</p>
            )}
        </div>
    )
}

export default FriendListItem