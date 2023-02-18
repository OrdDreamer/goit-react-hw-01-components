import styles from './profile-card.module.css';
import PropTypes from 'prop-types';

const ProfileCard = ({ username, tag, location, avatar, stats, className }) => {
  return (
    <div className={`${styles.card} ${className || ""}`}>
      <div className={`${styles.infoContainer} ${avatar ? '' : styles.noImage}`}>
        {avatar &&
          <img
            src={avatar}
            alt={username}
            width='200'
            height='200'
            className={styles.avatar}
          />
        }
        <p className={styles.info}>
          <span className={styles.userName}>{username}</span>
          <span>@{tag}</span>
          <span>{location}</span>
        </p>
      </div>
      <ul className={styles.stats}>
        {Object.entries(stats).map((statsItem, index, array) => {
          return (
            <li key={statsItem[0]} className={styles.statsItem} style={{
              flexBasis: `calc(100% / ${array.length})`,
            }}>
              <span>{statsItem[0]}</span>
              <span className={styles.statsValue}>{statsItem[1]}</span>
            </li>
          );
        })}
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
  stats: PropTypes.objectOf(PropTypes.number),
  className: PropTypes.string,
};
