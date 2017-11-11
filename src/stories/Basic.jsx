import React from 'react';
import { action } from '@storybook/addon-actions';

import Form from '..';
import ErrorCounter from './ErrorCounter';
import Feedback from './Feedback';

export default () => (
  <Form onSubmit={action('Form validation passed')}>
    {errors => (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="exampleInputText">Full name</label>
            <input
              required
              name="name"
              type="name"
              id="exampleInputText"
              placeholder="John Doe"
              className={`form-control ${isInvalid(errors, 'name')}`}
            />
            <Feedback {...errors['name']} />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              required
              name="email"
              type="email"
              id="exampleInputEmail1"
              placeholder="Enter email"
              aria-describedby="emailHelp"
              className={`form-control ${isInvalid(errors, 'email')}`}
            />
            <Feedback {...errors['email']} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              required
              name="password"
              type="password"
              placeholder="Password"
              className="form-control"
              id="exampleInputPassword1"
              className={`form-control ${isInvalid(errors, 'password')}`}
            />
            <Feedback {...errors['password']} />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="exampleInputPhone">Phone</label>
            <input
              required
              name="phone"
              type="tel"
              placeholder="(123) 456 7890"
              className="form-control"
              id="exampleInputPhone"
              className={`form-control ${isInvalid(errors, 'phone')}`}
            />
            <Feedback {...errors['phone']} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="exampleInputUrl">Website</label>
            <input
              required
              name="website"
              type="url"
              placeholder="http://you.are.awesome"
              className="form-control"
              id="exampleInputUrl"
              className={`form-control ${isInvalid(errors, 'website')}`}
            />
            <Feedback {...errors['website']} />
          </div>
        </div>

        <div className="form-check">
          <label className="form-check-label">
            <input required name="checkbox" type="checkbox" className="form-check-input" />
            <span
              style={{
                color: isInvalid(errors, 'checkbox') ? '#dc3d46' : 'inherit'
              }}
            >
              Check me out
            </span>
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <ErrorCounter errors={errors} />
      </div>
    )}
  </Form>
);

const isInvalid = (errors, key) => (
  Object.prototype.hasOwnProperty.call(errors, key) ? 'is-invalid' : ''
);
