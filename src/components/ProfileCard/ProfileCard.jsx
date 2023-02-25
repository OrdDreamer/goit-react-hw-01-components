import styles from './profile-card.module.css';
import PropTypes from 'prop-types';

const ProfileCard = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
  return (
    <div className={styles.profile}>
      <div className={`${styles.description} ${avatar ? '' : styles.noImage}`}>
        {avatar &&
          <img
            src={avatar}
            alt='User avatar'
            width='200'
            height='200'
            className={styles.avatar}
          />
        }
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statsItem}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{followers}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{views}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default ProfileCard;

ProfileCard.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
