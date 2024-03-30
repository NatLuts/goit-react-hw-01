import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.container}>
      <div className={s.img_container}>
        <img className={s.img} src={image} alt={tag} />
        <p className={s.user_name}>{name}</p>
        <p className={s.user_tag}>{tag}</p>{" "}
        <p className={s.user_location}>{location}</p>
      </div>

      <ul className={s.stats_list}>
        <li className={s.stats_item}>
          <span>Followers</span>
          <span className={s.stats_span}>{stats.followers}</span>
        </li>

        <li className={s.stats_item}>
          <span>Views</span>
          <span className={s.stats_span}>{stats.views}</span>
        </li>

        <li className={s.stats_item}>
          <span>Likes</span>
          <span className={s.stats_span}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
