import React from 'react';
import cl from './Result.module.scss';

interface IProps {
  content: string;
}

function Result({ content }: IProps) {
  return (
    <div className={cl.container}>
      <p>Результат:</p>
      <p className={cl.text}>{content || 'Ждем...'}</p>
    </div>
  );
}

export default Result;
