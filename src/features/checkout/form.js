import React from 'react'
import {Field, reduxForm} from 'redux-form'

function CheckoutForm(props){
    const {handleSubmit} = props
    return (
        <div>
            <form onSubmit ={handleSubmit}>
                <div>
                    <label htmlFor='order[name]'> You'r name</label><br />
                    <Field name='order[name]' component ='input' type='text' /><br/>

                    <label htmlFor='order[email]'> Your email</label><br />
                    <Field name='order[email]' component ='input' type='email' />
                    <button type='submit'> Submit</button>
                </div>
            </form>
        </div>
    )
}

CheckoutForm = reduxForm({
    form : 'checkout'
})(CheckoutForm)

export default  CheckoutForm