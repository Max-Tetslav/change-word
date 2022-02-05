import React from 'react';
import cl from './WordInput.module.scss';

interface IProps {
  placeholder: string;
  changeHandler: React.Dispatch<React.SetStateAction<string>>;
  selectHandler: React.Dispatch<React.SetStateAction<boolean>>;
}

function WordInput({ placeholder, changeHandler, selectHandler }: IProps): JSX.Element {
  return (
    <label className={cl.container} htmlFor="word-input">
      Напишите ваше слово:
      <input
        className={cl.input}
        type="text"
        id="word-input"
        placeholder={placeholder}
        onChange={(e) => {
          if (e.target.value) {
            selectHandler(false);
          } else {
            selectHandler(true);
          }
          changeHandler(e.target.value);
        }}
      />
    </label>
  );
}

export default WordInput;
