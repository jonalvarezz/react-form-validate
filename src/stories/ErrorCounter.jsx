import React from 'react';

const ErrorCounter = ({ errors }) => {
  const keys = Object.keys(errors);
  if (keys.length === 0) return null

  return (
    <div className="alert alert-warning" style={{ marginTop: '30px' }}>
      <ul>
        {keys.map(key => (
          <li key={key}><strong>{key}</strong>: {errors[key].code}</li>
        ))}
      </ul>
    </div>
  );
}

export default ErrorCounter;
