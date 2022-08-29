import './ChartBar.css';

export default function ChartBar(props) {
  // Month label
  const shortMonth = new Intl.DateTimeFormat('us', { month: 'short' }).format(
    new Date(new Date().getFullYear(), props.month, 1)
  );
  // Component
  return (
    <div className='chart-bar'>
      <div className='bar' />
      <span
        style={{
          width: '1rem',
          borderRadius: '2px',
          backgroundColor: '#5f2fff',
          position: 'absolute',
          transform: `translate(0, ${6 * (1 - props.percent)}rem)`,
          height: `${6 * props.percent}rem`,
        }}
      />
      <p className='month'>{shortMonth}</p>
    </div>
  );
}
