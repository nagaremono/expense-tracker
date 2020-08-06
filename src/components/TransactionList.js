import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <React.Fragment>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => {
          return (
            <li key={transaction.id} className="minus">
              {transaction.text} <span>-$400</span>
              <button className="waves-effect waves-light btn blue lighten-1">
                x
              </button>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}
