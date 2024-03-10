const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src="" alt={avatar} width="48" />
      <p>{name}</p>
      <p>{isOnline}</p>
    </div>
  );
};

export default FriendListItem;
