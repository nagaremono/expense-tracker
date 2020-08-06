import React from 'react';

export default function TransactionList() {
  return (
    <React.Fragment>
      <h3>History</h3>
      <ul id="list" className="list">
        <li className="minus">
          Cash <span>-$400</span>
          <button className="waves-effect waves-light btn blue lighten-1">
            x
          </button>
        </li>
      </ul>
    </React.Fragment>
  );
}
