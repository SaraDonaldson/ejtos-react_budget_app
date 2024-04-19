import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';



const Budget = () => {
    const { budget, expenses, currency, dispatch, remaining } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    

    const handleBudgetChange= (val)=>{

        val = parseInt(val);
        const expensesTotal = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
        let budgetBalance = val - expensesTotal;
        console.log(expensesTotal, val, budgetBalance)

        if(val > 20000){
            alert('The value cannot exceed 20,000');
        } 
        if(budgetBalance < 0){
            alert('You cannot reduce the budget below spending');
            setNewBudget(expensesTotal)
            dispatch({
                type: 'SET_BUDGET',
                payload: expensesTotal,
            })
        }else{
            setNewBudget(val);
            dispatch({
                type: 'SET_BUDGET',
                payload: val,
            })
        }
    }


    return (
        <div className='alert alert-secondary'>
        {/* <span>Budget: £{budget}</span> */}
        <span>Budget: {currency}</span>
            <input 
            type="number" 
            step="10" 
            value={newBudget} 
            onChange={event=>handleBudgetChange(event.target.value)}></input>
        </div>
    );
};
export default Budget;
