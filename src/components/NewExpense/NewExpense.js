import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

export const NewExpense = (props) => {

  const saveExpenseHandler = enteredData => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
    // console.log(expenseData)
  }

  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  )
}
