import React from 'react';
import './Table.css';
const Table = ({ isCalculated, getSolution, setText, text }) => (
  <section className="table">
    <div className="table__textarea">
      <label htmlFor="input">Введённое уравнение</label>
      <textarea
        id="input"
        defaultValue={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="введите уравнение"
      ></textarea>
    </div>
    {isCalculated ? (
      <div className="table__buttons">
        <button onClick={() => getSolution('http://localhost:7777/resolve')}>
          Дискриминант
        </button>
        <button onClick={() => getSolution('http://localhost:7777/resolve')}>
          Теорема Виета
        </button>
        <button onClick={() => getSolution('http://localhost:7777/resolve')}>
          Разложение на группы
        </button>
      </div>
    ) : (
      ''
    )}
  </section>
);

export default Table;
