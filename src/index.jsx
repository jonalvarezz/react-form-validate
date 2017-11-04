import React from 'react';
import getFormData from 'get-form-data';
import getInvalidCode from './helpers/invalid-codes';

type Props = {
  onSubmit: Function,
  children: Function,
};

class Form extends React.Component<Props> {
  static defaultProps = {
    onSubmit: () => {},
    children: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      errors: {}
    };

    this.validate = this.validate.bind(this);
  }

  validate(event) {
    event.preventDefault();
    const data = getFormData(this.formNode, { trim: true });
    const fields = [...this.formNode.elements].filter(e => (
      e.nodeName.toLowerCase() !== 'button' && e.type !== 'submit'
    ));
    const errors = {};

    fields.forEach((field) => {
      const code = getInvalidCode(field);

      if (code !== '') {
        const title = field.title || field.name;
        errors[field.name] = { title, code };
      }
    });

    // Do callbacks
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return -1;
    }

    // Clean errors
    this.setState({ errors: {} });

    return this.props.onSubmit(data, event);
  }

  render() {
    const { children, ...formProps } = this.props;

    return (
      <form
        noValidate
        {...formProps}
        onSubmit={this.validate}
        ref={(r) => { this.formNode = r; }}
      >
        {children(this.state.errors)}
      </form>
    );
  }
}

export default Form;
