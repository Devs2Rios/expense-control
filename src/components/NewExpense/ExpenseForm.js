import { useState } from 'react';

import './ExpenseForm.css';

export default function ExpenseForm(props) {
  // Util
  const dateLocal = d =>
    new Date(d.getTime() - d.getTimezoneOffset() * 60000)
      .toISOString()
      .split('T')[0]
      .replace(/\//g, '-');
  // State
  const [enteredTitle, setEnteredTitle] = useState(''),
    [enteredAmount, setEnteredAmount] = useState(''),
    [enteredDate, setEnteredDate] = useState('');
  // Events
  const titleChangeHandler = event => {
      setEnteredTitle(event.target.value);
    },
    amountChangeHandler = event => {
      setEnteredAmount(event.target.value);
    },
    dateChangeHandler = event => {
      setEnteredDate(event.target.value);
    },
    submitHandler = event => {
      event.preventDefault();

      const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
      };

      props.onSaveExpenseData(expenseData);
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
    };
  // Component
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2000-01-01'
            max={dateLocal(new Date())}
            value={enteredDate}
            onChange={dateChangeHandler}
            required
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}
