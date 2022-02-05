import React from 'react';
import cl from './SelectP.module.scss';

interface IProps {
  isActive: boolean;
  changeHandler: React.Dispatch<React.SetStateAction<string>>;
}

function SelectP({ isActive, changeHandler }: IProps) {
  const inputID = 'select-p';
  return (
    <label htmlFor={inputID} className={cl.container}>
      Выберите падеж:
      <select
        className={cl.select}
        name="select-p"
        id={inputID}
        disabled={isActive}
        onChange={(e) => {
          changeHandler(e.target.value);
        }}
      >
        <option hidden>Падеж</option>
        <option>Р</option>
        <option>Д</option>
        <option>В</option>
        <option>Т</option>
        <option>П</option>
      </select>
    </label>
  );
}

export default SelectP;
