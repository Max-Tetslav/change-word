import React, { useState, useCallback } from 'react';
import Button from './components/UI/button/Button';
import WordInput from './components/UI/input/WordInput';
import Result from './components/UI/result/Result';
import SelectP from './components/UI/select/SelectP';

function App(): JSX.Element {
  const [word, setWord] = useState('Введите слово...');
  const [result, setResult] = useState('');
  const [type, setType] = useState('');
  const [isSelectActive, setIsSelectActive] = useState(true);

  const getURL = (str: string) => `https://ws3.morpher.ru/russian/declension?s=${encodeURI(str)}&format=json`;

  async function getResponse() {
    const request = await fetch(getURL(word));
    const response = await request.json();

    setResult(response[type] || 'Неправильное слово!');
  }

  const buttonHandler = useCallback(() => getResponse(), [word, type]);

  return (
    <div className="mainContainer">
      <h1 className="mainTitle">Ты будешь меня склонять?</h1>
      <WordInput placeholder="Введите слово" changeHandler={setWord} selectHandler={setIsSelectActive} />
      <SelectP changeHandler={setType} isActive={isSelectActive} />
      <Button content="Склоняй меня полностью!" clickHandler={buttonHandler} />
      <Result content={result} />
    </div>
  );
}

export default App;
