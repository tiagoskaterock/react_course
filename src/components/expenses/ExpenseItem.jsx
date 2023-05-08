import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate.jsx'
import Card from '../ui/Card.jsx'
import './ExpenseItem.css'

const ExpenseItem = props => {

    const [title, setTitle] = useState(props.title)

    const clickHandler = () => {
        setTitle('Updated')
    }

    return (
        <Card className="expense-item">

            <ExpenseDate date={ props.date } />
            
            <div className="expense-item__description">
                <h2>{ title }</h2>
                <div className="expense-item__price">${ props.amount }</div>
            </div>  

            <button onClick={ clickHandler }>Change Title</button>          
        </Card>
    )
}

export default ExpenseItem
