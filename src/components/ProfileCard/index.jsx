import styles from './profile-card.module.css';
import PropTypes from 'prop-types';

const ProfileCard = ({ username, tag, location, avatar, stats, className }) => {
  return (
    <div className={`${styles.profile} ${className || ''}`}>
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
        {Object.entries(stats).map((statsItem, index, array) => {
          return (
            <li key={statsItem[0]} className={styles.statsItem} style={{
              flexBasis: `calc(100% / ${array.length})`,
            }}>
              <span className={styles.label}>{statsItem[0]}</span>
              <span className={styles.quantity}>{statsItem[1]}</span>
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
