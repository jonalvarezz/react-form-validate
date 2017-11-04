# React Form Validate
Provides a component to validate form's inputs and allow you to render the errors the way you like.

## TODO
* [ ] (Tests) Finish tests cases
* [ ] (Documentation) Flow 
* [ ] (Documentation) onSubmit(data:Object) prop 
* [ ] (Documentation) More about the error render props with examples
* [ ] (Package) Publish to NPM

## Usage
```javascript
import React from 'react'
import Form from 'react-form-validate'

function MyForm(props) {
    return(
        <Form>
            {(errors) => (
                <div>
                    <input type="text" name="Name" value="" required>
                    <input type="email" name="Email" value="so@bad">
                    <ul>
                        {Object.keys(errors).map(fieldName => (
                            <li class="error">{fieldName}: {errors[fieldName].code}</li>
                        ))}
                    </ul>
                </div>
            )}
        </Form>
    )
}

export default MyForm
```
