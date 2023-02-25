import styles from './friendsListItem.module.css';
import PropTypes from 'prop-types';

const FriendsListItem = ({ avatar, name, isOnline }) => {

  return (
    <li className={styles.item}>
      <span className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}></span>
      {avatar
        ? <img className={styles.avatar} src={avatar} alt='User avatar' width='48' />
        : <span className={styles.avatarPlug}></span>
      }
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendsListItem;

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
