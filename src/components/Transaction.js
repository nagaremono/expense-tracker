import React from 'react';

export default function Transaction(props) {
  const sign = props.transaction.amount < 0 ? '-' : '+';

  return (
    <li className={sign === '+' ? 'plus' : 'minus'}>
      <span>
        {props.transaction.text} {sign}${Math.abs(props.transaction.amount)}
      </span>
      <button className="waves-effect waves-light btn grey darken-4">x</button>
    </li>
  );
}
