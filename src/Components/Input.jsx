import React from 'react'

const Input = (props) => {
    const {type,label,Id,Class,name,value,onChange,onBlur} = props;
  return (
    <div className='form-floating mt-3'>
        <input
            type={type}
            className={`form-control ${Class}`}
            id={Id}
            placeholder={label}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
        />
        <label htmlFor={label}>{label}</label>
    </div>
  )
}

export default Input