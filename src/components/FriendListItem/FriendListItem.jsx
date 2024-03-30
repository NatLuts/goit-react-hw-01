import clsx from "clsx";
import s from "./FriendListItem.module.css";

const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  return (
    <div className={s.item}>
      <img className={s.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={s.name}>{name}</p>
      <p className={clsx(isOnline ? s.green : s.red)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
