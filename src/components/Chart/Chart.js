import './Chart.css';
import ChartBar from './ChartBar/ChartBar';

export default function Chart(props) {
  const months = Array.from({ length: 12 }, (_, i) => i);
  return (
    <div className='chart'>
      <div className='chart-el header'>
        <p>Filter by year:</p>
        <select id='years' onChange={props.selectYear}>
          {['All', ...props.years].map((year, i) => (
            <option key={`year${`${i}`.padStart(3, 0)}`} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className='chart-el months'>
        {months.map(month => {
          const itemsPerMonth = props.items.filter(
            item => new Date(item.date).getMonth() === month
          );
          return (
            <ChartBar
              id={`month${month}`}
              key={month}
              month={month}
              percent={
                itemsPerMonth.length > 0
                  ? itemsPerMonth.reduce(
                      (acc, fitem) => acc + fitem.amount,
                      0
                    ) / props.total
                  : 0
              }
            />
          );
        })}
      </div>
    </div>
  );
}
