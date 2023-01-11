import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';

import user from 'components/user.json';
import statData from 'components/data.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics stats={statData} />
    </div>
  );
};
