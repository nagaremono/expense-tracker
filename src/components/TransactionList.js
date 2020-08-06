import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

export default function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <React.Fragment>
      <h4>History</h4>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </React.Fragment>
  );
}
