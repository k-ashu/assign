import React from 'react'
import {withRouter} from 'react-router-dom'

import FormInput from './../form-input/form'

function LoginForm (props) {
    return (
        <div>
             <form >
                  <FormInput
                        name='email'
                        type='email'
                        label='Email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        label='Password'
                        required
                    />
                {/* <CustomButton type='submit'> Sign in </CustomButton> */}
            </form>
        </div>
    )
}

export default withRouter(LoginForm)