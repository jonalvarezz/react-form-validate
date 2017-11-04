/* @flow */

/* Validates if a form object field is valid */
type Field = {
  name: string,
  type: string,
  value: string,
  title?: string,
  checked?: boolean,
};

// eslint-disable-next-line import/prefer-default-export
function getInvalidCode(field:Field) : string {
  const type = field.type;
  let value = field.value;
  let isEmptyValue = true;

  if (type === 'select') value = field.options[field.selectedIndex].value;

  if (type === 'checkbox' || type === 'radio') {
    value = field.checked; // bool
    isEmptyValue = !value; // Empty if not checked
  } else {
    isEmptyValue = value.trim() === '';
  }

  let errorCode = '';
  if (!isEmptyValue) {
    // Tests by field's type
    switch (type) {
      case 'email': {
        const isEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi;
        errorCode = isEmail.test(value) ? '' : 'invalid-email';
        break;
      }
      case 'tel': {
        const isPhone = /^(\([0-9]{3}\)[-\s]?|[0-9]{3}[-\s]?)[0-9]{3}[-\s]?[0-9]{4}$/;
        errorCode = isPhone.test(value) ? '' : 'invalid-phone';
        break;
      }
      case 'url': {
        const isURL = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
        errorCode = isURL.test(value) ? '' : 'invalid-url';
        break;
      }
      default: // empty
    }

    // Tests by field's name
    switch (field.name) {
      default: // empty
    }
  } else if (field.required) {
    errorCode = 'invalid-missing';
  }

  if (errorCode) return errorCode;

  return '';
}

export default getInvalidCode;
