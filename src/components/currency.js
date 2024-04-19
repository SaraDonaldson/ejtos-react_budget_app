import React, { useContext, useState, useEffect, useReducer } from 'react';
import { AppContext } from '../context/AppContext';
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";


const Currency = ({props}) => {
const { currency, dispatch } = useContext(AppContext);
const [selectedCurrency, setSelectedCurrency] = useState("£");

const handleCurrency = (val) => {
    setSelectedCurrency(val);
    dispatch({
        type: 'CHG_CURRENCY',
        payload: val,
    });
   
  };
return(

  <div>  
   <label for="currency">Currency</label>
    <select 
    value={selectedCurrency} 
    name = "currency"
    onChange={event=>handleCurrency(event.target.value)}
    >
    <option value='$'>$ Dollar</option>
    <option value='£'>£ Pound</option>
    <option value='€'>€ Euro</option>
    <option value='₹'>₹ Ruppee</option>
  </select>
</div>
   

    );
}

export default Currency;