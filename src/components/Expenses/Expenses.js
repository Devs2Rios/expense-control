import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import Chart from '../Chart/Chart';
import './Expenses.css';

export default function Expenses(props) {
  return (
    <Card className='expenses'>
      <Chart
        years={props.years}
        year={props.year}
        total={props.total}
        items={props.items}
        selectYear={props.handleYear}
      />
      {props.items.map(item => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
}
