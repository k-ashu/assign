import React from 'react';

import './form.scss';

const FormInput = ({  label, ...otherProps }) => (
  <div className='group'>
    <label className='form-input-label'>{label}</label>
    <input className='form-input'  {...otherProps} />
  </div>
);

export default FormInput;