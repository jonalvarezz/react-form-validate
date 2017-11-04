import React from 'react';
import renderer from 'react-test-renderer';

import Form from '../index.jsx';

describe('<Form />', () => {
  const renderErrors = errors => (
    <ul>
      {Object.keys(errors).map(fieldName => (
        <li class="error">{fieldName}: {errors[fieldName].code}</li>
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

  // it('should work', () => {
  //   const children = errors => (
  //     <div>
  //       <input type="text" name="name" required />
  //       <input type="text" name="ping" required value="pong" />
  //       <input type="url" name="website" required value="sobad..com" />
  //       <input type="email" name="email" value="notValidEmail" required />
  //       <input type="phone" name="phone" required value="(123)-456-7890" />
  //       {renderErrors(errors)}
  //     </div>
  //   );
  //   const spy = sinon.spy();
  //   const wrapper = mount(<Form onSubmit={spy}>{children}</Form>);

  //   wrapper.find('form').simulate.apply(wrapper, submitEvent);
  //   expect(wrapper.find('.error')).to.have.length(3);
  //   expect(wrapper.find('.error').at(0).text()).to.equal('name: invalid-missing');
  //   expect(wrapper.find('.error').at(1).text()).to.equal('website: invalid-url');
  //   expect(wrapper.find('.error').at(2).text()).to.equal('email: invalid-email');
  //   expect(spy.calledOnce).to.be.false;
  // });

  // it('should call the submit callback when no errors', () => {
  //   const children = errors => (
  //     <div>
  //       <input type="text" name="name" required value="John doe" />
  //       <input type="text" name="ping" required value="pong" />
  //       <input type="url" name="website" required value="http://sup.com" />
  //       {renderErrors(errors)}
  //     </div>
  //   );
  //   const spy = sinon.spy();
  //   const wrapper = mount(<Form onSubmit={spy}>{children}</Form>);

  //   wrapper.find('form').simulate.apply(wrapper, submitEvent);
  //   expect(wrapper.find('.error')).to.have.length(0);
  //   expect(spy.calledOnce).to.be.true;
  // });
});
