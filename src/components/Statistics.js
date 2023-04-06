import propTypes from 'prop-types';
import css from './Styles/Statistics.module.css'
export default function Statistics({stats, title}){
    return <section className={css.statistics}>
      <div className={css.container}>
    <h2 className={css.title}>{title}</h2>
  
    <ul className={css.statList}>
      {stats.map(stat =>(<li className={css.item} key={stat.id}>
        <span className={css.label}>{stat.label}</span>
        <span className={css.percentage}>{stat.percentage}</span>
      </li>))}
    </ul>
      </div>
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