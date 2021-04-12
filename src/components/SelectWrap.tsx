import React from 'react'

interface ISelectWrapProps {
  required?: boolean;
  name: string;
  labelName: string;
  register: any;
  errors: any;
  options: object;
}

export const SelectWrap: React.FC<ISelectWrapProps> = ({
  required = true,
  name,
  labelName,
  register,
  errors,
  options,
}) => {
  const refRegister = register({
    required,
  });
  const errorsObj = errors[name];

  return (
    <div className="input_wrap">
      <label htmlFor={name} className={required ? 'required' : ''}>{labelName}</label>
      <select 
        ref={refRegister}
        name={name}
        id={name}
        className={errorsObj ? 'error' : ''}
      >
        <option value="">- 선택 -</option>
        {Object.keys(options).map((option, index) => <option key={index}>{option}</option>)}
      </select>
    </div>
  )
}
