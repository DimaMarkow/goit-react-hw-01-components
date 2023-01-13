import PropTypes from 'prop-types';

export default function OneFriend(props) {
  const { avatar, name, isOnlineid } = props;

  return (
    <>
      <span className="status">{isOnlineid}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
}

OneFriend.propTypes = {
  isOnlineid: PropTypes.bool,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
