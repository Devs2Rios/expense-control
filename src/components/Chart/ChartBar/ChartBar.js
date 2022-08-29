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
          content: '',
          width: '1rem',
          position: 'absolute',
          bottom: '-3rem',
          backgroundColor: '#5f2fff',
          height: `${6 * props.percent}rem`,
        }}
      />
      <p className='month'>{shortMonth}</p>
    </div>
  );
}
