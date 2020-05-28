import React from 'react'

import FormInput from './../form-input/form'

import './employee.scss'

import CustomButton from './../button/custom-button'

function AddEmployee () {
    return (
        <div className = "employee">
            <div className = "personal">
            <form> 
                <FormInput
                    name='Employee ID'
                    type='number'
                    label='Employee ID'
                    required                    />
                <FormInput
                    name='Name'
                    type='text'
                    label='Name'
                />
                <FormInput
                    name='Designation'
                    type='text'
                    label='Designation'
                />
                <FormInput
                    name='Address'
                    type='text'
                    label='Address'
                />
                <FormInput
                    name='Phone'
                    type='number'
                    label='Phone'
                />
                <CustomButton type='submit'>Save</CustomButton>
            </form>
            </div>

            <div className = "compenstion">
            <form> 
                <FormInput
                    name='Basic'
                    type='number'
                    label='Basic'
                    required                    
                />
                <FormInput
                    name='PF'
                    type='number'
                    label='PF'
                />
                <FormInput
                    name='Bonus'
                    type='number'
                    label='Bonus'
                    required                    
                />
                <FormInput
                    name='HRA'
                    type='number'
                    label='HRA'
                    required                    
                />
                <FormInput
                    name='Special Allowance'
                    type='number'
                    label='Special Allowance'
                    required                    
                />
                <CustomButton type='submit'>Reset</CustomButton>
            </form>
            </div>
            
            
        </div>
    )
}

export default AddEmployee
