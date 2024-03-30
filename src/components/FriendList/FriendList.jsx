import FriendListItem from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friend_list}>
      {friends.map((item) => {
        return (
          <li className={s.friend_item} key={item.id}>
            <FriendListItem friend={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
