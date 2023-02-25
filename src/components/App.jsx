import ProfileCard from './ProfileCard/ProfileCard';
import Statistics from './Statistics/Statistics';
import FriendsList from './FriendsList/FriendsList';
import TransactionsHistory from './TransactionsHistory/TransactionsHistory';
import userData from '../data/user.json';
import statisticsData from '../data/statistics.json';
import friendsData from '../data/friends.json';
import transactionsData from '../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 50,
        padding: 50,
        color: '#010101',
        backgroundColor: '#e7ecf2',
      }}
    >
      <ProfileCard
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />

      <Statistics
        title={'Upload stats'}
        stats={statisticsData}
      />

      <FriendsList
        friends={friendsData}
      />

      <TransactionsHistory
        items={transactionsData}
      />
    </div>
  );
};
