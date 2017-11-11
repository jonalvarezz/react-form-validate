import React from 'react';
import { storiesOf } from '@storybook/react';

import Basic from './Basic';

storiesOf('Form', module)
  .add('Demo', _ => (
    <div>
      <h1>Demo</h1>
      <p><strong>All fields are required</strong></p>
      <Basic />
      <p style={{marginTop: '50px'}}>For demo purposes, <a href="https://getbootstrap.com" target="_blank">Bootstrap Framework</a> is being is used, but it does not mean you need to use it as well.
      </p>
      <p><code>react-form-validate</code> does not include any CSS or style, it is up to you to use your own.
      </p>
      <p>When the form is valid, make sure to check the <strong>Action logger</strong> tab to inspect the returned form data in the <code>onSubmit</code> prop.
      </p>
      <p style={{marginTop: '50px', textAlign: 'center'}}>
        <a href="https://github.com/jonalvarezz/react-form-validate#react-form-validate" className="btn btn-info">Go back to react-form-validate</a>
      </p>
    </div>
  ));
