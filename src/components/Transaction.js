import React from 'react';

export default function Transaction(props) {
  const sign = props.transaction.amount < 0 ? '-' : '+';

  return (
    <li className={sign === '+' ? 'plus' : 'minus'}>
      {props.transaction.text}{' '}
      <span>
        {sign}${Math.abs(props.transaction.amount)}
      </span>
      <button className="waves-effect waves-light btn blue lighten-1">x</button>
    </li>
  );
}
