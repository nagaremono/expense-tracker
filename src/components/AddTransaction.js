import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { v4 as uuidv4 } from 'uuid';

export default function AddTransaction() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  function onSubmit(event) {
    event.preventDefault();

    const newTransaction = {
      id: uuidv4(),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    clearField();
  }

  function clearField() {
    setText('');
    setAmount(0);
  }

  return (
    <React.Fragment>
      <h3>New transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="input-field col s12">
            <label htmlFor="text">Text</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text..."
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12 ">
            <label htmlFor="amount">
              Amount (negative - expense, positive - income)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount..."
            />
          </div>
        </div>
        <div className="row">
          <button className="waves-effect waves-light btn blue darken-4 col s12">
            Add transaction
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}
