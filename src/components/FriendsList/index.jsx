import styles from './friendsList.module.css';
import PropTypes from 'prop-types';
import FriendsListItem from '../FriendsListItem';

const FriendsList = ({ friends = [], className }) => {

  return (
    <ul className={`${styles.friendsList} ${className || ''}`}>
      {
        friends.map(({avatar, name, isOnline, id}) => {
          return (
            <FriendsListItem
              avatar={avatar}
              name={name}
              isOnline={isOnline}
              key={id}
            />
          );
        })
      }
    </ul>
  );
};

export default FriendsList;

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  className: PropTypes.string,
};
