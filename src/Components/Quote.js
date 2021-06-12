import React from 'react';

export default function Quote(props) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${props.Image})`,
        color: `${props.Color}`
      }}
    >
      <div className="Quotes">
        <p>{props.Quote}</p>
      </div>
      <div className="Quoter">
        <p>{props.Quoter}</p>
      </div>
    </div>
  );
}
