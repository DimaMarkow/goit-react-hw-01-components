// import PropTypes, { shape } from 'prop-types';

import StatisticItem from 'components/Statistics/StatisticItem';

export default function Statistics({ stats }) {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        {stats.map(stat => (
          <StatisticItem
            id={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

// Statistics.propTypes = {
//   stats: PropTypes.arrayOf(PropTypes.shape()),
// };
