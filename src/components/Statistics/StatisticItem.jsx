import PropTypes from 'prop-types';

export default function StatisticItem(props) {
  const { id, label, percentage } = props;

  return (
    <li class="item" key={id}>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}%</span>
    </li>
  );
}

StatisticItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
