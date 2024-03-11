import clsx from 'clsx';
import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <img className={css.friendListImg} src={avatar} alt={name} width={100} />
      <p className={css.friendListName}>{name}</p>
      <p
        className={clsx(css.friendListStatus, { [css.friendOnline]: isOnline })}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </>
  );
};

export default FriendListItem;
