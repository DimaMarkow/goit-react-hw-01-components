import PropTypes from 'prop-types';
import css from './statistics.module.css';
import StatisticItem from 'components/Statistics/StatisticItem';

export default function Statistics({ stats, title }) {
  return (
    <section className={css.statistics}>
      {title ? (
        <h2 className={css.title}>{title}</h2>
      ) : (
        <h2 className={css.title}>Upload stats</h2>
      )}

      <ul className={css.statList}>
        {stats.map(stat => (
          <li
            style={{
              backgroundColor: getRandomHexColor(),
            }}
            className={css.item}
            key={stat.id}
          >
            <StatisticItem label={stat.label} percentage={stat.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistics.defaultProps = {
  stats: [],
};
