import { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

// Dummy Data
const expensesInit = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

export default function App() {
  // Util
  const getYears = arr => [...new Set(arr.map(el => el.date.getFullYear()))],
    itemsByYear = (arr, y) =>
      y !== 'All' ? arr.filter(item => item.date.getFullYear() === y) : arr,
    updateTotal = arr => arr.reduce((acc, item) => acc + item.amount, 0);

  // State
  const [expenses, setExpenses] = useState(expensesInit),
    [years, setYears] = useState(getYears(expenses)),
    [yearFilter, setYearFilter] = useState('All'),
    [items, setItems] = useState(itemsByYear([...expenses], yearFilter)),
    [total, setTotal] = useState(updateTotal(items));

  // Handlers
  const handleYear = e => {
      const year =
        e.target.value !== 'All' ? Number(e.target.value) : e.target.value;
      setYearFilter(year);
      setItems(itemsByYear([...expenses], year));
      setTotal(updateTotal(itemsByYear([...expenses], year)));
    },
    addExpenseHandler = expense => {
      expense.id = `e${expenses.length + 1}`;
      expense.amount = Number(expense.amount);
      expenses.push(expense);
      // Updated outside because other states depending on it are updated here as well
      // If it would be alone it might use:
      // setExpenses(prevExpenses => [expense, ...prevExpenses]);
      setExpenses(expenses);
      setItems(itemsByYear([...expenses], yearFilter));
      setYears(getYears(expenses));
      setTotal(updateTotal(itemsByYear([...expenses], yearFilter)));
    };
  // Component
  return (
    <div className='App'>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        items={items}
        years={years}
        year={yearFilter}
        total={total}
        handleYear={handleYear}
      />
    </div>
  );
}
