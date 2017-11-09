import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import Form from '../index.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('<Form />', () => {
  const renderErrors = errors => (
    <ul>
      {Object.keys(errors).map(fname => (
        <li key={fname} className="error">{fname}: {errors[fname].code}</li>
      ))}
    </ul>
  );

  const submitEvent = ['submit', {preventDefault: () => {}}];

  it('should render', () => {
    const component = renderer.create(
      <Form>{() => <span />}</Form>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should work', () => {
    const children = errors => (
      <div>
        <input type="text" name="name" required />
        <input type="text" name="ping" required defaultValue="pong" />
        <input type="url" name="website" required defaultValue="sobad..com" />
        <input type="email" name="email" defaultValue="notValidEmail" required />
        <input type="phone" name="phone" required defaultValue="(123)-456-7890" />
        {renderErrors(errors)}
      </div>
    );
    const spy = sinon.spy();
    const wrapper = mount(<Form onSubmit={spy}>{children}</Form>);

    // When the form's submit happens
    wrapper.find('form').simulate.apply(wrapper, submitEvent);
    // 3 errors must be shown
    expect(wrapper.find('.error')).toHaveLength(3);
    expect(wrapper.find('.error').at(0).text()).toEqual('name: invalid-missing');
    expect(wrapper.find('.error').at(1).text()).toEqual('website: invalid-url');
    expect(wrapper.find('.error').at(2).text()).toEqual('email: invalid-email');
    // And the onSubmit callback should not be called
    expect(spy.calledOnce).toBeFalsy;
  });

  it('should call the submit callback when no errors', () => {
    const children = errors => (
      <div>
        <input type="text" name="name" required defaultValue="John doe" />
        <input type="text" name="ping" required defaultValue="pong" />
        <input type="url" name="website" required defaultValue="http://sup.com" />
        {renderErrors(errors)}
      </div>
    );
    const spy = sinon.spy();
    const wrapper = mount(<Form onSubmit={spy}>{children}</Form>);

    // When the form's submit happens with no errrors
    wrapper.find('form').simulate.apply(wrapper, submitEvent);
    // No errors should be rendered
    expect(wrapper.find('.error')).toHaveLength(0);
    // And the onSubmit callback should be called
    expect(spy.calledOnce).toBeTruthy();
  });
});
