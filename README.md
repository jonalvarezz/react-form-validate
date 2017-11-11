# React Form Validate
Provides a component to validate form's inputs and allow you to render the errors the way you like.

**[View Demo](http://jonalvarezz.github.io/react-form-validate/index.html)**

## TODO
* [x] (Tests) Finish tests cases
* [ ] (Documentation) Flow 
* [x] (Documentation) onSubmit(data:Object) prop 
* [x] (Documentation) Add demo
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

## Props
### `children?: Function (errors:Object) => ReactElement`
A function is expected as the `children` prop type, which will take the `errors` object as first argument. If you are wondering why to use a render function (Render Props) instead of a HoC, take a look to [Michael Jackson - Never Write Another HoC](https://www.youtube.com/watch?v=BcVAq3YFiuc)

### `onSubmit?: Function (data:Object, submitEvent:Event)`
The `onSubmit` prop will be called when the form validation has succeed, with no errors. onSubmit will be called with the following parameters:
* `data`: Object representing the form data. (`{ name: "inputValue" }`).
* `submitEvent`: The submit event.

### `...otherProps?: Object`
Any other given propType will be passed down to the `form` element.

