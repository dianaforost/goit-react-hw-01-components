import propTypes from 'prop-types';
export default function Statistics({stats, title}){
    return <section >
    <h2>{title}</h2>
  
    <ul>
      {stats.map(stat =>(<li key={stat.id}>
        <span >{stat.label}</span>
        <span >{stat.percentage}</span>
      </li>))}
    </ul>
  </section>
}
Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.oneOfType([
        propTypes.string,
        propTypes.number,
      ]).isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ).isRequired,
};