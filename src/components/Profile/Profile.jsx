import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profContainer}>
      <div className={css.profInfo}>
        <img className={css.profImg} src={image} alt={name} />
        <p className={css.profName}>{name}</p>
        <p className={css.profTag}>@{tag}</p>
        <p className={css.profLocation}>{location}</p>
      </div>

      <ul className={css.profList}>
        <li className={css.profItem}>
          <span className={css.profTitle}>Followers</span>
          <span className={css.profStats}>{stats.followers}</span>
        </li>
        <li className={css.profItem}>
          <span className={css.profTitle}>Views</span>
          <span className={css.profStats}>{stats.views}</span>
        </li>
        <li className={css.profItem}>
          <span className={css.profTitle}>Likes</span>
          <span className={css.profStats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
