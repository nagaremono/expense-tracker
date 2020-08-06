import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function Transaction(props) {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = props.transaction.amount < 0 ? '-' : '+';

  return (
    <li className={sign === '+' ? 'plus' : 'minus'}>
      <span>
        {props.transaction.text} {sign}${Math.abs(props.transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(props.transaction.id)}
        className="waves-effect waves-light btn grey darken-4"
      >
        x
      </button>
    </li>
  );
}
