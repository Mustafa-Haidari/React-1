import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import './ExpenseItem.css'

const ExpenseItem = (props) =>{
    let {title, amount, date} = props;

    const [titleo, setTitleo] = useState(title);

    const clickHandler = () => {
        setTitleo('Updated')
    }
    
    return (
        <Card className='expense-item'>
            <ExpenseDate date={date}/>
            <div className='expense-item__description'>
                <h2>{titleo}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    )
}

export default ExpenseItem;