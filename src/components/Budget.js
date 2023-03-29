
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BUDGET_MAX_VALUE = 20000;

const Budget = () => {
    const {dispatch, budget,expenses,currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    
    const onChangeBudgetHandler = (event) => {
        const enteredValue = Number(event.target.value);
    
        // check if the entered value is a number
        if (Number.isNaN(enteredValue)) {
          alert('Please enter a valid number.');
          return;
        }
    
        // check if the entered value is an integer number
        if (!Number.isInteger(enteredValue)) {
          alert('Please enter an integer number.');
          return;
        }
        
        //totalExpenses is not defined
        //alert(totalExpenses)
        if (enteredValue < totalExpenses) {
          alert(
            "The value of the buget can't be lower than the expenses value " 
            + currency
            + totalExpenses
          );
        } else {
          if (enteredValue > BUDGET_MAX_VALUE) {
            alert('Please enter a value less than '+currency + BUDGET_MAX_VALUE);
            return;
          }
    
          dispatch({
            type: 'SET_BUDGET',
            payload: enteredValue,
          });
          
        }
        
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
                <input
                     required="required"
                     placeholder='enter your budget'
                     type="number"
                     id="budget"
                     value={budget}
                     step="10"
                     style={{ width: "150px" }}
                     onChange={onChangeBudgetHandler}
                    >
                </input>
        
        </div>
    );
};

export default Budget;