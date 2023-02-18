import styles from './app.module.css'
import ProfileCard from './ProfileCard';
import Statistics from './Statistics';
import userData from '../data/user.json';
import statisticsData from '../data/statistics.json';

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
        className={styles.profile}
      />

      <Statistics
        title={"Upload stats"}
        stats={statisticsData}
        className={styles.stats}
      />
    </div>
  );
};
