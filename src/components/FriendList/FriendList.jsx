import PropTypes from 'prop-types';
import css from './friendlist.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <li className={css.item} key={friend.id.toString()}>
          {friend.isOnline && <span className={css.statusIsOnline}>O</span>}
          {!friend.isOnline && <span className={css.statusOffline}>O</span>}

          <img
            className={css.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnlineid: PropTypes.bool,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

FriendList.defaultProps = {
  friends: [],
};
