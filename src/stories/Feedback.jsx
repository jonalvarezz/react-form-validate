import React from 'react';

const Feedback = ({ code }) => {
  if (!code) return null;
  let message = '';

  switch (code) {
    case 'invalid-email':
      message = 'Huh? it does not seem like a valid email';
      break;
    case 'invalid-phone':
      message = 'Sorry dude, it should be like (123) 456 7890';
      break;
    case 'invalid-url':
      message = 'Did you miss the www or http:// ?';
      break;
    default:
      message = 'Required field';
  }

  return <div className="invalid-feedback">{message}</div>;
};

export default Feedback;
