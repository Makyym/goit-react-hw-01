import s from './Profile.module.css'

const Profile = ({ user }) => {
    const { username, tag, location, avatar, stats: {followers, views, likes}} = user;
  return (
    <div className={s.wrapper}>
  <div className={s.avatar}>
    <img src={avatar} alt="User avatar" className={s.image} />
    <p className={s.username}>{username}</p>
    <p className={s.tag}>@{tag}</p>
    <p className={s.location}>{location}</p>
  </div>
  <ul className={s.stats}>
    <li className={s.statsItem}>
      <span>Followers</span>
      <span className={s.statsBold}>{followers}</span>
    </li>
    <li className={s.statsItem}>
      <span>Views</span>
      <span className={s.statsBold}>{views}</span>
    </li>
    <li className={s.statsItem}>
      <span>Likes</span>
      <span className={s.statsBold}>{likes}</span>
    </li>
  </ul>
</div>
  )
}

export default Profile