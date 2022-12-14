import { useState } from 'react';

import './ExpenseForm.css';

export default function ExpenseForm(props) {
  // Util
  const dateLocal = d =>
      new Date(d.getTime() - d.getTimezoneOffset() * 60000)
        .toISOString()
        .split('T')[0]
        .replace(/\//g, '-'),
    uiStyle = new Map([
      [true, { display: 'none' }],
      [false, { display: 'block' }],
    ]);
  // State
  const [enteredTitle, setEnteredTitle] = useState(''),
    [enteredAmount, setEnteredAmount] = useState(''),
    [enteredDate, setEnteredDate] = useState(''),
    [addExpenseUI, setAddExpenseUI] = useState(true);
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
      if (enteredTitle && enteredAmount && enteredDate) {
        const expenseData = {
          title: enteredTitle,
          amount: +enteredAmount, // make it int
          date: new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setAddExpenseUI(prevState => !prevState);
      }
    },
    newEventUIHandler = e => {
      setAddExpenseUI(prevState => !prevState);
    };
  // Component
  return (
    <div>
      <form style={uiStyle.get(addExpenseUI)} onSubmit={submitHandler}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input
              type='text'
              value={enteredTitle}
              onChange={titleChangeHandler}
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
            />
          </div>
        </div>
        <div className='new-expense__buttons'>
          <div className='new-expense__actions'>
            <button
              onClick={newEventUIHandler}
              id='cancel-new-expense-button'
              type='cancel'
            >
              Cancel
            </button>
          </div>
          <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
          </div>
        </div>
      </form>
      <div className='new-expense__open-ui'>
        <button
          className='add-ui-btn'
          style={uiStyle.get(!addExpenseUI)}
          onClick={newEventUIHandler}
        >
          Add New Expense
        </button>
      </div>
    </div>
  );
}
